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
    <div v-if=" moveIndex > 0 && moveIndex < 2" class="item-c-kvk" style="width: 400px">
      <div style="padding-top: 18px;">
        <h1 class="standBy">{{openings[positionIndex].move}}</h1>
        <div class="block" style="width: 400px">
          <button @click="previousPos" id="previousPos" type="button">
            &#60;
          </button>
          <button @click="nextPos" id="nextPos" type="button">
            &#62;
          </button>
        </div>
      </div>
    </div>
    <div v-if=" moveIndex > 34 && moveIndex < 42" class="item-c-kvk" style="width: 400px">
      <div style="padding-top: 18px;">
        <p class="annotationMove">{{annotation[moveIndex-35].move}}</p>
        <p class="annotation">{{annotation[moveIndex-35].text}}</p>
      </div>
    </div>
    <div v-if=" moveIndex > 44 && moveIndex < 57" class="item-c-kvk" style="width: 400px">
      <div style="padding-top: 18px;">
        <p class="annotationMove">{{annotationPartTwo[moveIndex-45].move}}</p>
        <p class="annotation">{{annotationPartTwo[moveIndex-45].text}}</p>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import ChessBoard from "chessboardjs-vue";
import LowerThird from "../components/LowerThird.vue";
// import ChessBoard from './ChessBoard.vue';
import Sankey from "../components/Sankey.vue";
// import Cors from "./Correlations.vue";
import Story from "../components/Story.vue";
import moves from "../components/moves.json";
import openings from "../components/openings.json";

import annotation from "../components/Annotation.json";
import annotationPartTwo from "../components/AnnotationPartTwo.json";

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
      positionIndex: 0,
      moveIndex: 0,
      moves: moves,
      openings: openings,
      annotation: annotation,
      annotationPartTwo: annotationPartTwo
    };
  },
  mounted: function() {
    this.moves = moves;
    this.opening = openings;
    this.cb = ChessBoard("board", "start");
  },
  updated(){
    if(this.moveIndex == 1) {
      this.cb.position(this.opening[this.positionIndex].fen)
    }
  },
  computed: {
    getMove() {
      return this.moveIndex;
    },
    getPos() {
      return this.positionIndex;
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
    nextPos() {
      if (this.positionIndex == 12) {
        return;
      } else {
        this.positionIndex = this.positionIndex + 1;
        this.makePos();
      }
    },
    previousPos() {
      if (this.positionIndex == 0) {
        return;
      } else {
        this.positionIndex = this.positionIndex - 1;
        this.makePos();
      }
    },
    makePos() {
      this.cb.position(this.opening[this.getPos].fen);
    },
  },
};
</script>
