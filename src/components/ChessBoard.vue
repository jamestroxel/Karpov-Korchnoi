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
      position: null,
    }
  },
  
  mounted(){
    // this.board.move
    //  var position1 = {
    //   d6: 'bK',
    //   d4: 'wP',
    //   e4: 'wK'
    // }
    this.getPosition();
    this.nextMove();
    this.previousMove();
    this.position = moves.move;
    ChessBoard('board',"start");
      // ChessBoard('board',position1);
  },
  methods: {
    getPosition(){
      return ChessBoard('board').fen()
    },
    previousMove(){
      $('#previous').on('click', function () { 
        ChessBoard('board',moves[0].fen).move(moves[0].move)
      })
    },
    nextMove(){
      $('#next').on('click', function () {
        ChessBoard('board',moves[0].fen).move(moves[1].move)
      })
    }
  }
}
</script>