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
                <b-tab title="Amazon SDE Intern">
                    <b-card-text id="card-2" class="card-text">
                        <h1>Intern</h1>
                        <h2>June 2021 – Present</h2>
                        <ul>
                            <li>
                                Stay Tuned~ 
                            </li>

                        </ul>
                    </b-card-text>
                </b-tab>
                <b-tab title="Schneider Electric Internship">
                    <b-card-text id="card-2" class="card-text">
                        <h1>Intern</h1>
                        <h2>July 2020 – September 2020</h2>
                        <ul>
                            <li>
                                Designed POC cross-platform GUI application, implemented Git features such as HTTP(S) and SSH
                                cloning, Diffing, Branching, Merging and History using Electron, React and Redux
                            </li>
                            <li>
                                Converted High Level Objectives into rapid prototypes; presented and provided reports to Senior
                                Software Engineers on viability, CVSS security and features of Distributed Version Control/Git
                            </li>
                            <li>
                                Enacted HTML Web server application with OSI model, Sockets, HTTP and TCP/IP in C++ 
                            </li>
                            <li>
                                Studied Agile engineering practices of decomposing project execution into sprints, daily scrum
                                meetings and rapid prototyping
                            </li>
                            <li>
                                Learned how IoT and virtualization would impact industrial automation’s future from top executives
                            </li>
                        </ul>
                    </b-card-text>
                </b-tab>
                <b-tab title="University of California, Irvine">
                    <b-card-text id="card-1" class="card-text">
                        <h1>Undergraduate Researcher</h1>
                        <h2>March 2020 – June 2020</h2>
                        <ul>
                            <li>
                                Compiled a database of orthologs (Related Genes/Nodes between two graphs, found through
                                biological research) from various sources, writing bash scripts and SQL queries to parse through over
                                200 GB of data from over 25 separate data sources for analysis by UCI Researchers
                            </li>
                            <li>
                                Analyzed over 40 competing alignment algorithms, parsed over 10 those algorithms to benchmark
                                performance against in house Local Network Alignment algorithm for data in Research Paper
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