<template>
    <div class="exp-wrapper">
        <b-card-group deck>
            <b-tabs 
                id = "tab-exp" 
                active-nav-item-class="active-tab" 
                nav-wrapper-class="tab"
                card
                :vertical="windowWidth>992? true: false" 
                content-class="custom-card"
                no-fade
            >
                <b-tab title="University of California, Irvine">
                    <b-card-text id="card-1" class="card-text">
                        <h1>Undergraduate Research on Graph Algorithms </h1>
                        <h2>March 2020 – Present</h2>
                        <ul>
                            <li>
                                Compiled a database of Orthologs (Related Genes/Nodes between two graphs,
                                found through biological research) of over 200 GB from over 25 separate 
                                data sources
                            </li>
                            <li>
                                Discovered over 40 competing alignment algorithms and compiled and parsed 
                                over 10 those algorithms to compare performance against created Local 
                                Network Alignment algorithm
                            </li>
                            <li>
                                Mentored a fellow undergraduate researcher and assisted in familiarizing a 
                                newcomer with established systems
                            </li>
                        </ul>
                    </b-card-text>
                </b-tab>
                <b-tab title="Schneider Electric Virtual Student Experience">
                    <b-card-text id="card-2" class="card-text">
                        <h1>Intern</h1>
                        <h2>July 2020 – Present</h2>
                        <ul>
                            <li>
                                Attended daily meetings with top executives, representatives and employees, 
                                discussing Schneider’s workflow, company model and future direction
                            </li>
                            <li>
                                Networked and Connected with over 100 interns to generate a conducive environment for learning
                            </li>
                        </ul>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card-group>
    </div>
</template>

<script>

export default {
    name: 'ViewAboutExperience',
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
        },
    }
}
</script>

<style lang="scss" scoped>
.exp-wrapper{
    width: 100%;
}

.card-text{
  margin-bottom: 20px;
  font-size: 1rem;
  color: $sub-1;
  height:fit-content;
}

.custom-card{
    background-color: $background-sub-1;
    transition: 0.3s all ease-out;
}
h1{
    font-size: 2rem;
}
h2{
    font-size: 1.75rem;
}

ul{
    font-size: 1.25rem;
    padding-inline-start: 20px;
}

</style>