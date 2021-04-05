<template>
<div class="item-b-kvk">
  <div id="board" style="width: 400px"></div>
  <div class="block" style="width: 400px">
  <button 
  @click="nextMove"
  id="next"
  type="button">
  &#62;
  </button>
  <button 
  @click="previousMove"
  id="previous"
  type="button">
  &#60;
  </button>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</div>
 
</template>
<script>
import ChessBoard from "chessboardjs-vue";
import moves from "./moves.json";

export default {
  name: 'ChessBoard',

   data(){
    return {
      moves: moves,
      moveIndex: 0
    }
  },
  updated(){
       ChessBoard('board',"start").move(this.getMove());
  },
  mounted(){
    this.nextMove();
    this.previousMove();
    this.moves = moves.move;
    // this.moveIndex = moves[this.moveIndex].move;
    // ChessBoard('board',"start");
  },
  computed: {
    getMove() {
      return this.moves[this.moveIndex].move
    }
  },
  methods: {
    // getPosition(){
    //   return ChessBoard('board').fen()
    // },
    getPosition(){
      return ChessBoard('board').fen()
    },
    nextMove(){
      return this.moveIndex + 1
    },
    previousMove(){
      return this.moveIndex - 1
    },
    // nextMove(){
    //   $('#next').on('click', function () {
    //     return ChessBoard('board',moves[1].fen).move(nMove)
    //   })
    // }
    // previousMove(){
    //   $('#previous').on('click', function () { 
    //     const pMove = this.getMove - 1;
    //     return ChessBoard('board',moves[0].fen).move(pMove)
    //   })
    // },
    // nextMove(){
    //   $('#next').on('click', function () {
    //     const nMove = this.getMove + 1;
    //     return ChessBoard('board',moves[1].fen).move(nMove)
    //   })
    // }
  }
  
}
</script>