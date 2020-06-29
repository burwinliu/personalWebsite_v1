<template>
  <div class="center">
    <div class="wrapper home">
      <b-row class="body-text"><h2>Hi! I am</h2></b-row>
      <b-row class="body-text"><h1>Burwin Liu</h1></b-row>
      <b-row class="body-text"><h3>I am a student of Computer Science and Software Engineering.</h3> </b-row>
      <b-row id="text-wrap" class="body-text" no-gutters>
        <b-col><p>Currently, I work within Software Engineering, doing everything from Application Development to Data Science, and much more!</p></b-col>
        <b-col id="text-wrap-collapse"/>
      </b-row>
      <b-row class="body-text py-2 px-2"><b-button :to="'about'" class="my-3 px-4 py-3 btn-about"> Find Out More!</b-button></b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewHome",
    data: function(){
      return{
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      }
    },
    mounted() {
      this.resize()
      window.onresize = () => {
        this.resize()
      }
    },
    methods:{
      resize(){
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 992){
          document.getElementById("text-wrap-collapse").style.flexGrow = "0";
        }
        if(this.windowWidth > 992){
          document.getElementById("text-wrap-collapse").style.flexGrow = "1";
        }
      }
    }
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
  font-size: 5rem;
  font-family: 'Cinzel', serif;
  position: relative;
  color: $primary;
}
h2{
  font-size: 3rem;
  color: $sub-1;
}
div > h3{
  font-family: 'Cinzel', serif;
  font-size: 1.75rem;
  position: relative;
  color: $sub-1;
}
div > p{
  font-size: 1.25rem;
  position: relative;
  color: $sub-2;
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
  font-size: 1.5rem;
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