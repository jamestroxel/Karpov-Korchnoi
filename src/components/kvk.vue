<template>
  <div class="container">
    <div id="pgn" class="moves"></div>
    <div class="item-a-kvk">
      <h1>Slaying the Dragon</h1>
      <h2>Moscow, 1974</h2>
      <p class="story">
        <!-- <Story></Story>        -->
      </p>
    </div>
      <ChessBoard></ChessBoard>
      <LowerThird></LowerThird>
      <Sankey></Sankey>
      <div class="bottom"></div>
    </div>
</template>
<script>
// var board = Chessboard('board')
import LowerThird from './LowerThird.vue'
import ChessBoard from './ChessBoard.vue'
// import Chessboard from '@chrisoakman/chessboardjs'
import Sankey from './Sankey.vue'

export default {
  name: 'KvK',
  components: {
      LowerThird,
      ChessBoard,
      Sankey
  },
  props: {
    story: String
  }
}
</script>