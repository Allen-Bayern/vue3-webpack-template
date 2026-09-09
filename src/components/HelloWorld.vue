<script lang="ts" setup>
defineProps<{
    msg: string;
    onClick?: () => void;
}>();
</script>

<template>
    <h2 @click="onClick">
        {{ msg }}
    </h2>
    <img src="~assets/logo.png" alt="HEROPY" />
</template>

<style scoped lang="scss">
@import '~/scss/main';

h2 {
    font-size: 22px;
    color: $color--primary;
    & + img {
        width: 120px;
    }
}
</style>
