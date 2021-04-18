<template>
  <div class="container">
    <div class="item-b-kvk">
      <div id="board1" style="width: 400px"></div>
    </div>
    <LowerThirdPlay></LowerThirdPlay>
    <div class="bottom"></div>
  </div>
  <div class="row">
      <div class="col-sm-7 col-md-6">
        <span class="h3" id="time1">0:05:00</span>
        <div id="board" style="width: 400px"></div>
        <span class="h3" id="time2">0:05:00</span>
        <hr>
        <div id="engineStatus">...</div>
      </div>
      <div class="col-sm-5 col-md-6">
        <h3>Moves:</h3>
        <div id="pgn"></div>
        <hr>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="timeBase" class="control-label col-xs-4 col-sm-6 col-md-4">Base time (min)</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <input type="number" class="form-control" id="timeBase" value="5">
            </div>
          </div>
          <div class="form-group">
            <label for="timeInc" class="control-label col-xs-4 col-sm-6 col-md-4">Increment (sec)</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <input type="number" class="form-control" id="timeInc" value="2">
            </div>
          </div>
          <div class="form-group">
            <label for="skillLevel" class="control-label col-xs-4 col-sm-6 col-md-4">Skill Level (0-20)</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <input type="number" class="form-control" id="skillLevel" value="0">
            </div>
          </div>
          <div class="form-group">
            <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4">I play</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-primary active" id="color-white"><input type="radio" name="color">White</label>
                <label class="btn btn-primary" id="color-black"><input type="radio" name="color">Black</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="showScore" class="control-label col-xs-4 col-sm-6 col-md-4">Show score</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <input type="checkbox" class="form-control" id="showScore" checked>
            </div>
          </div>
          <div class="form-group">
            <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4"></label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <button type="button" class="btn btn-primary" onclick="newGame()">New Game</button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4">Promote to</label>
            <div class="col-xs-4 col-sm-6 col-md-4">
              <select id=promote>
                <option value=q selected>Queen</option>
                <option value=r>Rook</option>
                <option value=b>Bishop</option>
                <option value=n>Knight</option>
              </select>
            </div>
          </div>
        </form>
        <h5>Evaluation</h5>
        <pre id=evaluation></pre>
    </div>
  </div>
</template>
<script>
import Chess from "chess.js";
import ChessBoard from "chessboardjs-vue";
import LowerThirdPlay from "../components/LowerThirdPlay.vue";


export default {
  name: "ChessBoard",
  components: {
    LowerThirdPlay,
  },
  data() {
    return {
    };
  },

  mounted() {
    this.chess = Chess('r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1');
    this.cb = ChessBoard("board1", "start");
  },
  computed: {
  },
  methods: {

  },
};
</script>
