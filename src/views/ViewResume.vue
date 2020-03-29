<template>
    <b-row class="view-resume" :no-gutters=true>
        <PDFViewer />
    </b-row>
</template>

<script>
// tempting idea, but the styling looks too bad to pull off ngl

import PDFViewer from "@/components/PDFViewer.vue"
export default {
    name: "ViewResume",
    components: {
      PDFViewer,
    },
    created () {
      document.title = "Burwin Liu - Resume";
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
.view-resume{
  width: 100%; 
  max-width: 90vh;
  margin: auto;
  height: 85vh;
  background-color: $background;  
}
</style>