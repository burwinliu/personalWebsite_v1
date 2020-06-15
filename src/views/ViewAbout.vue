<template>
  <div>
    <b-row id="view-about">
      <b-col id="introduction" class="wrapper">
        <b-row class="view-about" no-gutters>
            <h1> About me </h1>
        </b-row>
        <b-row class="view-about" no-gutters>
            <a>
              Hello! Welcome to my about page. I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in 
              Irvine at the moment, studying Computer Science at the University of California, Irvine.</a>
            <a>
              Currently, I have worked with Data Science, Front End Design, Back End Programming and Application Development.
            </a>
        </b-row>
      </b-col>
    </b-row>
    <b-row id="view-about">
      <b-col id="introduction" class="wrapper">
        <b-row class="view-about" no-gutters>
          <h1> Experience </h1>
        </b-row>
        <b-row class="view-about" no-gutters>
          <a>
            You can find out more in my Resume! This part of the site is still under construction, but 
            we are getting there, step-by-step.
          </a>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "ViewAbout",
    created () {
      document.title = this.$route.meta.title;
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
h1{
  font-family: 'Cinzel', serif;
  font-size: 40pt;
  position: relative;
  color: $sub!important;
}
h2{
  color: $mute-1
}
a{
  margin-bottom: 20px;
  font-size: 15pt;
  color: $primary;
}
a:hover{
  color: $primary;
}
.view-resume{
  width: 100%; 
  height: 100%;
  background-color: $background;  
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}
</style>