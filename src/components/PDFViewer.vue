<template>
  <embed class="pdf-viewer" :src="require(`@/assets/resume.pdf`)" type="application/pdf" />
</template>

<script>

export default {
  name: 'PDFViewer',
};
</script>

<style scoped>
  .pdf-viewer{
    width:100%;
    height:100%;
  }
</style>
