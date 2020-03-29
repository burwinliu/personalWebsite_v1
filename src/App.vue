<template>
  <div class="background">
    <router-view class="background"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isMobile() {
        if( screen.width <= 1000 || screen.height <= 600 ) {
            return true;
        }
        else {
            return false;
        }
    },
    onResize() {
      //callback once mounted
      if(this.isMobile() && this.$route.path !== '/mobile'){
        this.$router.push('/mobile')
      }
      else if(!this.isMobile() && this.$route.path === '/mobile'){
        this.$router.push('/web')
      }
      else{
        return;
      }
    }
  },
  beforeMount(){
    console.log(this.$route);
    if(this.isMobile()){
      this.$router.push('/mobile')
    }
    else{
      this.$router.push('/web')
    }
  },
  mounted() {
      //window.addEventListener('resize', this.onResize);
      //this.onResize();
  },
  beforeDestroy () {
      //window.removeEventListener('resize', this.onResize)
  },
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
}
</style>
