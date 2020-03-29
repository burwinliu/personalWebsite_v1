<template>
  <div>
    <b-row>
      <a class="background"> 
          We are not currently supported on web browsing at this size, please come back some other time!
      </a>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'IndexMobile',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
a{
  background-color: inherit;
  padding: 30px 30px;
  font-family: 'Cinzel', serif;
  font-size: x-large;
}
html, body, .background{
  color: $primary;
  background-color: $background;
  scrollbar-color: $mute-1 $shadow !important;
  z-index: 1;
  height: 100vh;
}
</style>
