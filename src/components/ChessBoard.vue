<template>
 <div id="board" class="item-b" style="width: 400px"></div>
</template>
<script>
import ChessBoard from "chessboardjs-vue";
// var board = Chessboard('board')
export default {
  name: 'ChessBoard',
  // components: {
  //     ChessBoard
  // },
  props: {
    position: String
  },
  mounted(){
     var position1 = {
      d6: 'bK',
      d4: 'wP',
      e4: 'wK'
    }
      ChessBoard('board',"start");
      ChessBoard('board',position1);
  }
}
</script>