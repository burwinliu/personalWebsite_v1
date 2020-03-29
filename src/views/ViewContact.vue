<template>
  <div id="view-contact">
    <b-row :no-gutters=true>
        <h1> Contact </h1>
    </b-row>
    <b-row :no-gutters=true>
        <a> This section is under construction. Please contact me through the sidebar for right now! </a>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "ViewContact",
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
h1{
  font-family: 'Cinzel', serif;
  font-size: 40pt;
  position: relative;
  color: $sub!important;
  align-self:flex-start;

}
#view-contact{
  width: 100%; 
  height: 80vh;
  background-color: $background;  
}
</style>