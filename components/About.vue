<template>
<div class="o-about">
    <div class="about" ref="targetAbout">
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
        <ul class="merit-list">
            <li class="item -delay" ref="targetAboutListItem1">
                <h4 class="heading">testtext!</h4>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
            <li class="item -delay" ref="targetAboutListItem2">
                <h4 class="heading">testtext!</h4>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
            <li class="item -delay" ref="targetAboutListItem3">
                <h4 class="heading">testtext!</h4>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni aliquid, impedit consequuntur ratione necessitatibus consequatur quaerat repudiandae autem amet quas non accusamus numquam est aspernatur delectus deserunt iste facilis.</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

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
.o-about {
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
    > .about {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include m.tb() {
            padding: 32px 4%;
        }
        > .title {
            margin-bottom: 16px;
            font-size: 32px;
            font-weight: bold;
            @include m.sp() {
                word-break: break-all;
                font-size: 28px;
            }
        }
        > .description {
            margin-bottom: 32px;
        }
    }
    > .melits {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > .title {
            margin-bottom: 16px;
            font-size: 32px;
            font-weight: bold;
            @include m.sp() {
                font-size: 28px;
                word-break: break-all;
            }
        }
        > .merit-list {
            display: flex;
            align-items: center;
            justify-content: space-around;
            @include m.sp() {
                flex-direction: column;
            }
            > .item {
                opacity: 0;
                width: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 4px solid #333;
                border-radius: 8px;
                padding: 32px;
                @include m.sp() {
                    width: 100%;
                    margin-bottom: 24px;
                }
                &:nth-child(2) {
                    border-color: aqua;
                }
                > .heading {
                    color: #333;
                    margin-bottom: 24px;
                }
            }
        }
    }
}
</style>