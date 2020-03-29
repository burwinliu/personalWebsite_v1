<template>
    <div>
        <b-nav vertical class="sidebar ml-auto">
            <b-nav-item href="mailto:burwinliu1@gmail.com" class="animate-hover svg-container"><logo-email class="svg"/></b-nav-item>
            <b-nav-item href="https://github.com/burwinliu" class="animate-hover svg-container"><logo-github class="svg"/></b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/burwin-liu" class="animate-hover svg-container"> <logo-linked-in class="svg"/></b-nav-item>
            <b-nav-item href="https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing" class="animate-hover svg-container">
                <logo-resume class="svg"/>
            </b-nav-item>
        </b-nav>
    </div>
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
<style lang="scss" scoped>
a{
    width: fit-content;
    height: fit-content; 
}
.svg {
    width: 25px;
    height: 25px;
    fill: $sub!important;
    display: block;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.svg-container{
    padding:15px;
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
    background-color: $sub;
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
