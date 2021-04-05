<template>
    
       <div class="scoreL">
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
      </div>
 
</template>
<script>


export default {
  name: 'LowerThird',
   data(){
    return {
      moves: null,
    }
  },
   mounted: function() {

    },
}
</script>