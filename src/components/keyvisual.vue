<template>
<div class="m-keyvisual">
    <img src="/kv-gals.png" class="gals"/>
</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.m-keyvisual {
    width: 100%;
    height: 100vh;
    background-image: url('/cyber-4.png');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    > .gals {
        width: 100%;
        height: auto;
        animation: fadeIn 0.5s ease-in-out forward;
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translate3d(0, -10px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>