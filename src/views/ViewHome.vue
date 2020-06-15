<template>
  <div id="home" class="center">
    <div class="wrapper">
      <b-row class="view-home" no-gutters>
        <h1>Hi! My name is Burwin Liu </h1>
      </b-row>
      <b-row :no-gutters=true>
        <a>Thank you for dropping by and welcome to my website</a> 
      </b-row>
      <b-row no-gutters>
        <b>There is still more to come</b> 
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewHome",
    created () {
      document.title = this.$route.meta.title;
    },
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
#home{
  display: table;
  position: absolute;
  height:80vh;
}
.wrapper {
  display: table-cell;
  vertical-align: middle;
}
h1{
  font-size: 60pt;
}
a{
  font-family: 'Cinzel', serif;
  font-size: large;
  position: relative;
  color: $sub!important;
}
b{
  font-family: 'Cinzel', serif;
  font-size: medium;
  position: relative;
  color: $mute-1!important;
}
.view-home{
  width: 100%; 
  background-color: $background;  
}
</style>