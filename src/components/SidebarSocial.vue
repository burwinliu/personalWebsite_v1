<template>
    <b-col class="sidebar" align-self="center">
        <b-row align-h="center">
            <a class="svg-container animate-hover" href="mailto:burwinliu1@gmail.com">
                <logo-email class="svg animate-hover "/>
            </a>
        </b-row>
        <b-row align-h="center">
            <a class="svg-container animate-hover" href="https://github.com/burwinliu" >
                <logo-github class="svg animate-hover"/>
            </a>
        </b-row>
        <b-row align-h="center">
            <a class="svg-container animate-hover" href="https://www.linkedin.com/in/burwin-liu">
                <logo-linked-in class="svg animate-hover"/>
            </a>
        </b-row>
        <b-row align-h="center">
            <a class="svg-container animate-hover" href="https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing">
                <logo-resume class="svg animate-hover"/>
            </a>
        </b-row>
    </b-col>
</template>

<script>
import LogoEmail from '../assets/LogoEmail.svg'
import LogoGithub from '../assets/LogoGithub.svg'
import LogoLinkedIn from '../assets/LogoLinkedIn.svg'
import LogoResume from '../assets/LogoResume.svg'

export default {
    name: 'SidebarSocial',
    components:{
        LogoEmail,
        LogoGithub,
        LogoLinkedIn,
        LogoResume
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    width: fit-content;
    height: fit-content; 
}
.svg {
    width: 25px;
    height: 25px;
    fill: #e6f1ff !important;
    display: block;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.svg-container{
    padding:20px;
}
.sidebar{
    width: 80px;
}
.sidebar::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #e6f1ff;
}
.animate-hover{
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)!important; 
}
.animate-hover:hover svg{
    fill: #b84a6f!important; 
}
</style>
