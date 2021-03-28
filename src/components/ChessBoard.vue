<template>
 <div id="board" class="item-b" style="width: 400px">
   <el-pagination
        :page-size="1"
        :pager-count="3"
        layout="prev, pager, next"
        :total="28">
      </el-pagination>
 </div>
 
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
  data(){

  },
  mounted(){
    // this.board.move
     var position1 = {
      d6: 'bK',
      d4: 'wP',
      e4: 'wK'
    }
      ChessBoard('board',"start");
      ChessBoard('board',position1);
  },
  // data() {
  //   return {
  //     board: { 
  //       ...board, 
  //       positions: board.positions.map(f => ({ 
  //         ...f, 
  //         properties: {
  //           ...f.properties,
  //           centroid: d3.geoCentroid(f)
  //         }
  //       }))
  //     },
  //     colorVar: 'economy',
  //     colorVars: ['economy', 'income_grp', 'subregion'],
  //     width: 400,
  //     height: 500,
  //     mb: null
  //   }
  // },
}
</script>