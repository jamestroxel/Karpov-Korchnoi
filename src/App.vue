<template>
  <kvk></kvk>
  <lowerThird></lowerThird>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import kvk from './components/kvk.vue'
import lowerThird from './components/lowerThird.vue'

export default {
  name: 'App',
  components: {
    kvk,
    lowerThird
  }
}
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@font-face{
          font-family:"Univers LT W01_65 Bold1475968";
          src:url("./Fonts/1475968/8a711a0d-3f17-4bfe-887b-6229858332b3.woff2") format("woff2"),url("./Fonts/1475968/05a79c4b-9e9d-46e4-9d4b-610be05371c4.woff") format("woff");
      }
@font-face{
          font-family:"Univers LT W01_55 Roman1475956";
          src:url("./Fonts/1475956/5c8d59c2-9c85-4a22-88e3-bf3fba01dcd8.woff2") format("woff2"),url("./Fonts/1475956/fc51d03b-0d7d-45df-9415-3c6270c80749.woff") format("woff");
      }
@font-face{
          font-family:"Univers LT W04_59 Ult Cond";
          src:url("./Fonts/1571239/e3112381-ca77-4808-a019-8456920ba9b6.woff2") format("woff2"),url("./Fonts/1571239/8972b150-d6ee-4582-add4-51c571e98b4f.woff") format("woff");
      }

