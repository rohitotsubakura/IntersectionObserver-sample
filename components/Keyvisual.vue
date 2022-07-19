<template>
<div class="o-keyvisual">
    <img src="@/assets/kv-gals.png" class="gals" />
    <img src="@/assets/kv-text.svg" class="text" />
</div>
</template>
<script setup lang="ts">

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
@keyframes push {
    from {
        opacity: 0;
        transform: translateZ(20px);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
}
.o-keyvisual {
    width: 100%;
    height: 100vh;
    background-image: url('/cyber-4.jpg');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    > .gals {
        height: 100vh;
        display: block;
        margin: 0 auto;
        animation: fadeIn 2s ease-in-out both;
    }
    > .text {
        z-index: 2;
        width: 80%;
        position: absolute;
        bottom: 12px;
        left: 0;
        right: 0;
        margin: auto;
        animation: push 1s ease-out both;
    }
}
</style>