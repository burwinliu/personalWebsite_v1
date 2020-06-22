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
            <b-tab title="University of California, Irvine" active>
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
            cards: ['card-1'],
        }
    },
    mounted(){
        // document.getElementById(this.cards[i])
        this.checkHeight();
        window.addEventListener("resize", this.resize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    },
    methods: {
        resize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.checkHeight();
        },
        checkHeight(){
            var max = 0;
            var i = 0;
            for(i = 0; i<this.cards.length; i += 1){
                var currentHeight = document.getElementById(this.cards[i]).offsetHeight;
                if (currentHeight > max){
                    max = currentHeight;
                }
            }
            for(i = 0; i<this.cards.length; i += 1){
                document.getElementById(this.cards[i]).style.height = `${max}px`;
            }
            console.log("CHANGED")
        }
    }
}
</script>

<style lang="scss" scoped>
.exp-wrapper{
    width: 100%;
    padding-bottom: 10%;
}

.card-text{
  margin-bottom: 20px;
  font-size: 15pt;
  color: $primary;
  height:fit-content;
}

.custom-card{
    background-color: $background-sub !important;
}
h1{
    font-size: 24pt;
}
h2{
    font-size: 20pt;
}

</style>