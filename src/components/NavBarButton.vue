<template>
  <a :href="link">
    <h1>{{ msg }}</h1>
  </a>
</template>

<script>
export default {
  name: 'NavBarButton',
  props: {
    link: String,
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 40px;
  height: 100%;
}

/* Change the color of links on hover */
.topnav a:hover {
  color: red;
}

/* Add a color to the active/current link */
.topnav a.active {
  color: white;
}
</style>
