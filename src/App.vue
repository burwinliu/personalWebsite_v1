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
  color: $sub-1;
  background-color: $background;
  scrollbar-color: $mute-1 $shadow ;
  scrollbar-arrow-color: $mute-2;
  z-index: 1;
  display:table;
  width:100%;

}
</style>
