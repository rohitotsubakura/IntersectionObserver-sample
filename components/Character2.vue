<template>
<div class="o-character2">
    <div class="character">
        <div class="image-container -delay" ref="targetCharacterImg2">
            <img src="@/assets/gal-tsukasa.png" class="image" />
        </div>
        <div class="text-container">
            <p class="saying -delay" ref="targetCharacterSaying2">
                「また戻ってきてくださいね<br />
                  何度でも歓迎しますよ」
            </p>
            <h3 class="name -delay" ref="targetCharacterName2">Tsukasa Hirasaka</h3>
            <p class="description -delay" ref="targetCharacterDesc2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum explicabo veniam nihil laudantium totam laborum distinctio corporis facilis voluptatum quidem commodi, accusantium repellat temporibus maxime quaerat consequuntur magni voluptates!
            </p>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const targetCharacterSaying2= ref<HTMLElement | null>(null)
const targetCharacterImg2= ref<HTMLElement | null>(null)
const targetCharacterName2= ref<HTMLElement | null>(null)
const targetCharacterDesc2= ref<HTMLElement | null>(null)

const elements = [
    targetCharacterSaying2,
    targetCharacterImg2,
    targetCharacterName2,
    targetCharacterDesc2,
]

onMounted(() => {
    useIntersectionObserver().doObserve(elements)
})
</script>
<style lang="scss" scoped>
@use '@/assets/styles/mixins' as m;
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
.o-character2 {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include m.tb() {
        height: auto;
    }
    .-intersecting {
        animation: fadeIn 0.5s ease-in-out both;
    }
    > .character {
        width: 80%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
        @include m.sp() {
            flex-direction: column;
            justify-content: center;
        }
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
            margin: 0 auto;
            @include m.sp() {
                height: 100vh;
            }
            > .image {
                height: 100%;
                width: auto;
            }
        }
    }
}
</style>