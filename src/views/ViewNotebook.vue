<template>
  <div id="view-notebook">
    <div class="page">
      <b-row no-gutters>
          <h1 class="center-text" align-v="center"> Jupyter Notebook — An Outline</h1>
          <b-button href="https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/" 
          class="btn-nav py-2" 
          :class="btnClass">Take me to the Root!</b-button>
      </b-row>
      <b-row id="intro-row" no-gutters class="px-3 py-4">
          <h2 class="center-text" align-v="center">Foreword</h2>
            <p> 
              My Jupyter Notebook contains many of my records and thoughts. Navigation to relevant sections will be found below! Enjoy reading!
            </p>
      </b-row>
      <b-row id="notebook-accordian-1" @click="click(1)" no-gutters class="hover-row px-3 py-4">
          <h2 class="center-text header-row" align-v="center">Interview Prep</h2>
          <b-collapse id="notebook-card-1" class="notebook-card-desc">
            <p> 
              Hacker Rank, Leetcode, and everything in between.
            </p>
            <b-button href="https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/Interview%20Prep/" class="btn-nav">Navigate to Algorithms</b-button>
          </b-collapse>
      </b-row>
      <b-row id="notebook-accordian-2" @click="click(2)" no-gutters class="hover-row px-3 py-4">
          <h2 class="center-text header-row" align-v="center">Food</h2>
          <b-collapse id="notebook-card-2" class="notebook-card-desc">
            <p> 
              Food recommendations, reviews, and quick thoughts. There are so many places to be, so little time, and each moment is to be cherished. Therefore
              I record those memories here.
            </p>
            <b-button href="https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/Food/" class="btn-nav">Navigate to Food</b-button>
          </b-collapse>
      </b-row>
      <b-row id="notebook-accordian-3" @click="click(3)" no-gutters class="hover-row px-3 py-4">
          <h2 class="center-text header-row" align-v="center">Bugs</h2>
          
          <b-collapse id="notebook-card-3" class="notebook-card-desc">
            <p> 
              Compilation of bugs I do not wish to forget — they have taken hours to solve, and we should always learn from our mistakes — so here is where I 
              keep a few, to remind myself never to repeat them.
            </p>
            <b-button href="https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/Bugs/" class="btn-nav">Navigate to Bugs</b-button>
          </b-collapse>
      </b-row>
      <b-row id="notebook-accordian-4" @click="click(4)" no-gutters class="hover-row px-3 py-4">
          <h2 class="center-text header-row" align-v="center">Setup</h2>
          <b-collapse id="notebook-card-4" class="notebook-card-desc">
            <p> 
              Just like those persky bugs, new technology is always evolving, and changing. By recording setup down, One does not need to repeat the search for already done work.
            </p>
            <b-button href="https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/Setup" class="btn-nav">Navigate to Setup Instructions</b-button>
          </b-collapse>
      </b-row>
    </div>
  </div>
</template>

<script>
// TODO fix the width when sidebar opens
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
        },
        accordianDirectory:{
          1:"notebook-accordian-1",
          2:"notebook-accordian-2",
          3:"notebook-accordian-3",
          4:"notebook-accordian-4",
        },
        allRows: {
          1:"notebook-accordian-1",
          2:"notebook-accordian-2",
          3:"notebook-accordian-3",
          4:"notebook-accordian-4",
          5:"intro-row"
        },
        rowWidth: 0,
      }
    },
    computed:{
      btnClass: function () {
        return {
          'btn-title': (this.windowWidth >= 914 && this.windowWidth < 992) || this.windowWidth >= 1260,
        }
      }
    },
    mounted() {
        this.resize();
        window.addEventListener("resize", this.resize);
        this.$root.$on('bv::collapse::state', this.collapse);
    },
    beforeDestroy(){
        window.removeEventListener("resize", this.resize);
        this.$root.$off('bv::collapse::state', this.collapse);
    },
    methods:{
      resize(){
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.rowWidth = document.getElementById("intro-row").offsetWidth;
      },
      click(item){        
        if(this.opened != -1){
          this.$root.$emit('bv::toggle::collapse', this.cardDirectory[this.opened]);
          document.getElementById(this.accordianDirectory[this.opened]).classList.remove("select-row");
          if(this.opened == item){
            this.opened = -1
            return;
          }
        }
        this.$root.$emit('bv::toggle::collapse', this.cardDirectory[item]);
        document.getElementById(this.accordianDirectory[item]).classList.add("select-row");
        this.opened = item;
      },
      collapse(collapseId, isJustShown){
        if(collapseId === "navbar-side-collapse"){
          let shown = isJustShown;
          if (shown === true){
            for(let i in this.allRows){
              if (document.getElementById(this.allRows[i]) !== null){
                
                document.getElementById(this.allRows[i]).style.width = `${this.rowWidth}px`;
              }
              
            }
          }
          else{
            for(let i in this.allRows){
              if (document.getElementById(this.allRows[i]) !== null){
                document.getElementById(this.allRows[i]).style.width = '';
              }
            }
          }
        }
      },
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

.page {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-bottom: 15%;
  min-height: 100vh;
} 

.hover-row:hover{
  color: $pop;
  background-color: $background-sub-1;
  cursor: pointer;
}

.select-row{
  color: $pop;
  background-color: $background-sub-minor;
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
h2.header-row{
  display: flex;
  align-items: center;
  flex-grow: 1;

}
h2.header-row::after{
  content:"";
  flex: 1 1 auto;
  border-top: 1px solid $sub-1;
  margin-left: 1rem;
}

p{
  color: $sub-1;
  font-size: 1.25rem;
}

.btn-title{
  margin-left:auto;
  height: fit-content;
}
</style>