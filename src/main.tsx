import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { createPinia } from 'pinia';
import router from './router';
import './assets/reset.css';

const getAppInstance = () => {
    return createApp(() => <RouterView />);
};

const configApp = (appInstance: ReturnType<typeof getAppInstance>) => {
    appInstance.use(createPinia()).use(router);
    return appInstance;
};

const mountApp = (appInstance: ReturnType<typeof getAppInstance>) => {
    appInstance.mount('#app');
};

const main = () => {
    const appInstance = getAppInstance();
    configApp(appInstance);
    mountApp(appInstance);
};

main();
