<template>
<div class="o-detail">
    <div class="detail" ref="targetDetail">
        <h2 class="title">もっと詳しく知りたくなったら……</h2>
        <p class="description">
            このページはIntersectionObserverAPIでスクロールアニメーションをするサンプルページです。<br />
            このページで紹介した登場人物は架空の人物であり、キャラクターを使用したコンテンツ化の予定はございません。<br />
            <br />
            IntersectionObserverAPIの詳しい使い方はMDNのドキュメントをご覧ください。
        </p>
    </div>
    <div class="button-container">
        <ul class="link-list">
            <li class="item -delay" ref="targetDetailNote">
                <a href="https://note.com/tech_hikky/n/nf5b44b4b1bf7" target="_blank">note記事</a>
            </li>
            <li class="item -delay" ref="targetDetailMDN">
                <a href="https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API" target="_blank">
                    MDNの解説へ
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const targetDetail = ref<HTMLElement | null>(null)
const targetDetailNote = ref<HTMLElement | null>(null)
const targetDetailMDN = ref<HTMLElement | null>(null)

const elements = [
    targetDetail,
    targetDetailNote,
    targetDetailMDN,
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
.o-detail {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @include m.sp() {
        height: 100vh;
    }
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: inherit;
        background: url('@/assets/kv-gals.png');
        filter: brightness(0.4);
        background-color: rgba(51, 51, 51, 0.5) ;
        background-position: top center;
        background-size: cover;
        z-index: -1;
    }
    .-intersecting {
        animation: fadeIn 0.5s ease-in-out both;
    }
    > .detail {
        opacity: 0;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        > .title {
            margin-bottom: 16px;
            font-size: 32px;
            font-weight: bold;
        }
        > .description {
            margin-bottom: 32px;
            text-align: center;
        }
    }
    > .button-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > .link-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include m.sp() {
                flex-direction: column;
            }
            > .item {
                opacity: 0;
                width: 240px; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                padding: 16px;
                &:first-child {
                    background-color: #41C9B4;
                    margin-right: 24px;
                    @include m.sp() {
                        margin-right: 0;
                        margin-bottom: 24px;
                    }
                }
                &:last-child {
                    background-color: #333;
                }
                > a {
                    display: block;
                    color: #fff;
                    font-weight: bold;
                    font-size: 24px;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>