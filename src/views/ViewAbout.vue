<template>
  <div no-gutters>
    <b-row id="view-about" no-gutters>
      <b-col id="introduction" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992}">
        <b-row no-gutters>
            <h1> About me </h1>
        </b-row>
        <b-row no-gutters>
            <a>
              Hello! I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in 
              Irvine at the moment, studying Computer Science at the University of California, Irvine.</a>
            <a>
              In terms of experience, I have worked with Data Science, Front End Design, Back End Programming and Application Development.
            </a> <br>
            <a>
              Just a few of the technologies I have recently worked with are:
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
      <b-col id="Experience" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992}">
        <b-row no-gutters>
          <h1> Experience </h1>
        </b-row>
        <b-row no-gutters>
          <view-about-experience/>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ViewAboutExperience from '@/views/ViewExperience.vue'

export default {
  name: "ViewAbout",
  created () {
    document.title = this.$route.meta.title;
  },
  components: {
    ViewAboutExperience,
  },
  data(){
      return{
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth,
      }
  },
  mounted(){
      window.addEventListener("resize", this.resize);
  },
  destroyed() {
      window.removeEventListener("resize", this.resize);
  },
  methods: {
      resize() {
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;
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
  min-height: 100vh;
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