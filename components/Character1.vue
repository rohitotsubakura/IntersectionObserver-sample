<template>
<div class="o-character1">
    <div class="character">
        <div class="image-container -delay -once" ref="targetCharacterImg1">
            <img src="@/assets/gal-annna.png" class="image" />
        </div>
        <div class="text-container">
            <p class="saying -delay -once" ref="targetCharacterSaying1">
                「美味しいものも<br />
                   このアニメーションも<br />
                   一期一会って感じ？」
            </p>
            <h3 class="name -delay -once" ref="targetCharacterName1">Anna Kourinbou</h3>
            <p class="description -delay -once" ref="targetCharacterDesc1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum explicabo veniam nihil laudantium totam laborum distinctio corporis facilis voluptatum quidem commodi, accusantium repellat temporibus maxime quaerat consequuntur magni voluptates!
            </p>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const targetCharacterSaying1= ref<HTMLElement | null>(null)
const targetCharacterImg1= ref<HTMLElement | null>(null)
const targetCharacterName1= ref<HTMLElement | null>(null)
const targetCharacterDesc1= ref<HTMLElement | null>(null)

const elements = [
    targetCharacterSaying1,
    targetCharacterImg1,
    targetCharacterName1,
    targetCharacterDesc1,
]

onMounted(() => {
    useIntersectionObserver().doObserve(elements)
})
</script>
<style lang="scss" scoped>
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
.o-character1 {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .-intersecting {
        animation: fadeIn 0.5s ease-in-out both;
    }
    > .character {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        > .text-container {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            > .saying {
                opacity: 0;
                font-size: 32px;
                font-weight: bold; 
                margin-bottom: 48px;
            }
            > .name {
                opacity: 0;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 24px;
            }
            > .description {
                opacity: 0;
                width: 60%;
            }
        }
        > .image-container {
            opacity: 0;
            > .image {
                height: 80%;
                width: auto;
            }
        }
    }
}
</style>