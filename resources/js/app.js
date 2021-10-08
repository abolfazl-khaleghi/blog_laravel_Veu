

require('./bootstrap');
window.Vue =require('vue');
import Vuetify from 'vuetify';

Vue.use(Vuetify);



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
const vuetify = new Vuetify([

]);

const app = new Vue({
    el: '#app',
    vuetify
});
