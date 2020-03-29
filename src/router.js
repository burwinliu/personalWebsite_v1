// router.js
import Vue from 'vue'
import Router from 'vue-router';
import Index from '@/views/index.vue';
import IndexMobile from '@/views/indexMobile.vue';
import ViewHome from '@/views/ViewHome.vue';
import ViewAbout from '@/views/ViewAbout.vue'
import ViewContact from '@/views/ViewContact.vue'

Vue.use(Router);

export default new Router({
        routes: [
        { 
            path: '/web', 
            alias: '/', 
            component: Index,
            children:[
                {
                    name: 'view-home',
                    path: '',
                    component: ViewHome,
                },
                {
                    name: 'view-about',
                    path: 'about',
                    component: ViewAbout
                },
                {
                    name: 'view-contact',
                    path: 'contact',
                    component: ViewContact
                },
            ]
        },
        { path: '/mobile', component: IndexMobile },
    ]
});