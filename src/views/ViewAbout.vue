<template>
  <div id="view-about">
    <b-row class="view-about" :no-gutters=true>
        <h1> About me </h1>
    </b-row>
    <b-row class="view-about" :no-gutters=true>
        <a> My name is Burwin Liu. I am a Computer Scientist, a software engineer and a student. You can find out more in my Resume! This part of the site is still under construction, but 
          we are getting there, step-by-step! </a>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "ViewAbout",
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
h1{
  font-family: 'Cinzel', serif;
  font-size: 40pt;
  position: relative;
  color: $sub!important;
}
.view-resume{
  width: 100%; 
  height: 100%;
  background-color: $background;  
}
</style>