<script lang="ts" setup>
const props = defineProps<{
    msg: string;
    onClick?: () => void;
}>();

const handleClick = () => {
    if (props.onClick) {
        props.onClick();
    }
};
</script>

<template>
    <h2 @click="handleClick">
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
