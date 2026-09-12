import { createApp, type App as VueApp, type Plugin } from 'vue';
import { RouterView } from 'vue-router';
import { createPinia } from 'pinia';
import router from './router';
import './assets/reset.css';

// App-level plugin list. New plugins can be appended here as the app grows.
// Object.freeze prevents the array from being accidentally modified later
const plugins = Object.freeze<Plugin[]>([createPinia(), router]);

// Create the Vue app instance: the root component renders <RouterView /> directly,
// and all plugins are registered one by one via reduce
const _createAppInstance = () => {
    const appInstance = plugins.reduce(
        (app, plugin) => app.use(plugin),
        createApp(() => <RouterView />)
    );
    return appInstance;
};

// Resolve the DOM element to mount the app onto: prefer the #app node,
// and fall back to <body> when it is missing (e.g. in tests or non-standard hosts)
const _getMountElement = () => {
    let res = document.getElementById('app');
    if (!res) {
        ({ body: res } = document);
    }
    return res;
};

// Mount the app instance onto the #app DOM node and return the mounted root component instance
const _mountApp = <A extends VueApp = VueApp>(_appInst: A) => {
    return _appInst.mount(_getMountElement());
};

// Entry function: create the app instance first, then mount it to the page
const main = () => {
    _mountApp(_createAppInstance());
};

// Bootstrap the application
main();
