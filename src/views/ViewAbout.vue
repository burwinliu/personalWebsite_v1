<template>
  <div no-gutters>
    <b-row id="view-about" no-gutters>
      <b-col id="introduction" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992, 'px-5':windowWidth >= 992}">
        <b-row no-gutters>
            <h1> About me </h1>
        </b-row>
        <b-row no-gutters>
            <a>
              Hello! Welcome to my about page. I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in 
              Irvine at the moment, studying Computer Science at the University of California, Irvine.</a>
            <a>
              Currently, I have worked with Data Science, Front End Design, Back End Programming and Application Development.
            </a> <br>
            <a>
              I have recently worked with the following technologies:
            </a>
        </b-row>
        <b-row>
          <b-col>
            <ul>
              <li>Node.JS</li>
              <li>Vue</li>
              <li>JavaScript</li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>SQL</li>
              <li>Python</li>
              <li>Android Studio</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col id="Experience" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992, 'px-5':windowWidth >= 992}">
        <b-row no-gutters>
          <h1> Experience </h1>
        </b-row>
        <b-row no-gutters>
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
    data(){
      return{
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      }
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
ul{
  padding: 15px;
}
.view-resume{
  width: 100%; 
  height: 100%;
  background-color: $background;  
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.mobile-page{
  padding-top:60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  min-height: 100vh;
}
</style>