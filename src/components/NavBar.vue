<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand class="logo router-link focus" :to="{name: 'view-home'}" @mouseover="hovered()" @mouseleave="unhovered()" @click="selected()">
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
        <b-navbar-nav align="right" class="ml-auto px-2">
          <b-navbar-nav align-v="center">
            <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoLocal" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoWeb" :key="info.id" :href="info.href">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus px-2" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-col>
    </b-collapse>
    <b-sidebar id="navbar-side-collapse" class ="class-wrapper" is-nav shadow right backdrop backdrop-variant="dark" bg-variant="dark" text-variant="light" width="fit-content">
      <b-col class="class-wrapper sidebar">
        <b-navbar-nav align-v="center" align="left" class="ml-auto px-3 sidebar">
          <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoLocal" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
          <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoWeb" :key="info.id" :href="info.href">{{info.msg}}</b-nav-item>
          <b-nav-item class="router-link button focus px-2" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
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
      ],
      ButtonInfoWeb: [
        {id:2, href:"https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/", msg: "Notebook"},
      ],
      expanded: false,
      selectedLogo: false,
      hoverLogo: false,
    };
  },
  mounted(){
    document.addEventListener('touchstart', this.handleTouchStart);        
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('click', this.checkClick);
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
            console.log(xDiff);
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
      if(document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")){
        this.$root.$emit('bv::toggle::collapse', 'navbar-side-collapse')
      }
    },
    handleRightSwipe(){
      if(document.getElementById("navbar-side-collapse").hasAttribute("aria-hidden")){
        if (this.$route.name !=='view-home'){
          this.$router.push({name: 'view-home'});
        }
      }
      else{
        this.$root.$emit('bv::toggle::collapse', 'navbar-side-collapse')
      }
    },
    checkClick(){
      if( !this.hoverLogo && this.selectedLogo){
        this.selectedLogo = false;
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
  text-align : right !important;
  padding-right: 0;
  padding-left: 0;
}

.navbar{
    background-color:  $background !important; 
    z-index: 2;
    box-shadow: none;
}

.nav-link{
  padding-right: 0px !important;
  padding-left:   0px !important;
}

.navbar-dark .navbar-nav .nav-link{
  color: $sub; 
  font-family: 'Source Code Pro', monospace!important; 
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)!important; 
  padding: 10px 20px;
  position: relative;
}

/* Change the color of links on hover */
.navbar-dark .navbar-nav .nav-link:hover {
  color: $pop !important; 
}

a:active, a:focus {
  outline: 0;
  border: none;
  outline-style: none;
  color: $primary !important;
}

.logo img{ 
  position: absolute;
  z-index: 10;
  top: 8px;
  left: 16px;
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
