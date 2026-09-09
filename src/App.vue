<script lang="ts" setup>
import { ref } from 'vue';
import HelloWorld from '~/components/HelloWorld.vue';

const message = ref('Hello Vue!');

const handler = () => {
    // eslint-disable-next-line no-console
    console.log(message.value);
    message.value += '!';
};
</script>

<template>
    <!-- Remove & use example component! -->
    <HelloWorld :msg="message" @click="handler" />
    <HelloWorld msg="Good" />
</template>
