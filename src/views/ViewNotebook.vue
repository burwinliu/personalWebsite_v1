<template>
  <div id="view-notebook">
    <div class="page">
      <b-row no-gutters>
          <h1 class="center-text" align-v="center"> Jupyter Notebook — An Overview (In Development)</h1>
      </b-row>
      <b-row @click="click(1)" no-gutters class="hover-row px-3 py-2">
          <h2 class="center-text" align-v="center"> Foreword</h2>
          <b-collapse id="notebook-card-1" class="notebook-card-desc">
            <p> 
              My Jupyter Notebook contains many of my records and thoughts. Navigation to relevant sections will be found below! Enjoy reading!
            </p>
          </b-collapse>
      </b-row>
      <b-row @click="click(2)" no-gutters class="hover-row px-3 py-2">
          <h2 class="center-text" align-v="center">Interview Prep</h2>
          <b-collapse id="notebook-card-2" class="notebook-card-desc">
            <p> 
              Hacker Rank, Leetcode, and everything in between.
            </p>
          </b-collapse>
      </b-row>
      <b-row @click="click(3)" no-gutters class="hover-row px-3 py-2">
          <h2 class="center-text" align-v="center">Food</h2>
          <b-collapse id="notebook-card-3" class="notebook-card-desc">
            <p> 
              Food recommendations, reviews, and quick thoughts. There are so many places to be, so little time, and each moment is to be cherished. Therefore
              I record those memories here.
            </p>
          </b-collapse>
      </b-row>
      <b-row @click="click(4)" no-gutters class="hover-row px-3 py-2">
          <h2 class="center-text" align-v="center"> Bugs</h2>
          <b-collapse id="notebook-card-4" class="notebook-card-desc">
            <p> 
              Compilation of bugs I do not wish to forget — they have taken hours to solve, and we should always learn from our mistakes — so here is where I 
              keep a few, to remind myself never to repeat them.
            </p>
          </b-collapse>
      </b-row>
      <b-row @click="click(5)" no-gutters class="hover-row px-3 py-2">
          <h2 class="center-text" align-v="center">Setup</h2>
          <b-collapse id="notebook-card-5" class="notebook-card-desc">
            <p> 
              Just like those persky bugs, new technology is always evolving 
            </p>
          </b-collapse>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewNotebook",
    data: function(){
      return{
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        opened: -1,
        cardDirectory:{
          1: "notebook-card-1",
          2: "notebook-card-2",
          3: "notebook-card-3",
          4: "notebook-card-4",
          5: "notebook-card-5",
        }
      }
    },
    mounted() {
        this.resize()
        window.addEventListener("resize", this.resize);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.resize);
    },
    methods:{
      resize(){
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      },
      click(item){
        console.log(item);
        
        if(this.opened != -1){
          console.log("OPENED ALREADY", this.cardDirectory[this.opened]);
          this.$root.$emit('bv::toggle::collapse', this.cardDirectory[this.opened]);
          if(this.opened == item){
            this.opened = -1
            return;
          }
        }
        this.$root.$emit('bv::toggle::collapse', this.cardDirectory[item]);
        this.opened = item;
      }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

.page {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  min-height: 100vh;
} 

.hover-row:hover{
  color: $pop;
  background-color: $background-sub-1;
  cursor: pointer;
}

.notebook-card-desc{
  width: 100%;
}

h1{
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  position: relative;
  color: $sub-1;
  align-self:flex-start;
}
h2{
  font-size: 2rem;
  position: relative;
  color: $sub-1;
  align-self:flex-start;

}

p{
  color: $sub-1;
  font-size: 1.25rem;
  margin-bottom: 40px;
}
</style>