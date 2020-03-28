<template>
  <div>
    <nav-bar class="nav" :class="{hidden: !showNavbar, shadowed: shadowNavbar}"/>
    <sidebar-social class="sidebar"/>
    <b-row class="main-content" :no-gutters=true>
      
      <b-col>
        <img id="main-logo" :src="require(`@/assets/dark-main-logo.png`)" alt= "Main Logo"/>
        <br>
        <a>Welcome to my website. There is more to come.</a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SidebarSocial from '@/components/SidebarSocial.vue'

console.log("registered");

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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
a{
  font-family: 'Cinzel', serif;
  font-size: x-large;
}
.nav {
  height: 60px;
  width: 100vw;
  background: #0a192f !important;
  position: fixed !important;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.nav.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav.shadowed{
  background-color: #0a192f;  
  box-shadow: -5px 10px 8px #081324 !important;
}

.sidebar{
  position: fixed !important;
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  left:20px;
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
  height: 200vh;
  background-color: #0a192f;  
}

#main-logo{
  position:relative;
  display: flex;
  text-align: center;
  height: 400px;
}
a{
  position: relative;
  color: #e6f1ff!important;
}
</style>
