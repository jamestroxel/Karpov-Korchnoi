<template>
  <div class="item-c-kvk">
    <div style="height:100%">
      <div class="space">
        <div v-if="zoukharIndex == 2" class="rowLeft seven">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 3" class="rowLeft seven">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 4" class="rowLeft seven">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 5" class="rowLeft seven">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 6" class="rowLeft four">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 7" class="rowLeft four">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 8" class="rowLeft eight">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 9" class="rowLeft nine">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 10" class="rowLeft ten">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 11" class="rowLeft eleven">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 12" class="rowLeft twelve">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div
          v-if="zoukharIndex > 11 && zoukharIndex < 14"
          class="rowLeft twelveB"
        >
          <img src="../assets/Berginer-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 13" class="rowLeft thirteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 14" class="rowLeft fourteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 14" class="rowLeft fourteenB">
          <img src="../assets/Berginer-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 15" class="rowLeft fifteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 16" class="rowLeft sixteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex == 17" class="rowLeft seventeen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div v-if="zoukharIndex > 17 && zoukharIndex < 32" class="rowLeft eighteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
         <div v-if="zoukharIndex == 32" class="rowLeft sixteen">
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
      </div>
      <p class="spaceAxis">Front Stage</p>
      <div class="legend">
        <div class="legendItem">
          <p class="axis">Dr. Zoukhar</p>
          <img src="../assets/Zoukhar-01.png" class="zoukhar" />
        </div>
        <div class="legendItem">
          <p class="axis">Dr. Berginer</p>
          <img src="../assets/Berginer-01.png" class="zoukhar" />
        </div>
      </div>
      <div class="block" style="width: 400px">
        <!-- <button @click="zoukharPrevious" id="previous" type="button">
          &#60;
        </button>
        <button @click="zoukharNext" id="next" type="button">
          &#62;
        </button> -->
        <div class="slidecontainer">
          <input
          v-model="zoukharIndex"
            type="range"
            min="1"
            max="32"
            class="slider"
            id="myRange"
          />
        </div>
        <!-- <p class="spaceLabels">Game {{ parseInt((zoukharIndex+2)*.1) }}</p> -->
        <div class="paraStats">
          <div class="statsLabel">Game</div>
        </div>
        <div class="paraMoveCount">
          <h1 class="paraCount">- {{ parseInt((zoukharIndex+2)*.1) }} -</h1>
          <p class="paraScoreW">{{ wScore[parseInt((zoukharIndex+3)*.1)] }}</p>
          <p class="paraScoreB">{{ bScore[parseInt((zoukharIndex+3)*.1)] }}</p>
          <p class="paraB">Korchnoi</p>
          <p class="paraW">Karpov</p>
        </div>
        <!-- <p class="spaceLabels">Result {{ score[parseInt((zoukharIndex+3)*.1)] }}</p> -->
      </div>
    <div>
      <p class="chartTitle">Seating positions of hypnotists</p>
      <p class="chartSubTitle">
        Recorded seating positions of Dr. Zoukhar and Dr. Berginer, and corresponding results for each game of the
        tournament.
      </p>
      <p class="chartSource">Source: Edmondson, E. B., and Mikhail Tal.</p>
    </div>
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
      zoukharIndex: -1,
      wScore: ["", "1/2","1/2","1/2","1/2","1/2","1/2","1/2","1","1/2","1/2","0","1/2","1", "1","1/2","1/2","1","1/2","1/2","1/2","0","1/2","1/2","1/2","1/2","1/2","1", "0", "0", "1/2","0", "1"],
      bScore: ["", "1/2","1/2","1/2","1/2","1/2","1/2","1/2","0","1/2","1/2","1","1/2","0", "0","1/2","1/2","0","1/2","1/2","1/2","1","1/2","1/2","1/2","1/2","1/2","0", "1", "1", "1/2","1", "0"]
    };
  },
  updated() {},
  mounted() {},
  computed: {},
  methods: {
    // zoukharPrevious() {
    //   if (this.zoukharIndex == 0) {
    //     return;
    //   } else {
    //     this.zoukharIndex = this.zoukharIndex - 1;
    //     console.log(this.zoukharIndex);
    //   }
    // },
    // zoukharNext() {
    //   if (this.zoukharIndex == 18) {
    //     return;
    //   } else {
    //     this.zoukharIndex = this.zoukharIndex + 1;
    //     console.log(this.zoukharIndex);
    //   }
    // },
  },
};
</script>
