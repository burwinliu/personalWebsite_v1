import Vue from 'vue'
import App from '@/App.vue'
import { ButtonPlugin, LayoutPlugin , NavbarPlugin, CollapsePlugin, SidebarPlugin,CardPlugin, TabsPlugin } from 'bootstrap-vue'
import router from '@/router';
import '@/styles/custom.scss'

// Install BootstrapVue
Vue.use(ButtonPlugin);
Vue.use(ButtonPlugin);
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(CollapsePlugin);
Vue.use(SidebarPlugin);
Vue.use(CardPlugin);
Vue.use(TabsPlugin);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
