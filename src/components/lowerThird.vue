<template>
<div class="bulbContainer">
<div class="bulb"></div>
</div>
<div class="gameStats">
<div class="statsLabel">Game Stats</div>
</div>
<div class="moveCount">
<p class="count">{{this.moveCount[this.moveIndex]}}</p>
<!-- <p class="W">White</p>
<p class="B">Black</p> -->
 <img src="../assets/bK.png" class="B"/>
  <img src="../assets/wK.png" class="W"/>
</div>
  <div class="scoreL">
    <svg>
      <rect id="barL"
      height='15px'
      :width='100+(this.score[this.moveIndex]*10)'
      fill='black'></rect>
      <line x1='100px' x2='100px' y1='0px' y2='15px' stroke='red'></line>
    </svg>
  </div>
  <div class="notationL">
    <p class="player">
      Karpov
    </p>
    <p  v-if="moveIndex % 2 !== 0 && moveIndex > 4 && moveIndex < 58" class="white">{{ this.white[this.moveIndex] }}</p>
  </div>
  <div class="scoreR">
    <svg>
      <rect id="barR" 
      height='15px'
      :width='100-(this.score[this.moveIndex]*10)'
      :x='100+(this.score[this.moveIndex]*10)'
      fill='black'></rect>
      <line x1='100px' x2='100px' y1='0px' y2='15px' stroke='red'></line>
    </svg>
  </div>
  <div class="notationR">
    <p 
    v-if="moveIndex % 2 == 0 && moveIndex > 4 && moveIndex < 58"
    class="black">{{ this.black[this.moveIndex] }}</p>
    <p class="playerR">
      Korchnoi
    </p>
  </div>
</template>
<script>
export default {
  name: "LowerThird",
  props: {
    moveIndex: Number,
  },
  data() {
    return {
      moveCount: ["","","","","",1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27],
      score: [
        0,0,0,0,0, 0.13, 0.27, 0.29, 0.39, 0.19, 0.22, 0.15, 0.3, 0.2, 0.62, 0.41, 0.41, 0.86, 0.53, 0.43, 0.57, 0.34, 0.35, 0.37, 0.74, 0.58, 0.47, 0.52, 1.22, 0.60, 0.49, 0.96, 1.05, 1.02, 1.30, 0.16, 1.21, 1.29, 1.65, 1.32, 1.3, 1.33, 3.23, 3.18, 4.11, 3.99, 3.71, 3.53, 6.83, 6.84, 6.65, 7.31, 6.93, 7.46, 7.47, 7.43, 7.2, 7.57,
      ],
      white: [
        "",
        "",
        "",
        "",
        "",
        "e4",
        "",
        "Nf3",
        "",
        "d4",
        "",
        "Nxd4",
        "",
        "Nc3",
        "",
        "Be3",
        "",
        "f3",
        "",
        "Qd2",
        "",
        "Bc4",
        "",
        "h4",
        "",
        "Bb3",
        "",
        "O-O-O",
        "",
        "Bxc4",
        "",
        "h5",
        "",
        "g4",
        "",
        "Nde2",
        "",
        "Bh6",
        "",
        "Qxh6",
        "",
        "Rd3",
        "",
        "g5",
        "",
        "Rd5",
        "",
        "Nxd5",
        "",
        "Nef4",
        "",
        "e5",
        "",
        "exf6",
        "",
        "Qxh7+",
        "",
        "Qh8+",
        "Qh8+",
        "Qh8+",
        "Qh8+"
      ],
      black: [
        "",
        "",
        "",
        "",
        "",
        "",
        "c5",
        "",
        "d6",
        "",
        "cxd4",
        "",
        "Nf6",
        "",
        "g6",
        "",
        "Bg7",
        "",
        "Nc6",
        "",
        "O-O",
        "",
        "Bd7",
        "",
        "Rc8",
        "",
        "Ne5",
        "",
        "Nc4",
        "",
        "Rxc4",
        "",
        "Nxh5",
        "",
        "Nf6",
        "",
        "Qa5",
        "",
        "Bxh6",
        "",
        "Rfc8",
        "",
        "R4c5",
        "",
        "Rxg5",
        "",
        "Rxd5",
        "",
        "Re8",
        "",
        "Bc6",
        "",
        "Bxd5",
        "",
        "exf6",
        "",
        "Kf8",
        "",
        "",
        "",
        ""
      ],
    };
  },
  mounted() {
  
  },
  methods:{
    getIndex(){
      return 
    },
  }
};
</script>
