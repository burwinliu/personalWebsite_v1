<template>
  <div>
    <nav-bar 
      v-on:sideBarOpened="sideBarOpen" 
      v-on:sideBarClosed="sideBarClose" 
      class="index-nav" 
      :class="{hidden: !showNavbar, shadowed: shadowNavbar}"
    />
    <b-row no-gutters>
      <b-col>
        <sidebar-social class="index-sidebar-pos"/>
      </b-col>
      <b-col cols="10" class="index-router-wrapper">
        <router-view />
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
      SidebarSocial
  },
  data: function(){
    return{
      sidebarShown: false,
      showNavbar: true,
      shadowNavbar: false,
      lastScrollPosition: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    }
  },
  created () {
    document.title = this.$route.meta.title;
  },
  mounted () {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      this.sidebarShown = isJustShown;
    })
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    window.onresize = () => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    sideBarOpen(){
      this.sidebar = true;
    },
    sideBarClose(){
      this.sidebar = false;
    },
    onScroll () {
      if (this.sidebarShown === true){
        return
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
  }
};
</script>

<style lang="scss" scoped>

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
