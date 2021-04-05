<template>
  <div class="container">
    <div id="pgn" class="moves"></div>
    <div class="item-a-kvk">
      <h1>Slaying the Dragon</h1>
      <Story></Story>
    </div>
      <ChessBoard></ChessBoard>
      <LowerThird></LowerThird>
      <Sankey></Sankey>
      <div class="bottom"></div>
    </div>
</template>
<script>
import LowerThird from './LowerThird.vue';
import ChessBoard from './ChessBoard.vue';
import Sankey from './Sankey.vue';
import Story from './Story.vue';

export default {
  name: 'KvK',
  components: {
      LowerThird,
      ChessBoard,
      Sankey,
      Story
  },
  data(){
    return {
      moves: null,
    }
  },
   mounted: function() {

    },
};
</script>