body{
  padding:0px;
  margin:0px;
  overflow-y: hidden;
}
.title{
  font-family:"Univers LT W04_59 Ult Cond";
  position:fixed;
 margin-top:25%;
 margin-bottom:25%;
 margin-left:12.5px;
 padding:0px;
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  transform-origin: top left;
}
.nav1{
  grid-column: 2 / span 3;
  grid-row: 1;
  /* width:100%; */
  background: white;
  /* position: fixed;
  top:0; */
  margin:0px;
  height: 50px;
  border-top:0px;
  border-bottom:1px;
  border-left:0px;
  border-right:0px;
  border-color: black;
  border-style: solid;
}
.nav2{
  grid-column: 6 / span 6;
  grid-row: 1;
  /* width:100%; */
  background: white;
  /* position: fixed;
  top:0; */
  margin:0px;
  height: 50px;
  border-top:0px;
  border-bottom:1px;
  border-left:0px;
  border-right:0px;
  border-color: black;
  border-style: solid;
}
.prologue{
  font-family:"Univers LT W04_59 Ult Cond";
  grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 400px;
    padding-right: 10px;
    padding-top: 0px;
}
.KvK{
  font-family:"Univers LT W04_59 Ult Cond";
  color: red;
  grid-column-start: 6;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 400px;
    padding-right: 10px;
    padding-top: 0px;
}
.moves{
  display: flex;
  /* align-content: flex-end; */
  vertical-align: bottom;
  align-items: flex-end;
  /* text-align: end; */
  width: 75px;
  height: 20px;
  font-family:"Univers LT W04_59 Ult Cond";
  color: red;
  background-color: white;
  grid-column-start: 6;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    /* width: 400px; */
    padding-right: 50px;
    margin-top: 40px;
    margin-right: 50px;
    overflow-y:scroll;
}
.play{
  font-family:"Univers LT W04_59 Ult Cond";
  grid-column-start: 9;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 400px;
    padding-right: 10px;
    padding-top: 0px;
}
h1{
  font-family:"Univers LT W01_65 Bold1475968";
  font-size: 2em;
  margin-top: 0px;
  margin-bottom: 50px;
}
.story{
  font-family:"Univers LT W01_55 Roman1475956";
  font-size: 1em;
  min-height: 0;
  /* height: 100%; */
  /* margin-bottom: 100%; */
  overflow-y: scroll;
}
.story:last-child{
  font-family:"Univers LT W01_55 Roman1475956";
  font-size: 1em;
  min-height: 0;
  /* max-height: 100%; */
  /* margin-bottom: 100%; */
  overflow-y: scroll;
}
.container {
  width: 100%;
  height: 100vh;
  justify-content: center; 
  display: grid;
  grid-template-columns: 50px 1fr 50px 400px 50px 200px 200px 50px 400px 50px 1fr 50px;
  grid-template-rows: 50px 2fr 12.5px 75px 50px;
  }
  .item-a{
    font-family:"Univers LT W01_55 Roman1475956";
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 400px;
    /* min-height: 0; */
    padding-right: 10px;
    padding-top: 25px;
    overflow-y: scroll;
    /* bottom: 150px; */
    height: 100%;
  }
  .item-b{
    grid-column-start: 6;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 2;
    width: 400px;
    padding-top: 25px;
    padding-right:0px;
    margin: 0px;
  }
  .item-c{
    grid-column-start:9;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 400px;
    padding-top: 25px;
  }
  .bottom{
    grid-column: 2 / span 10;
    grid-row: 5;
    /* width:100%; */
    /* background: white;
    position: absolute;
    left:50px;
    right: 50px; */
    bottom:0;
    margin:0px;
    height: 50px;
    max-height: 50px;
    border-top:1px;
    border-bottom:0px;
    border-left:0px;
    border-right:0px;
    border-color: black;
    border-style: solid;
    /* overflow-y: hidden; */
  }
  .notationL{
    display: flex;
  justify-content: flex-start;
  align-items: center;
    grid-column: 6 ;
    grid-row: 4;
    width:200px;
    background: white;
    /* position: absolute; */
    /* left:50px;
    right: 50px; */
    /* bottom:0; */
    margin:0px;
    height: 75px;
    max-height: 75px;
    border-top:1px;
    border-bottom:0px;
    border-left:0px;
    border-right:1px;
    border-color: black;
    border-style: solid;
    /* overflow-y: hidden; */
  }
  .notationR{
    display: flex;
  justify-content: flex-end;
  align-items: center;
    grid-column: 7 ;
    grid-row: 4;
    width:200px;
    background: white;
    /* position: absolute; */
    /* left:50px;
    right: 50px; */
    /* bottom:0; */
    margin:0px;
    height: 75px;
    max-height: 75px;
    border-top:1px;
    border-bottom:0px;
    border-left:1px;
    border-right:0px;
    border-color: black;
    border-style: solid;
    /* overflow-y: hidden; */
  }
  .scoreL{
    background-color: white;
    height: 12.5px;
    width: 200px;
    grid-column: 6 ;
    grid-row: 3;
    border-top:0px;
    border-bottom:0px;
    border-left:0px;
    border-right:1px;
    border-color: black;
    border-style: solid;
  }
  .scoreR{
    height: 12.5px;
    width: 200px;
    grid-column: 7 ;
    grid-row: 3;
    border-top:0px;
    border-bottom:0px;
    border-left:1px;
    border-right:0px;
    border-color: black;
    border-style: solid;
    float: left;
  }
  .player{
    font-family:"Univers LT W04_59 Ult Cond";
    font-size: 3em;
    text-transform: uppercase;
    margin: 0px;
  }
  .form-horizontal{
    height:0px;
    overflow: hidden;
  }
/*! chessboard.js v0.3.0 | (c) 2013 Chris Oakman | MIT License chessboardjs.com/license */
.clearfix-7da63 {
  clear: both;
}
.board-b72b1 {
  border: 0px solid black;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  margin:4px;
  padding: 0px;
  /* width:400;
  height: 400; */
}
.square-55d63 {
  float: left;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin:0px;
}
.white-1e1d7 {
  background-color: white;
  color: black;
}
.black-3c85d {
  /* background-color: deepPink; */
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  color: black;
}
.highlight1-32417,
.highlight2-9c5d2 {
  -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
}
.notation-322f9 {
  cursor: default;
  font-family: "Univers LT W04_59 Ult Cond";
  font-weight: 700;
  font-size: 14px;
  position: absolute;
}
.alpha-d2270 {
  bottom: 2px;
  right: 3px;
}
.numeric-fc462 {
  top: 2px;
  left: 3px;
}

</style>
