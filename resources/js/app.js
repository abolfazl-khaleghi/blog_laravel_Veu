

require('./bootstrap');
window.Vue =require('vue');
import router from './router/router';
import Vuetify from './plagin/vuetify';


// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    Vuetify,
    router
});
