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
  scrollbar-color: $mute-2 $shadow;
  z-index: 1;
  display:block;
  width:100%;
  max-width: 100%;
  overflow-x: hidden;

}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px $shadow; 
  background-color: $shadow;
}

::-webkit-scrollbar-thumb {
  background-color: $mute-2;
}
</style>
