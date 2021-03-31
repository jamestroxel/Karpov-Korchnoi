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
import LowerThird from './LowerThird.vue';
import ChessBoard from './ChessBoard.vue';
import Sankey from './Sankey.vue';

import json from './sankey.json'

export default {
  name: 'KvK',
  components: {
      LowerThird,
      ChessBoard,
      Sankey
  },
  data(){
    return {
      moves: null,
    }
  },
   mounted: function() {
    console.log('***', json);
    this.moves = json;
    },
};
</script>