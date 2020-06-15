<template>
  <div id="home" class="center">
    <div class="wrapper px-5">
        <h2>Hi! I am</h2>
        <h1>Burwin Liu</h1>
        <a>Thank you for dropping by and welcome to my website</a> <br>
        <b>There is still more to come</b> 
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