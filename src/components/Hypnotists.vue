<template>
    <div class="item-c-kvk">
        <div style="height:100%">
            <p class="subHead">Game {{ zoukharIndex + 2}}</p>
            <div class="space">
                 <div v-if="zoukharIndex == 0" class="rowLeft seven">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 1" class="rowLeft seven">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 2" class="rowLeft seven">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 3" class="rowLeft seven">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 4" class="rowLeft four">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 5" class="rowLeft four">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 6" class="rowLeft eight">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 7" class="rowLeft nine">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 8" class="rowLeft ten">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 9" class="rowLeft eleven">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 10" class="rowLeft twelve">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex > 9 && zoukharIndex < 12" class="rowLeft twelveB">
                    <img src="../assets/Berginer-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 11" class="rowLeft thirteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 12" class="rowLeft fourteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                <div v-if="zoukharIndex == 12" class="rowLeft fourteenB">
                    <img src="../assets/Berginer-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 13" class="rowLeft fifteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 14" class="rowLeft sixteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                <div v-if="zoukharIndex == 15" class="rowLeft seventeen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                 <div v-if="zoukharIndex == 16" class="rowLeft eighteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                  <div v-if="zoukharIndex == 17" class="rowLeft eighteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                  <div v-if="zoukharIndex == 18" class="rowLeft eighteen">
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
            </div>
            <p class="spaceAxis">Front Stage</p>
            <div class="legend">
                <div class="legendItem">
                <p class="axis">Dr.Zoukhar</p>
                    <img src="../assets/Zoukhar-01.png" class="zoukhar"/>
                </div>
                <div class="legendItem">
                <p class="axis">Dr.Berginer</p>
                    <img src="../assets/Berginer-01.png" class="zoukhar"/>
                </div>
            </div>
            <div class="block" style="width: 400px">
                <button @click="zoukharPrevious" id="previous" type="button">
                    &#60;
                </button>
                <button @click="zoukharNext" id="next" type="button">
                    &#62;
                </button>
            </div>
        </div>
        <div>
      <p class="chartTitle">Seating positions</p>
      <p class="chartSubTitle">
        Seating positions of Dr. Zoukhar and Dr. Berginer throughout the tournament based on available data and beginning with game 2.
      </p>
      <p class="chartSource">Source: Edmondson, E. B., and Mikhail Tal.</p>
    </div>
    </div>
</template>

<script>

export default {
  name: "Hypnotists",
 
  data() {
    return {
      width: 400,
      height: 400,
      zoukharIndex: 0
    };
  },
  updated() {

  },
  mounted() {

  },
  computed: {
    
  },
  methods: {
     zoukharPrevious() {
      if (this.zoukharIndex == 0) {
        return;
      } else {
        this.zoukharIndex = this.zoukharIndex - 1;
        console.log(this.zoukharIndex)
      }
    },
    zoukharNext() {
      if (this.zoukharIndex == 18) {
        return;
      } else {
        this.zoukharIndex = this.zoukharIndex + 1;
        console.log(this.zoukharIndex)
      }
    },
  }
};
</script>
