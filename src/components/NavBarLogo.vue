<template>
  <a :href="link">
    <img class="logo" :src="require(`@/assets/${imagePath}`)" :alt= "imageAlt"/>
  </a>
</template>

<script>
export default {
  name: 'NavBarButton',
  props: {
    link: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: true,
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    max-height: 115px;
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 40px;
    height: 100%;
    background-color: white;
}

.logo:hover{
  opacity: .5;
}
</style>
