<template>
    <p class="title">Chess, Patterns and Paranoia</p>
  <div class="container">
    <div class="nav1">
    </div>
    <p class="prologue">Prologue</p>
    <div class="nav2"></div>
    <p class="KvK">Karpov vs. Korchnoi</p>
    <div id="pgn" class="moves">
    </div>
     
    <p class="play">Play</p>
    <div class="item-a">
      <h1>Moscow 1974</h1>
      <p class="story">
        {{story}}        
      </p>
      <!-- <a id='CPp6laA6S0ldbSx2tFsSGg' class='gie-single' href='http://www.gettyimages.com/detail/82984865' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'CPp6laA6S0ldbSx2tFsSGg',sig:'pulX-8vD0MWwhmCOUqt0fOSyCf_iTh0VtTF_pUCzyOE=',w:'594px',h:'452px',items:'82984865',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script> -->
    </div>
    <!-- <span class="h3" id="time1">0:05:00</span> -->
      <div id="board" class="item-b" style="width: 400px"></div>
      <!-- <span class="h3" id="time2">0:05:00</span> -->
      <div id="sankey" class="item-c"></div>
      <lowerThird></lowerThird>
      <!-- <div class="scoreL">
        <svg>
          <rect id='barL'></rect>
        </svg>
      </div>
      <div class="notationL">
        <p class="player">
          Karpov
        </p>
      </div>
      <div class="scoreR">
        <svg>
          <rect id='barR'></rect>
        </svg>
      </div>
      <div class="notationR">
        <p class="player">
          Korchnoi
        </p>
      </div> -->
      <div class="bottom"></div>
      <div id="engineStatus" class="form-horizontal">...</div>
          <form class="form-horizontal">
            <div class="form-group">
              <label for="timeBase" class="control-label">Base time (min)</label>
              <div>
                <input type="number" class="form-control" id="timeBase" value="5">
              </div>
            </div>
            <div class="form-group">
              <label for="timeInc" class="control-label">Increment (sec)</label>
              <div>
                <input type="number" class="form-control" id="timeInc" value="2">
              </div>
            </div>
            <div class="form-group">
              <label for="skillLevel" class="control-label">Skill Level (0-20)</label>
              <div>
                <input type="number" class="form-control" id="skillLevel" value="0">
              </div>
            </div>
            <div class="form-group">
              <label for="color" class="control-label">I play</label>
              <div>
                <div class="btn-group" data-toggle="buttons">
                  <label class="btn btn-primary active" id="color-white"><input type="radio" name="color">White</label>
                  <label class="btn btn-primary" id="color-black"><input type="radio" name="color">Black</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="showScore" class="control-label">Show score</label>
              <div>
                <input type="checkbox" class="form-control" id="showScore" checked>
              </div>
            </div>
            <div class="form-group">
              <label for="color" class="control-label"></label>
              <div>
                <button type="button" class="btn btn-primary" onclick="newGame()">New Game</button>
              </div>
            </div>
            <div class="form-group">
              <label for="color" class="control-label">Promote to</label>
              <div>
                <select id=promote>
                  <option value=q selected>Queen</option>
                  <option value=r>Rook</option>
                  <option value=b>Bishop</option>
                  <option value=n>Knight</option>
                </select>
              </div>
            </div>
          </form>
</div>
              <h5 class="form-horizontal">Evaluation</h5>
              <pre id=evaluation class="form-horizontal"></pre>
              
</template>
<script>
export default {
  name: 'kvk',
  props: {
    // scroll: String,
    story: String
  }
}
</script>