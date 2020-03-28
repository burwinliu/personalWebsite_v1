// router.js
import Vue from 'vue'
import Router from 'vue-router';
import Index from '@/views/index.vue';
import IndexMobile from '@/views/indexMobile.vue';
import Test from '@/components/test.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/foo', component: Index },
        { path: '/bar', component: IndexMobile },
        {path: '/', component: Test},
    ]
});