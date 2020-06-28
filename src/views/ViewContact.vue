<template>
  <div class="align-middle" id="view-contact">
    <div class="page" align-v="center">
      <b-row>
          <h1 class="center-text" align-v="center"> Contact </h1>
      </b-row>
      <b-row>
          <p class="center-text expand-width"> 
            If you have any questions, got a project idea or just want to chat, I would love to talk. Don't 
            hesitate to contact me below, and I will try my utmost to get back to you — my inbox is open!
          </p>
      </b-row>
      <b-button class="contact mx-auto " href="mailto:burwinliu1@gmail.com">Contact Me!</b-button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ViewContact",
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
  font-size: 4rem;
  position: relative;
  color: $sub-1;
  align-self:flex-start;

}

p{
  color: $sub-1;
  font-size: 1.25rem;
  margin-bottom: 40px;
}

#view-contact{
  width: 100%; 
  background-color: $background;  
  display:block;
}

.center-text{ 
  width:100%;
  text-align: center;
}

.contact{
  color: $sub-1; 
  background-color: $dark;
  outline-color: $shadow;
  border: none;
  font-family: 'Source Code Pro', monospace; 
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1); 
  padding: 10px 20px;
  width:fit-content ;
  margin:0 auto ;
  display:block ;
  float:none ;
}

.contact:hover{
  background-color: $mute-3;
}

.contact:active{
  border-color: $shadow;
}

.expand-width{
  width:100%;
  max-width: 600px;
  margin-right:auto;
  margin-left:auto;
}

.text-wrap{ 
  padding-left: 20vh;
  padding-right:20vh;
}


.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
</style>