<template>
<div class="item-b-kvk">
  <div id="board" style="width: 400px"></div>
  <div class="block" style="width: 400px">
  <button 
  id="next"
  type="button">
  &#62;
  </button>
  <button 
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
import $ from 'jquery'
// var board = Chessboard('board')
export default {
  name: 'ChessBoard',
  // components: {
  //     ChessBoard
  // },
   data(){
    return {
      moves: moves,
      moveIndex: 0
      // position: null,
    }
  },
  updated(){
       ChessBoard('board',"start").move();
  },
  mounted(){
    this.nextMove();
    this.previousMove();
    this.moves = moves.move;
      //  ChessBoard('board',"start");
  },
  computed: {
    getMove() {
      return this.moves[this.moveIndex]
    }
  },
  methods: {
    // getPosition(){
    //   return ChessBoard('board').fen()
    // },
    previousMove(){
      const pMove = this.getMove - 1;
      $('#previous').on('click', function () { 
        ChessBoard('board',moves[0].fen).move(pMove)
      })
    },
    nextMove(){
      const nMove = this.getMove + 1;
      $('#next').on('click', function () {
        ChessBoard('board',moves[0].fen).move(nMove)
      })
    }
    // previousMove(){
    //   $('#previous').on('click', function () { 
    //     return this.moveIndex = this.moveIndex - 1
    //   })
    // },
    // nextMove(){
    //   $('#next').on('click', function () {
    //     return this.moveIndex = this.moveIndex + 1
    //   })
    // }
  }
}
</script>