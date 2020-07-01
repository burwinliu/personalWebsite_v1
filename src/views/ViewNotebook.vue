<template>
  <div class="align-middle" id="view-contact">
    <div class="page" align-v="center">
      <b-row no-gutters>
          <h1 class="center-text" align-v="center"> Jupyter Notebook -- An Overview (In Development)</h1>
      </b-row>
      <b-row no-gutters>
          <p> 
            My Jupyter Notebook contains many of my computer science related writings, usually my leetcode solutions at this point, and some food related items. 
            Navigation to relevant sections will be found below! Enjoy reading!
          </p>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewNotebook",
    data: function(){
      return{
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      }
    },
    mounted() {
        this.resize()
        window.addEventListener("resize", this.resize);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.resize);
    },
    methods:{
      resize(){
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

.page {
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  min-height: 100vh;
}
</style>