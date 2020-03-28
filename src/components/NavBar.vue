<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#" class="logo">
      <img class="contents img1" :src="require(`@/assets/dark-logo.png`)" alt= "imageAlt1"/>
      <img class="contents img2" :src="require(`@/assets/dark-logo-selected.png`)" alt= "imageAlt2"/>
    </b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto button" align-v="center">
        <b-nav-item class="button" v-for="info in ButtonInfo" :key="info.id" :href="info.link">{{info.msg}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return{
      ButtonInfo: [
        {id:0, link:"#resume", msg: "Resume"},
        {id:1, link:"#contact", msg: "Contact"},
        {id:2, link:"#experience", msg: "Experience"},
        {id:3, link:"#about", msg: "About"},
      ]
    };
  },
  props: {
    username: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Add a black background color to the top navigation */

.navbar.navbar-dark.bg-dark{
    background-color:  #0a192f !important; 
    z-index: 2;
    box-shadow: none;
}

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

.navbar-dark .navbar-nav .nav-link{
  color: #417a94!important; 
  font-family: 'Source Code Pro', monospace!important; 
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)!important; 
  padding: 10px 20px;
  position: relative;
}

/* Change the color of links on hover */
.navbar-dark .navbar-nav .nav-link:hover {
  color: #b84a6f!important; 
}

.logo img{ 
  top:10%;
  display:inline-block;
  max-width: 60px;
  max-height: 60px;
  position: absolute;
}

.logo .img1{
  opacity: 1;
}

.logo .img2{
  opacity: 0;
}

.contents{
  transition: all .25s cubic-bezier(0.645,0.045,0.355,1);
}

.logo:hover .img1{
  opacity: 0;
}
.logo:hover .img2{
  opacity: 1;
}
</style>
