<template>
  <div>
    <nav-bar 
      class="index-nav" 
      :class="{hidden: !showNavbar, shadowed: shadowNavbar}"
    />
    <b-row no-gutters>
      <b-col>
        <sidebar-social class="index-sidebar-pos"/>
      </b-col>
      <b-col cols="10" class="index-router-wrapper" :class="{'px-5':windowWidth >= 992}">
        <router-view id="router"/>
      </b-col>
      <b-col></b-col>
    </b-row> 
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SidebarSocial from '@/components/SidebarSocial.vue'

export default {
  name: 'Index',
  components: {
      NavBar,
      SidebarSocial,
  },
  data: function(){
    return{
      sidebarShown: false,
      showNavbar: true,
      shadowNavbar: false,
      lastScrollPosition: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      xDown: null,                                                 
      yDown: null, 
    }
  },
  created () {
    document.title = this.$route.meta.title;
  },
  mounted () {
    this.$root.$on('bv::collapse::state', this.collapse);
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    window.onresize = () => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    };
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
    this.$root.$off('bv::collapse::state')
  },
  methods: {
    onScroll () {
      if (this.sidebarShown === true){
        return;
      }
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return
      }
      if(window.pageYOffset > 60){
        this.shadowNavbar = true;
      }
      else{
        this.shadowNavbar = false;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    collapse(collapseId, isJustShown){
      this.sidebarShown = isJustShown;
      if (this.sidebarShown === true){
        document.getElementById("router").style.top = `-${window.scrollY}px`;
        document.getElementById("router").style.position = 'fixed';

      }
      else{
        document.getElementById("router").classList.remove("sidebar-shown");
        const scrollY = document.getElementById("router").style.top;
        document.getElementById("router").style.position = '';
        document.getElementById("router").style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.sidebar-shown{
  position: fixed !important;
}

.index-nav {
  height: fit-content;
  width: 100vw;
  background: $background !important;
  position: fixed !important;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.index-nav.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.index-nav.shadowed{
  background-color: $background;  
  box-shadow: -5px 10px 8px $shadow !important;
}

.index-sidebar-pos{
  position: fixed !important;
  bottom: 0px;
  z-index: 2;
}

.index-router-wrapper{
  top: 0;
  height: fit-content;
  z-index: 0;
}
</style>
