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
    <p class="white">{{ this.white[this.moveIndex] }}</p>
  </div>
  <div class="scoreR">
    <svg>
      <rect id="barR"></rect>
    </svg>
  </div>
  <div class="notationR">
    <p class="black">{{ this.black[this.moveIndex] }}</p>
    <p class="player">
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
      white: [
        "",
        "e4",
        "e4",
        "Nf3",
        "Nf3",
        "d4",
        "d4",
        "Nxd4",
        "Nxd4",
        "Nc3",
        "Nc3",
        "Be3",
        "Be3",
        "f3",
        "f3",
        "Qd2",
        "Qd2",
        "Bc4",
        "Bc4",
        "h4",
        "h4",
        "Bb3",
        "Bb3",
        "O-O-O",
        "O-O-O",
        "Bxc4",
        "Bxc4",
        "h5",
        "h5",
        "g4",
        "g4",
        "Nde2",
        "Nde2",
        "Bh6",
        "Bh6",
        "Qxh6",
        "Qxh6",
        "Rd3",
        "Rd3",
        "g5",
        "g5",
        "Rd5",
        "Rd5",
        "Nxd5",
        "Nxd5",
        "Nef4",
        "Nef4",
        "e5",
        "e5",
        "exf6",
        "exf6",
        "Qxh7+",
        "Qxh7+",
        "Qh8+",
      ],
      black: [
        "",
        "",
        "c5",
        "c5",
        "d6",
        "d6",
        "cxd4",
        "cxd4",
        "Nf6",
        "Nf6",
        "g6",
        "g6",
        "Bg7",
        "Bg7",
        "Nc6",
        "Nc6",
        "O-O",
        "O-O",
        "Bd7",
        "Bd7",
        "Rc8",
        "Rc8",
        "Ne5",
        "Ne5",
        "Nc4",
        "Nc4",
        "Rxc4",
        "Rxc4",
        "Nxh5",
        "Nxh5",
        "Nf6",
        "Nf6",
        "Qa5",
        "Qa5",
        "Bxh6",
        "Bxh6",
        "Rfc8",
        "Rfc8",
        "R4c5",
        "R4c5",
        "Rxg5",
        "Rxg5",
        "Rxd5",
        "Rxd5",
        "Re8",
        "Re8",
        "Bc6",
        "Bc6",
        "Bxd5",
        "Bxd5",
        "exf6",
        "exf6",
        "Kf8",
        "Kf8",
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
