<template>
    <div class="footer-wrapper">
        <b-row class="space"/>
        <b-col no-gutters class="text-center footer-wrapper">
            <b-row v-if="windowWidth <=992">
                <b-nav class="footer-contents">
                    <b-nav-item href="mailto:burwinliu1@gmail.com" class="animate-hover svg-container"><logo-email class="svg"/></b-nav-item>
                    <b-nav-item href="https://github.com/burwinliu" class="animate-hover svg-container"><logo-github class="svg"/></b-nav-item>
                    <b-nav-item href="https://www.linkedin.com/in/burwin-liu" class="animate-hover svg-container"> <logo-linked-in class="svg"/></b-nav-item>
                    <b-nav-item href="https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing" class="animate-hover svg-container">
                        <logo-resume class="svg"/>
                    </b-nav-item>
                </b-nav>
            </b-row>
            <b-row>
                <a href="https://github.com/burwinliu/personalWebsite" class="footer-contents">
                    Built by Burwin Liu
                </a>
            </b-row>
        </b-col>
        <b-row class="space"/>
    </div>
</template>

<script>
import LogoEmail from '../assets/LogoEmail.svg'
import LogoGithub from '../assets/LogoGithub.svg'
import LogoLinkedIn from '../assets/LogoLinkedIn.svg'
import LogoResume from '../assets/LogoResume.svg'

export default {
    name: 'FooterInfo',
    components:{
        LogoEmail,
        LogoGithub,
        LogoLinkedIn,
        LogoResume
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
.space{
    height:16px;
    width:100%;
    background-color: $shadow;
}
.footer-wrapper{
    background-color: $shadow;
    width: 100%;
    height:fit-content;
}
.footer-contents{
    color: $sub-2;
    margin-left:auto;
    margin-right:auto;
    font-size: 12pt;
    transition: 0.3s all ease-out;
    padding-bottom:20px;
}
.footer-contents:hover{
    color: $sub-1;
    text-decoration: none;
}

a{
    width: fit-content;
    height: fit-content; 
}
.svg {
    width: 25px;
    height: 25px;
    overflow: visible;
    fill: $sub-1;
    display: block;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.svg-container{
    padding:.1rem;
}
.animate-hover{
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1); 
}
.animate-hover:focus, .animate-hover:active, .animate-hover:focus{
    outline: 0px;
}
.animate-hover:hover svg{
    fill: $pop ; 
}
.animate-hover:focus svg{
    fill: $primary ; 
}
</style>