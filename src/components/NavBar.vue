<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand class="logo router-link focus" :to="{name: 'view-home'}">
      <img class="imgReg" :src="require(`@/assets/dark-logo.png`)" alt= "imageAltReg"/>
      <img class="imgHov" :src="require(`@/assets/dark-logo-hovered.png`)" alt= "imageAltHov"/>
      <img class="imgSel" :src="require(`@/assets/dark-logo-selected.png`)" alt= "imageAltSel"/>
    </b-navbar-brand>
    <b-nav align="right" class="ml-auto">
      <b-navbar-nav class="button focus" align-v="center">
        <b-nav-item class="router-link button focus" v-for="info in ButtonInfo" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
        <b-nav-item class="router-link button focus" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
      </b-navbar-nav>
    </b-nav>
  </b-navbar>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return{
      ButtonInfo: [
        {id:0, name:"view-about", msg: "About"},
        {id:1, name:"view-contact", msg: "Contact"},
      ]
    };
  },
  props: {
    username: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* Add a black background color to the top navigation */

.navbar.navbar-dark.bg-dark{
    background-color:  $background !important; 
    z-index: 2;
    box-shadow: none;
}

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

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
  top:10%;
  display:inline-block;
  max-width: 60px;
  max-height: 60px;
  position: absolute;
  transition: all .25s cubic-bezier(0.645,0.045,0.355,1);
}

.logo .imgReg{
  opacity: 1;
}
.logo .imgHov{
  opacity: 0;
}
.logo .imgSel{
  opacity: 0;
}
.logo:hover .imgReg{
  opacity: 0;
}
.logo:hover .imgHov{
  opacity: 1 !important;
}
.logo:hover .imgSel{
  opacity: 0;
}
.logo:focus .imgReg{
  opacity: 0;
}
.logo:focus .imgSel{
  opacity: 1;
}
</style>
