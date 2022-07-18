<template>
<div class="o-footer">
    <p class="copyright">
        &copy; Gals in the Frontend 製作委員会(仮)
    </p>
</div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.o-footer {
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    > .copyright {
        text-align: center;
        color: #fff;
    }
}
</style>