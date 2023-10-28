import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

// import '../node_modules/primeflex'
import '../node_modules/primeflex/primeflex.min.css';
import '../node_modules/primeflex/themes/primeone-light.css';

import 'primevue/resources/themes/lara-light-teal/theme.css';


import 'primeicons/primeicons.css'


// import 'primeflex/themes/primeone-light.css';
// import 'primeflex/themes/primeone-dark.css ';

const app = createApp(App);
app.mount('#app');
app.use(PrimeVue);