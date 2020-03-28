<template>
  <div>
    <component :is="componentName"/>
    <router-view/>
  </div>
</template>

<script>
import Index from '@/views/index.vue'
import IndexMobile from '@/views/indexMobile.vue'

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
      if(this.isMobile() && this.mobile !== true){
        this.mobile = true;
        this.componentName = 'IndexMobile';
      }
      else if(!this.isMobile() && this.mobile === true){
        this.mobile = false;
        this.componentName = 'Index';
      }
      else{
        return;
      }
    }
  },
  mounted() {
      window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
      window.removeEventListener('resize', this.onResize)
  },
  data: function(){
    return{
      mobile: Boolean,
      componentName: "Index"
    }
  },
  components: {
      Index,
      IndexMobile,
    }
};
</script>

<style>
html, body, .background{
  color: #e6f1ff;
  background-color: #0a192f;
  scrollbar-color: #333f58 #0a192f !important;
  z-index: 1;
}
</style>
