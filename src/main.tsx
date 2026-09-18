import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { createPinia } from 'pinia';
import router from './router';
import './assets/reset.css';

const main = () => {
    const appInstance = createApp(() => <RouterView />);
    appInstance.use(createPinia()).use(router);
    appInstance.mount('#app');
};

main();
