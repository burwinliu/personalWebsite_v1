<template>
    <div class="projects-wrapper">
        <b-col align-h="center">
            <b-row align-h="center">
                <b-card
                    style="max-width: 20rem; min-width: 20rem;"
                    class="mx-2 my-2"
                    bg-variant="dark"
                    text-variant="light"
                >
                    <b-row class= "proj-title-wrapper px-3 pb-2">
                        <h4 class="proj-card-title">jpgViewer</h4>
                        <b-nav-item href="https://github.com/burwinliu/jpgViewer" class="animate-hover svg-container"><logo-github class="svg"/></b-nav-item>
                    </b-row>
                    <b-card-text>
                    Livestreaming camera video feed to be parsed with Computer Vision for human faces. 
                    A work in progress, now with camera client, web client interface and server-side scripts 
                    </b-card-text>
                    <ul class="proj-tools proj-tools-list mt-5">
                            <li>Django</li>
                            <li>openCV</li>
                        </ul>
                </b-card>
                <b-card
                    style="max-width: 20rem; min-width: 20rem;"
                    class="mx-2 my-2"
                    bg-variant="dark"
                    text-variant="light"
                >
                    <b-row class= "proj-title-wrapper px-3 pb-2">
                        <h4 class="proj-card-title">Family Tree</h4>
                        <b-nav-item href="https://github.com/burwinliu/familytree" class="animate-hover svg-container"><logo-github class="svg"/></b-nav-item>
                    </b-row>
                    <b-card-text>
                        A web applicaton to get family trees straight -- an excercise in Database Programming, REST APIs,
                         Full Stack Development and much more! In progress, and moving forwards.
                    </b-card-text>
                    <ul class="proj-tools proj-tools-list mt-5">
                        <li>mySQL</li>
                        <li>Flask</li>
                        <li>REST</li>
                        <li>node.JS</li>
                        <li>react</li>
                        <li>material-UI</li>
                    </ul>
                </b-card>
                <b-card
                    style="max-width: 20rem; min-width: 20rem;"
                    class="mx-2 my-2"
                    bg-variant="dark"
                    text-variant="light"
                >
                    <b-row class= "proj-title-wrapper px-3 pb-2">
                        <h4 class="proj-card-title">SDHacks 2019</h4>
                        <b-nav-item href="https://github.com/burwinliu/ImageCalendar" class="animate-hover svg-container"><logo-github class="svg"/></b-nav-item>
                    </b-row>
                    <b-card-text>
                        Application with Android Development, Machine Learning and Cloud Computing -- take a picture and 
                        upload it to server to parse out information!
                    </b-card-text>
                    <ul class="proj-tools proj-tools-list mt-5">
                        <li>Android</li>
                        <li>AWS</li>
                    </ul>
                </b-card>
            </b-row>
        </b-col>
    </div>
</template>

<script>
import LogoGithub from '@/assets/LogoGithub.svg'

export default {
    name: 'ViewAboutProjects',
    components:{
        LogoGithub,
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
.projects-wrapper{
    width: 100%;
}

.right-align{
    margin-left:auto;
}

.proj-tools{
    font-size: .85rem;
    color: $sub-1;
}
.proj-tools-list{
    margin:0;
    padding:0;
}
ul.proj-tools-list > li {
    display: inline-block;
    display:inline;
    padding-inline-end: 20px;
}
.nav-link{
    padding:0;
}
.svg {
    height:30px;
    overflow: visible;
    fill: $sub-1;
    display: block;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1); 
}
svg:hover{
    fill: $pop;
}
.svg-container{
    margin-left:auto;
}
li{
    list-style-type: none;
}
</style>