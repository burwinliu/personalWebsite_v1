<template>
  <div class="center">
    <div class="wrapper home">
      <b-row><h2>Hi! I am</h2></b-row>
      <b-row><h1>Burwin Liu</h1></b-row>
      <b-row><a>I am a student of Computer Science and Software Engineering.</a> </b-row>
      <b-row><b>I work within Software Engineering, from Application Development to Data Science and everything in between </b> </b-row>
      <b-row><b-button :to=" 'about' " class="my-3"> Find Out More!</b-button></b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewHome",
    created () {
      document.title = this.$route.meta.title;
    },
    data: function(){
      return{
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      }
    },
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
.home{
  display: table;
  height:100vh;
  vertical-align: top;
}
.wrapper {
  display: table-cell;
  vertical-align: middle;
}
h1{
  font-size: 50pt;
  font-family: 'Cinzel', serif;
  position: relative;
}
h2{
  font-size: 30pt;
  color: $sub!important;
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