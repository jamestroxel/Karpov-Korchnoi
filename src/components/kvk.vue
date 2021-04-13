<template>
  <div class="container">
    <div class="item-a-kvk">
      <div style="height:100%;">
      <Story :moveIndex="moveIndex"></Story>
      </div>
      <div class="block" style="width: 400px">
        <button @click="previousMove" id="previous" type="button">
          &#60;
        </button>
        <button @click="nextMove" id="next" type="button">
          &#62;
        </button>
      </div>
    </div>
    <div class="item-b-kvk">
      <div id="board" style="width: 400px"></div>
    </div>
    <LowerThird :moveIndex="moveIndex"></LowerThird>
    <Sankey :moveIndex="moveIndex"></Sankey>
    <div class="bottom"></div>
  </div>
</template>
<script>
import ChessBoard from "chessboardjs-vue";
import LowerThird from "./LowerThird.vue";
// import ChessBoard from './ChessBoard.vue';
import Sankey from "./Sankey.vue";
// import Cors from "./Correlations.vue";
import Story from "./Story.vue";
import moves from "./moves.json";

export default {
  name: "KvK",
  components: {
    LowerThird,
    // Cors,
    // ChessBoard,
    Sankey,
    Story,
  },
  data() {
    return {
      moveIndex: 0,
      moves: moves,
    };
  },
  mounted: function() {
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
      if (this.moveIndex == 57) {
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
