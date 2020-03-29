<template>
  <div id="home" class="center">
    <div class="wrapper">
      <b-row class="view-home" :no-gutters=true>
        <h1>Hi! My name is Burwin Liu </h1>
      </b-row>
      <b-row :no-gutters=true>
        <a>Thank you for dropping by and welcome to my website</a> 
      </b-row>
      <b-row :no-gutters=true>
        <a>There is still more to come</a> 
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewHome",
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
  font-size: medium;
  position: relative;
  color: $primary!important;
}
.view-home{
  width: 100%; 
  background-color: $background;  
}
</style>