<template>
  <b-navbar toggleable="lg" type="dark" class = "px-3">
    <b-navbar-brand 
      id="logo" 
      class="logo router-link focus" 
      :class="{'logo-large':this.windowWidth >= 992}" 
      :to="{name: 'view-home'}" 
      @mouseover="hovered()" 
      @mouseleave="unhovered()" 
      @click="selected()"
    >
      <transition name="fade">
        <img v-if="!this.hoverLogo && !this.selectedLogo" :src="require(`@/assets/dark-logo.png`)" alt= "imageAltReg" key="imageAltReg"/>
        <img v-if="this.hoverLogo && !this.selectedLogo" :src="require(`@/assets/dark-logo-hovered.png`)" alt= "imageAltHov" key= "imageAltHov"/>
        <img v-if="this.selectedLogo" :src="require(`@/assets/dark-logo-selected.png`)" alt= "imageAltSel" key= "imageAltSel"/>
      </transition>
    </b-navbar-brand>

    <div class="absolute_position" align="right" >
      <b-navbar-toggle class = "icon text-center" target="navbar-side-collapse">
        <template align-v="center" v-slot:activator="{ expanded }">
          <b-icon v-on="expanded"></b-icon>
        </template>
      </b-navbar-toggle>
    </div>
    <b-collapse id="navbar-toggle-collapse" class ="class-wrapper" is-nav>
      <b-col class="class-wrapper">
        <b-navbar-nav align="right" class="ml-auto">
          <b-navbar-nav align-v="center">
            <b-nav-item class="router-link button focus" v-for="info in ButtonInfoLocal" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus" v-for="info in ButtonInfoWeb" :key="info.id" :href="info.href">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-col>
    </b-collapse>
    <b-sidebar 
      id="navbar-side-collapse"
      v-on:change = "onShown" 
      class ="sidebar-wrapper" 
      backdrop-variant="dark" 
      bg-variant="dark" 
      text-variant="light" 
      width="fit-content"
      is-nav shadow right backdrop
    >
      <b-col class="class-wrapper sidebar-wrapper sidebar">
        <b-navbar-nav align-v="center" align="left" class="ml-auto px-2 sidebar-wrapper sidebar">
          <b-nav-item class="router-link button focus px-4 py-2" v-for="info in ButtonInfoLocal" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
          <b-nav-item class="router-link button focus px-4 py-2" v-for="info in ButtonInfoWeb" :key="info.id" :href="info.href">{{info.msg}}</b-nav-item>
          <b-nav-item class="router-link button focus px-4 py-2" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
        </b-navbar-nav>
      </b-col>
    </b-sidebar>
    

  </b-navbar>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return{
      ButtonInfoLocal: [
        {id:0, name:"view-about", msg: "About"},
        {id:1, name:"view-contact", msg: "Contact"},
        {id:2, name:"view-notebook", msg: "Notebook"},
      ],
      ButtonInfoWeb: [
      ],
      expanded: false,
      selectedLogo: false,
      hoverLogo: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  mounted(){
    document.addEventListener('touchstart', this.handleTouchStart);        
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('click', this.checkClick);
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy(){
    document.removeEventListener('touchstart', this.handleTouchStart);        
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('click', this.checkClick);
    window.removeEventListener("resize", this.resize);
    
  },
  props: {
    username: String,
  },
  methods: {
    handleTouchStart(evt) {           
      this.xDown = evt.touches[0].clientX;                                      
      this.yDown = evt.touches[0].clientY;                                      
    },                                             
    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = this.xDown - xUp;
        var yDiff = this.yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 1 ) {
              this.handleLeftSwipe();
            } else if( xDiff < -1 ) {
              this.handleRightSwipe();
            }                       
        }
        /* reset values */
        this.xDown = null;
        this.yDown = null;                                             
    },
    handleLeftSwipe(){
      if(document.getElementById("navbar-side-collapse") != null && document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")){
        this.$root.$emit('bv::toggle::collapse', 'navbar-side-collapse')
      }
    },
    handleRightSwipe(){
      if(document.getElementById("navbar-side-collapse") != null && document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")){
        if (this.$route.name !=='view-home'){
          this.$router.push({name: 'view-home'});
        }
      }
      else{
        this.$root.$emit('bv::toggle::collapse', 'navbar-side-collapse')
      }
    },
    checkClick(evt){
      if(document.getElementById("logo").contains(evt.target)){
        this.selectedLogo = true;
        this.hoverLogo = true;
      }
      else{
        this.selectedLogo = false;
        this.hoverLogo = false;
      }
    },
    selected(){
      this.selectedLogo = true;
    },
    hovered(){
      this.hoverLogo = true;
    },
    unhovered(){
      this.hoverLogo = false;
    },
    onShown(shown){
      if (shown === true){
        this.$emit("OpenNavBar");
      }
      else if(shown === false){
        this.$emit("CloseNavBar");
      }
    },
    resize(){
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
/* Add a black background color to the top navigation */
.sidebar{
  height: inherit;
  display: flex;
  flex-direction:column;
  flex: 1;
  margin-left: 0;
  max-width: 100%;
  width: 100%;
}

.class-wrapper{
  text-align : right;
  padding-right: 0;
  padding-left: 0;
  width: fit-content;
}

.sidebar-wrapper{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

#navbar-side-collapse{
  width: auto;
}

.navbar{
    background-color:  $background ; 
    z-index: 2;
    box-shadow: none;
}

.nav-link{
  padding-right: 0px ;
  padding-left:   0px ;
}

.navbar-dark .navbar-nav .nav-link{
  color: $sub-1; 
  font-family: 'Source Code Pro', monospace; 
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1); 
  padding: 10px 20px;
  position: relative;
}

/* Change the color of links on hover */
.navbar-dark .navbar-nav .nav-link:hover {
  color: $pop ; 
}

li.nav-item.router-link.button>a.nav-link{
  padding: .5rem;
}

li.nav-item.router-link.button>a.nav-link:focus{
  color: $pop-prime;
}

a:active, a:focus {
  outline: 0;
  border: none;
  outline-style: none;
  color: $primary ;
}

.logo-large img{
  left:33px ;
}

.logo img{ 
  position: absolute;
  z-index: 10;
  top: 8px;
  width: 40px;
  height: 40px;
  max-width: 40px;
  max-height: 40px;
}

.fade-enter-active{
  transition: opacity .25s;
}
.fade-leave-active {
  transition: opacity .4s;
}
.fade-enter-to, .fade-leave{
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
