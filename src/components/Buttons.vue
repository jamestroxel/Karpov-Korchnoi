<template>  
<div class="block" style="width: 400px">
  <button @click="previousMove" id="previous" type="button">
    &#60;
  </button>
  <button @click="nextMove" id="next" type="button">
    &#62;
  </button>
</div>
</template>
<script>


export default {
  name: 'Buttons',
   data(){
    return {
      // moveIndex: 0,
    }
  },
   mounted: function() {

    },
  methods:{
    // nextMove() {
    //   if (this.moveIndex == 53) {
    //     return;
    //   } else {
    //     this.moveIndex = this.moveIndex + 1;
    //     console.log(this.moveIndex);
    //   }
    // },
    // previousMove() {
    //   if (this.moveIndex == 0) {
    //     return;
    //   } else {
    //     this.moveIndex = this.moveIndex - 1;
    //     console.log(this.moveIndex);
    //   }
    // },
  }
}
</script>