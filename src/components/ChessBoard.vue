<template>
  <div class="item-b-kvk">
    <div id="board" style="width: 400px"></div>
    <div class="block" style="width: 400px">
      <button @click="previousMove" id="previous" type="button">
        &#60;
      </button>
      <button @click="nextMove" id="next" type="button">
        &#62;
      </button>
    </div>
  </div>
</template>
<script>
import ChessBoard from "chessboardjs-vue";
import moves from "./moves.json";

export default {
  name: "ChessBoard",

  data() {
    return {
      moves: moves,
      moveIndex: 0,
    };
  },

  mounted() {
    this.moves = moves;
    this.cb = ChessBoard("board", "start");
  },
  computed: {
    getMove() {
      return this.moveIndex;
    },
  },
  methods: {
    nextMove() {
      if (this.moveIndex == 53) {
        return;
      } else {
        this.moveIndex = this.moveIndex + 1;
        this.makeMove();
        console.log(this.moveIndex);
      }
    },
    previousMove() {
      if (this.moveIndex == 0) {
        return;
      } else {
        this.moveIndex = this.moveIndex - 1;
        this.makeMove();
        console.log(this.moveIndex);
      }
    },
    makeMove() {
      this.cb.position(this.moves[this.getMove].fen);
    },
  },
};
</script>
