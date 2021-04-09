<template>
  <div class="scoreL">
    <svg>
      <rect id="barL"></rect>
    </svg>
  </div>
  <div class="notationL">
    <p class="player">
      Karpov
    </p>
  </div>
  <div class="scoreR">
    <svg>
      <rect id="barR"></rect>
    </svg>
  </div>
  <div class="notationR">
    <p class="player">
      Korchnoi<span>{{ moves[moveIndex] }}</span>
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
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "g6",
        "Be3",
        "Bg7",
        "f3",
        "Nc6",
        "Qd2",
        "O-O",
        "Bc4",
        "Bd7",
        "h4",
        "Rc8",
        "Bb3",
        "Ne5",
        "O-O-O",
        "Nc4",
        "Bxc4",
        "Rxc4",
        "h5",
        "Nxh5",
        "g4",
        "Nf6",
        "Nde2",
        "Qa5",
        "Bh6",
        "Bxh6",
        "Qxh6",
        "Rfc8",
        "Rd3",
        "R4c5",
        "g5",
        "Rxg5",
        "Rd5",
        "Rxd5",
        "Nxd5",
        "Re8",
        "Nef4",
        "Bc6",
        "e5",
        "Bxd5",
        "exf6",
        "exf6",
        "Qxh7+",
        "Kf8",
        "Qh8+",
      ],
    };
  },
  mounted() {
    
  },
  methods:{
    getIndex(){
      return 
    }
  }
};
</script>
