<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand class="logo router-link focus" :to="{name: 'view-home'}">
        <img class="imgReg" :src="require(`@/assets/dark-logo.png`)" alt= "imageAltReg"/>
        <img class="imgHov" :src="require(`@/assets/dark-logo-hovered.png`)" alt= "imageAltHov"/>
        <img class="imgSel" :src="require(`@/assets/dark-logo-selected.png`)" alt= "imageAltSel"/>
      </b-navbar-brand>

    <div class="absolute_position" align="right" >
      <b-navbar-toggle class = "icon text-center" target="navbar-toggle-collapse">
        <template align-v="center" v-slot:activator="{ expanded }">
          <b-icon animation="cylon" v-on="expanded"></b-icon>
        </template>
      </b-navbar-toggle>
    </div>
    <b-collapse id="navbar-toggle-collapse" class ="class-wrapper" is-nav>
      <b-col class="class-wrapper">
        <b-navbar-nav align="right" class="ml-auto">
          <b-navbar-nav align-v="center">
            <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoLocal" :key="info.id" :to="{name: info.name}">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus px-2" v-for="info in ButtonInfoWeb" :key="info.id" :href="info.href">{{info.msg}}</b-nav-item>
            <b-nav-item class="router-link button focus px-2" :href="require(`@/assets/resume.pdf`)" title="Burwin Liu - Resume">Resume</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-col>
    </b-collapse>

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

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

.nav-link{
  padding-right: 0px !important;
  padding-left:   0px !important;
}

.navbar-dark:active .navbar-toggle:active{
  color:black;
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
  top:6px;
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
