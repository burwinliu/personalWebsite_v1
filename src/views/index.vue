<template>
  <div>
    <nav-bar 
      id="navbar"
      class="index-nav" 
      :class="{hidden: !showNavbar, shadowed: shadowNavbar}"
      v-on:OpenNavBar="this.showNav"
      v-on:CloseNavBar="this.closeNav"
    />
    <b-row class="main-body" :class="{'body-wrap-small': this.bodyWrapSmall}" no-gutters>
      <b-col class="sidebar">
        <transition name="component-fade" mode="out-in">
          <sidebar-social id = "sidebar" class="index-sidebar-pos"/>
        </transition>
      </b-col>
      <transition name="component-fade" mode="out-in">
        <router-view id="router" :class="[this.windowWidth >= 992?'router-padding':'px-3', (this.windowHeight<600 || this.windowWidth < 400)?'index-router-wrapper-small':'']"/>
      </transition>
    </b-row> 
    <footer-info id="footer" class="footer" v-if="this.$route.name !== 'view-home'"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SidebarSocial from '@/components/SidebarSocial.vue'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
  name: 'Index',
  components: {
      NavBar,
      SidebarSocial,
      FooterInfo,
  },
  data: function(){
    return{
      sidebarShown: false,
      showNavbar: true,
      shadowNavbar: false,
      lastScrollPosition: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      routerWidth: 0,
      footerWidth: 0,
      footerHeight: 0,
      xDown: null,                                                 
      yDown: null, 
      bodyWrapSmall: (this.windowHeight<600||this.windowWidth<400) && this.$route.name!=="view-home",
      sidebarAttatched: false,
      footerTop: 0,
    }
  },
  mounted () {
    this.routerWidth = document.getElementById("router").offsetWidth;
    if (this.$route.name !=='view-home'){
      this.footerWidth = document.getElementById("footer").offsetWidth;
      this.footerHeight = document.getElementById("footer").offsetHeight;
    }
    this.$root.$on('bv::collapse::state', this.collapse);
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener("resize", this.resize);

    // to update the sidebar
    this.onScroll();
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
    this.$root.$off('bv::collapse::state')
  },
  methods: {
    onScroll () {
      // For sidebar
      if (this.$route.name !=='view-home'){
        var footer = document.getElementById('footer').getBoundingClientRect();
        var sidebar = document.getElementById('sidebar').getBoundingClientRect();

        this.footerTop = footer.top;
        if (footer.top <= sidebar.bottom){
          document.getElementById('sidebar').style.bottom = `${footer.height}px`;
          this.sidebarAttatched = true;
        }
        else if (footer.top - footer.height > sidebar.bottom && this.sidebarAttatched){
          document.getElementById('sidebar').style.bottom = `0px`;
          this.sidebarAttatched = false;
        }
      }
      // For showing and hiding navbar
      if (this.sidebarShown === true){
        return;
      }
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      if(window.pageYOffset > 60){
        this.shadowNavbar = true;
      }
      else{
        this.shadowNavbar = false;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    showNav(){
      this.showNavbar = true;
      this.lastScrollPosition = window.pageYOffset;
      document.getElementById("navbar").classList.remove('hidden');
    },
    closeNav(){
      this.showNavbar = true;
      this.lastScrollPosition = window.pageYOffset;
    },
    collapse(collapseId, isJustShown){
      if(collapseId === "navbar-side-collapse"){
        this.sidebarShown = isJustShown;
        if (this.sidebarShown === true){

          document.getElementById("router").style.top = `-${window.scrollY}px`;
          document.getElementById("router").style.width = `${this.routerWidth}px`;
          document.getElementById("router").style.position = 'fixed';
          if (this.$route.name !=='view-home'){
            // Footer isnt shown in home screen
            document.getElementById("footer").style.top = `${this.footerTop}px`;
            document.getElementById("footer").style.position = 'fixed';
            document.getElementById("footer").style.width = `${this.footerWidth}px`;
            document.getElementById("footer").style.height = `${this.footerHeight}px`;
          }

        }
        else{
          if (this.$route.name !=='view-home'){
            // Footer isn't shown on home screen
            document.getElementById("footer").style.top =''
            document.getElementById("footer").style.position = '';
            document.getElementById("footer").style.width = '';
            document.getElementById("footer").style.height = '';
          }

          document.getElementById("router").classList.remove("sidebar-shown");
          const scrollY = document.getElementById("router").style.top;
          document.getElementById("router").style.position = '';
          document.getElementById("router").style.width = "";
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    },
    resize(){
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.routerWidth = document.getElementById("router").offsetWidth;
      if (this.$route.name !=='view-home'){
        this.footerWidth = document.getElementById("footer").offsetWidth;
        this.footerHeight = document.getElementById("footer").offsetHeight;
      }
      this.bodyWrapSmall = (this.windowHeight<600||this.windowWidth<400) && this.$route.name!=="view-home";
      if (this.windowWidth > 992 && this.sidebarShown){
        // Collapse the sidebar if we are to big
        this.$root.$emit('bv::toggle::collapse', 'navbar-side-collapse');
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.sidebar-shown{
  position: fixed ;
}

.sidebar{
  max-width:fit-content;
}

.body-wrap-small{
  padding-bottom:150px;
  height: auto;
}

.index-nav {
  height: fit-content;
  width: 100%;
  background: $background;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.index-nav.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.index-nav.shadowed{
  background-color: $background;  
  box-shadow: -5px 10px 8px $shadow;
}

.index-sidebar-pos{
  position: fixed;
  bottom: 0px;
  z-index: 2;
  transition: 0.3s all ease-out;
}

.index-router-wrapper{
  height: fit-content;
  z-index: 0;
}

.index-router-wrapper-small{
  padding-top:65px;
}

.router-padding{
  padding-left:15%;
  padding-right:15%;
  max-width: 1600px;
  margin-left:auto;
  margin-right: auto;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}

.main-body{
  display:table-row;
}

.footer{
  display:table-row;
}
</style>
