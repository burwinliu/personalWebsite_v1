<template>
  <div id="app">
    <NavBar username="Burwin Liu"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  body{
    font-family: 'Source Code Pro', monospace;
    line-height: 1.4;
  }
</style>
