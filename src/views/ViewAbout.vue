<template>
  <div no-gutters>
    <b-row id="view-about" no-gutters>
      <b-col id="introduction" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992}">
        <b-row no-gutters>
            <h1> About me </h1>
        </b-row>
        <b-row no-gutters>
            <p>
              Hello! I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in 
              Irvine at the moment, studying Computer Science at the University of California, Irvine.
            </p>
            <p>
              In terms of experience, I have worked with Data Science, Front End Design, Back End Programming and Application Development.
            </p> 
            <br>
            <p>
              Just a few of the technologies I have recently worked with include:
            </p>
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
    <b-row>
      <b-col id="Experience" :class="{'page':windowWidth >= 992, 'mobile-page':windowWidth <=992}">
        <b-row align-h="center" no-gutters>
          <h1> Projects </h1>
        </b-row>
        <b-row no-gutters>
          <view-about-projects/>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ViewAboutExperience from '@/views/ViewAboutExperience.vue'
import ViewAboutProjects from '@/views/ViewAboutProjects.vue'

export default {
  name: "ViewAbout",
  components: {
    ViewAboutExperience,
    ViewAboutProjects,
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
  beforeDestroy() {
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
p{
  font-size: 1.25rem;
}
h1{
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  position: relative;
  color: $sub-1;
  padding-bottom: 1rem;;
}
h2{
  font-size: 1.75rem;
  color: $mute-1
}
a:hover{
  color: $primary;
}
ul{
  padding: 15px;
  font-size: 1.25rem;
}
.page {
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  min-height: 100vh;
}

.mobile-page{
  padding-top:20%;
  padding-bottom: 20%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 100vh;
}
</style>