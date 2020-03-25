<template>
  <div class="topnav">
    <nav-bar-logo link="#home" imageAlt="Logo" imagePath="logo.png"/>
    <nav-bar-button link="#news" msg="News"/>
    <nav-bar-button link="#contact" msg="Contact"/>
    <nav-bar-button link="#about" msg="About"/>
  </div>
</template>

<script>
import NavBarButton from './NavBarButton.vue'
import NavBarLogo from './NavBarLogo.vue'

export default {
  name: 'NavBar',
  components:{
    NavBarButton,
    NavBarLogo
  },
  props: {
    username: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    max-width:60px;
    max-height: 50px;
    height:auto;
}
/* Add a black background color to the top navigation */
.topnav {
  background-color: white;
  overflow: hidden;
}

</style>
