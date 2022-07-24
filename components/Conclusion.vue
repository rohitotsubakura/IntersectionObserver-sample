<template>
<div class="o-conclusion">
    <div class="conclusion" ref="targetConclusion">
        <p class="comment">
            IntersectionObserverAPIで<br />
            快適なサイト制作を！
        </p>
    </div>
</div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const targetConclusion = ref<HTMLElement | null>(null)

const elements = [
    targetConclusion,
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
.o-conclusion {
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .-intersecting {
        animation: fadeIn 0.5s ease-in-out both;
    }
    > .conclusion {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > .comment {
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            @include m.sp() {
                font-size: 20px;
            }
        }
    }
}
</style>