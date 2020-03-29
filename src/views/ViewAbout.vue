<template>
  <div id="view-about">
    <b-row class="view-about" :no-gutters=true>
        <h1> About me </h1>
    </b-row>
    <b-row class="view-about" :no-gutters=true>
        <a> This is still under construction. Please see my resume for now. </a>
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
a{
  font-family: 'Cinzel', serif;
  font-size: x-large;
  position: relative;
  color: $sub!important;
}
.view-resume{
  width: 100%; 
  height: 100%;
  background-color: $background;  
}
</style>