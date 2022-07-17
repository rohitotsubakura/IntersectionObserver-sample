<template>
<div class="o-about">
    <div ref="targetAbout">
        <h2 class="title">IntersectionObserverってなあに？</h2>
        <p class="description">
            IntersectionObserverとはJavaScriptで用意されている、DOM要素の交差判定APIです。<br />
            今までoffsetを使って実装されていたような、スクロールで実行するアニメーションが楽に実装できます。<br />
            この下から、使いこなしのサンプルを見ていきましょう。
        </p>
    </div>
    <div class="melits">
        <h3 class="title" ref="targetAboutListTitle">
            IntersectionObserverを使うといいことが!
        </h3>
        <ul class="item-list">
            <li class="item" ref="targetAboutListItem1">
                <h4>testtext!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
            <li class="item" ref="targetAboutListItem2">
                <h4>testtext!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
            <li class="item" ref="targetAboutListItem3">
                <h4>testtext!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';

const doObserve = ((elements: Ref<HTMLElement | null>[]) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    }
    elements.forEach((element) => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item, index) => {
                if (item.isIntersecting && ~element.value.className.indexOf('item')) {
                    setTimeout(() => {
                        item.target.classList.add('-intersecting')
                    }, 300 * index +1)
                } else if (item.isIntersecting) {
                    item.target.classList.add('-intersecting')
                    observer.disconnect()
                }
            })
        }, options)
        observer.observe(element.value!)
    })
})

const targetAbout = ref<HTMLElement | null>(null)
const targetAboutListTitle = ref<HTMLElement | null>(null)
const targetAboutListItem1 = ref<HTMLElement | null>(null)
const targetAboutListItem2 = ref<HTMLElement | null>(null)
const targetAboutListItem3 = ref<HTMLElement | null>(null)

const elements = [
    targetAbout,
    targetAboutListTitle,
    targetAboutListItem1,
    targetAboutListItem2,
    targetAboutListItem3,
]

onMounted(() => {
    doObserve(elements)
})
</script>
<style lang="scss">
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.o-about {
    width: 100%;
    height: 80vh;
    .-intersecting {
        animation: fadeIn 0.5s ease-in-out both;
    }
    > .title {
        margin-bottom: 16px;
        font-size: 32px;
        font-weight: bold;
    }
}
</style>