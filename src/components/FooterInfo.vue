<template>
    <div class="footer-wrapper">
        <b-col no-gutters class="text-center footer-wrapper">
            <b-row>
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
}
</script>

<style lang="scss" scoped>
.footer-wrapper{
    background-color: $background-prime;
    width: 100%;
    height:fit-content;
    padding-top: 16px;
    padding-bottom: 16px;
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
    color: $sub !important;
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
    fill: $sub!important;
    display: block;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.svg-container{
    padding:.1rem;
}
.animate-hover{
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)!important; 
}
.animate-hover:focus, .animate-hover:active, .animate-hover:focus{
    outline: 0px;
}
.animate-hover:hover svg{
    fill: $pop !important; 
}
.animate-hover:focus svg{
    fill: $primary !important; 
}
</style>