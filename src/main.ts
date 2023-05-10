import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

import BalmUI from 'balm-ui'; // Official Google Material Components
import 'balm-ui-css';

const app = createApp(App)
const store = createPinia()
app.use(router)
app.use(store)
app.use(BalmUI, {
    UiTextfield: {

    },
    UiList: {

    },
    UiGrid: {
        
    }
});
app.mount('#app')
