import { Ref } from 'vue';

const doObserve = ((elements: Ref<HTMLElement | null>[]) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    }
    elements.forEach((element, index) => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                if (item.isIntersecting && item.target.classList.contains('item')) {
                    const delay = 300 * index
                    setTimeout(() => {
                        item.target.classList.add('-intersecting')
                    }, delay)
                } else if (item.isIntersecting) {
                    item.target.classList.add('-intersecting')
                } else {
                    item.target.classList.remove('-intersecting')
                }
            })
        }, options)
        observer.observe(element.value!)
    })
})

export const useIntersectionObserver = () => {
    return {
        doObserve,
    }
}