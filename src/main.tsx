import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { createPinia } from 'pinia';
import router from './router';
import './assets/reset.css';

const main = () => {
    // No App shell: the router renders the top-level view directly as a JSX render function
    const appInstance = createApp(() => <RouterView />);
    // Order matters: pinia first, so the active pinia is set before the router's first navigation runs guards
    appInstance.use(createPinia()).use(router);
    // #app is the empty container declared in index.htm at the repo root
    appInstance.mount('#app');
};

main();
