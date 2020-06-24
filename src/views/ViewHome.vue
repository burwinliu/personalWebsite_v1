<template>
  <div class="center">
    <div class="wrapper home">
      <b-row class="body-text"><h2>Hi! I am</h2></b-row>
      <b-row class="body-text"><h1>Burwin Liu</h1></b-row>
      <b-row class="body-text"><a>I am a student of Computer Science and Software Engineering.</a> </b-row>
      <b-row class="body-text"><b>I work within Software Engineering, from Application Development to Data Science and everything in between </b> </b-row>
      <b-row class="body-text"><b-button :to="'about'" class="my-3 btn-about"> Find Out More!</b-button></b-row>
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
  color: $sub;
}
div > a{
  font-family: 'Cinzel', serif;
  font-size: large;
  position: relative;
  color: $sub;
}
div > a:hover{
  color:  $sub;
}
b{
  font-family: 'Cinzel', serif;
  font-size: medium;
  position: relative;
  color: $mute-1;
}
.view-home{
  width: 100%; 
  background-color: $background;  
}

.body-text{
  margin-left: 0px;
  margin-right: 0px;
}

.btn-about{
  background-color: $background-sub;
  border-color: $background-prime;

}

.btn-about:focus{
  border-color: $shadow;
}

.btn-about:hover{
  border-color: $mute-1;
  background-color:$dark-2;
}
</style>