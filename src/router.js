// router.js
import Vue from 'vue'
import Router from 'vue-router';
import Index from '@/views/index.vue';
import ViewHome from '@/views/ViewHome.vue';
import ViewAbout from '@/views/ViewAbout.vue'
import ViewContact from '@/views/ViewContact.vue'
import ViewNotebook from '@/views/ViewNotebook.vue'

Vue.use(Router);

const routes = [
    { 
        path: '/', 
        component: Index,
        meta:{
            metaTags:[
                {
                    name: "google-site-verification",
                    content:"jKYTAtyoTiABMVXOjAQr81lJZ7YfTxSzqUXkDa4Wyuo",
                }
            ]
        },
        children:[
            {
                name: 'view-home',
                path: '',
                component: ViewHome,
                meta:{
                    
                    title: 'Burwin Liu: Software Engineer and Student',
                   
                    metaTags:[
                        {
                            name: 'description',
                            content:'Burwin Liu is a Student, Computer Scientist and Software Engineer from Irvine, California. He has worked in everything from Full Stack Development to'
                                +' Machine Learning'
                        },
                        {
                            name: "google-site-verification",
                            content:"jKYTAtyoTiABMVXOjAQr81lJZ7YfTxSzqUXkDa4Wyuo",
                        },
                        {
                            property: 'og:image',
                            content: '/homeSnapshot.png',
                        },
                    ]
                },
            },
            {
                name: 'view-about',
                path: 'about',
                component: ViewAbout,
                meta:{
                    title: 'Burwin Liu - About Page',
                    metaTags:[
                        {
                            name: "google-site-verification",
                            content:"jKYTAtyoTiABMVXOjAQr81lJZ7YfTxSzqUXkDa4Wyuo",
                        }
                    ]
                }
            },
            {
                name: 'view-contact',
                path: 'contact',
                component: ViewContact,
                meta:{
                    title: 'Burwin Liu - Contact Page',
                    metaTags:[
                        {
                            name: "google-site-verification",
                            content:"jKYTAtyoTiABMVXOjAQr81lJZ7YfTxSzqUXkDa4Wyuo",
                        }
                    ]
                    
                }
            },
            {
                name: 'view-notebook',
                path: 'notebook',
                component: ViewNotebook,
                meta:{
                    title: 'Burwin Liu - Notebook Navgiation Page',
                    metaTags:[
                        {
                            name: "google-site-verification",
                            content:"jKYTAtyoTiABMVXOjAQr81lJZ7YfTxSzqUXkDa4Wyuo",
                        }
                    ]
                    
                }
            },
        ]
    },
]

const router = new Router({
    routes,
    mode: 'hash'
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.metaTags != undefined){
        for (let i = 0; i<to.meta.metaTags.length; ++i){
            var meta = document.createElement('meta');
            for (let j in to.meta.metaTags[i]){
                meta.setAttribute(j, to.meta.metaTags[i][j]);
            }
            document.getElementsByTagName('head')[0].appendChild(meta); 
        }
    }
    next()
})
  

export default router;