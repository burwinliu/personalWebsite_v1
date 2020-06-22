<template>
  <div class="background">
    <router-view class="background"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return{
      mobile: Boolean,
    }
  },
};
</script>

<style lang="scss">

html, body, .background{
  color: $primary;
  background-color: $background;
  scrollbar-color: $mute-1 $shadow !important;
  scrollbar-arrow-color: $mute-2;
  z-index: 1;
  display:table;
  width:100%;

}
</style>
