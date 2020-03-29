<template>
  <div>
    <nav-bar class="nav" :class="{hidden: !showNavbar, shadowed: shadowNavbar}"/>
    <sidebar-social class="sidebar"/>
      <b-row class="main-content" :no-gutters=true>
        
        <router-view />
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
      showNavbar: true,
      shadowNavbar: false,
      lastScrollPosition: 0,
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 60px;
  width: 100vw;
  background: $background !important;
  position: fixed !important;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.nav.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav.shadowed{
  background-color: $background;  
  box-shadow: -5px 10px 8px $shadow !important;
}

.sidebar{
  position: fixed !important;
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  left:px;
  bottom: 0px;
  height:fit-content;
  z-index: 2;
  height:max-content;
}

.main-content{
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 94.5px;
  top:0px;
  bottom:0; 
  width: 100%; 
  height:fit-content;
  background-color: $background;  
}

#main-logo{
  position:relative;
  display: flex;
  text-align: center;
  height: 400px;
}
</style>
