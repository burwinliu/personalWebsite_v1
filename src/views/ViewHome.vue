<template>
  <div class="center">
    <div class="wrapper home">
      <b-row class="body-text"><h2>Hi! I am</h2></b-row>
      <b-row class="body-text"><h1>Burwin Liu</h1></b-row>
      <b-row class="body-text"><p>I am a student of Computer Science and Software Engineering.</p> </b-row>
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
  color: $sub-1;
}
div > p{
  font-family: 'Cinzel', serif;
  font-size: large;
  position: relative;
  color: $sub-1;
}
div > p:hover{
  color:  $sub-1;
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
  color: $sub-1;
  background-color: $background-sub-1;
  border-color: $background-prime;

}

.btn-about:focus{
  border-color: $shadow;
}

.btn-about:hover{
  color: $pop;
  border-color: $mute-2;
  background-color:$background-sub-1;
}
</style>