// router.js
import Vue from 'vue'
import Router from 'vue-router';
import Index from '@/views/index.vue';
import ViewHome from '@/views/ViewHome.vue';
import ViewAbout from '@/views/ViewAbout.vue'
import ViewContact from '@/views/ViewContact.vue'

Vue.use(Router);

const router = new Router({
        routes: [
        { 
            path: '/', 
            component: Index,
            children:[
                {
                    name: 'view-home',
                    path: '',
                    component: ViewHome,
                    meta:{
                        title: 'Burwin Liu - Home Page',
                    }
                },
                {
                    name: 'view-about',
                    path: 'about',
                    component: ViewAbout,
                    meta:{
                        title: 'Burwin Liu - About Page',
                    }
                },
                {
                    name: 'view-contact',
                    path: 'contact',
                    component: ViewContact,
                    meta:{
                        title: 'Burwin Liu - Contact Page',
                    }
                },
            ]
        },
    ]
});

export default router;