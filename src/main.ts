import { createApp, type App as VueApp } from 'vue';
import App from './App.vue';

const _createAppInstance = () => {
    return createApp(App);
};

const _mountApp = <A extends VueApp = VueApp>(_appInst: A) => {
    return _appInst.mount('#app');
};

const main = () => {
    _mountApp(_createAppInstance());
};

main();
