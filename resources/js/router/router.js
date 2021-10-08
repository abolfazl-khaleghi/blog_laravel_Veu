import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/login',
            component:require('../view/Auth/Login').default
        },
        {
            path:'/register',
            component:require('../view/Auth/Register').default
        },
    ]
}

);