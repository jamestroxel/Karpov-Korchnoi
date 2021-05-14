<template>
  <div class="titleContainer">
    <a href="https://github.com/jamestroxel/Karpov-Korchnoi" target="_blank" class="title">James Troxel, 2021</a>
  </div>
  <nav class="navContainer">
    <div class="nav1"></div>
    <router-link to="/prologue" class="prologue">Prologue</router-link>
    <router-link to="/kvk" class="KvK">Karpov vs. Korchnoi</router-link>
    <router-link to="/bibliography" class="play">Bibliography</router-link>
  </nav>
  <router-view/>
</template>

<script>
import baguio from "./assets/1978.json";
import PartTwo from "./assets/1978PartTwo.json";
import PartThree from "./assets/1978PartThree.json";
import Analysis from "./assets/1978Analysis.json";
import AnalysisTwo from "./assets/1978AnalysisPartTwo.json";

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      triflesIndex: 0,
      triflesTwoIndex: 0,
      triflesThreeIndex: 0,
      analysisIndex: 0,
      analysisTwoIndex: 0,
      trifles: baguio,
      triflesTwo: PartTwo,
      triflesThree: PartThree,
      analysis: Analysis,
      analysisTwo: AnalysisTwo,
    };
  },
  methods: {
    triflesNext() {
      if (this.triflesIndex == 3) {
        return;
      } else {
        this.triflesIndex = this.triflesIndex + 1;
      }
    },
    triflesPrevious() {
      if (this.triflesIndex == 0) {
        return;
      } else {
        this.triflesIndex = this.triflesIndex - 1;
      }
    },
    triflesTwoNext() {
      if (this.triflesTwoIndex == 1) {
        return;
      } else {
        this.triflesTwoIndex = this.triflesTwoIndex + 1;
      }
    },
    triflesTwoPrevious() {
      if (this.triflesTwoIndex == 0) {
        return;
      } else {
        this.triflesTwoIndex = this.triflesTwoIndex - 1;
      }
    },
    triflesThreeNext() {
      if (this.triflesThreeIndex == 3) {
        return;
      } else {
        this.triflesThreeIndex = this.triflesThreeIndex + 1;
      }
    },
    triflesThreePrevious() {
      if (this.triflesThreeIndex == 0) {
        return;
      } else {
        this.triflesThreeIndex = this.triflesThreeIndex - 1;
      }
    },
    analysisNext() {
      if (this.analysisIndex == 3) {
        return;
      } else {
        this.analysisIndex = this.analysisIndex + 1;
      }
    },
    analysisPrevious() {
      if (this.analysisIndex == 0) {
        return;
      } else {
        this.analysisIndex = this.analysisIndex - 1;
      }
    },
    analysisTwoNext() {
      if (this.analysisTwoIndex == 3) {
        return;
      } else {
        this.analysisTwoIndex = this.analysisTwoIndex + 1;
      }
    },
    analysisTwoPrevious() {
      if (this.analysisTwoIndex == 0) {
        return;
      } else {
        this.analysisTwoIndex = this.analysisTwoIndex - 1;
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Univers LT W01_65 Bold1475968";
  src: url("./Fonts/1475968/8a711a0d-3f17-4bfe-887b-6229858332b3.woff2")
      format("woff2"),
    url("./Fonts/1475968/05a79c4b-9e9d-46e4-9d4b-610be05371c4.woff")
      format("woff");
}
@font-face {
  font-family: "Univers LT W01_55 Roman1475956";
  src: url("./Fonts/1475956/5c8d59c2-9c85-4a22-88e3-bf3fba01dcd8.woff2")
      format("woff2"),
    url("./Fonts/1475956/fc51d03b-0d7d-45df-9415-3c6270c80749.woff")
      format("woff");
}
@font-face {
  font-family: "Univers LT W04_59 Ult Cond";
  src: url("./Fonts/1571239/e3112381-ca77-4808-a019-8456920ba9b6.woff2")
      format("woff2"),
    url("./Fonts/1571239/8972b150-d6ee-4582-add4-51c571e98b4f.woff")
      format("woff");
}
#app {
  margin: 0px;
  padding: 0px;
}
body {
  padding: 0px;
  margin: 0px;
  overflow-y: scroll;
}
.bold{
  font-family: "Univers LT W01_65 Bold1475968";
}
.item-a-logo {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
  margin-top: -40px;
}

.titleContainer {
  padding: 0px;
  margin:0px;
  position: fixed;
  display: flex;
  height: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  /* pointer-events: none; */
}

.title {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1em;
  text-align: center;
  margin-left: 12.5px;
  margin-bottom: -110px;
  padding: 0px;
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  transform-origin: top left;
  text-decoration: none;
}
.navContainer {
  position: fixed;
  width: 100%;
  height: 50px;
  display: grid;
  background-color: white;
  z-index: 400000;
  grid-template-columns: 50px 1fr 50px minmax(325px, 400px) 50px 200px 200px 50px 400px 50px 1fr 50px;
}

.nav1 {
  grid-column-start: 2;
  grid-column-end: 12;
  grid-row: 1;
  width: 100%;
  top: 0;
  padding: 0px;
  height: 50px;
  max-height: 50px;
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}

.nav2 {
  grid-column: 5 / span 5;
  grid-row: 1;
  width: 100%;
  background: white;
  margin: 0px;
  height: 50px;
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.prologue {
  font-family: "Univers LT W04_59 Ult Cond";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  width: auto;
  padding-top: 0px;
  margin-top: 15px;
  text-decoration: none;
}
.prologue.router-link-active{
  color: red;
}
a {color:black;}         /* Unvisited link  */
a:visited {color:black;} /* Visited link    */
a:hover {color:red;}   /* Mouse over link */
a:active {color:red;}  /* Selected link   */
.KvK {
  font-family: "Univers LT W04_59 Ult Cond";
  color: black;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 1;
  width: auto;
  /* padding-right: 10px; */
  padding-top: 0px;
  margin-top: 15px;
   text-decoration: none;
}
.container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 1fr 50px minmax(325px, 400px) 50px 200px 200px 50px 400px 50px 1fr 50px;
  grid-template-rows: 50px 2fr 12.5px 75px 50px;
  overflow:hidden;
}
.bibContainer {
 width: 100%;
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 50px 1fr 50px minmax(325px, 400px) 50px 200px 200px 50px 400px 50px 1fr 50px;
  grid-template-rows: 50px ;
  overflow-y:scroll;
}
.KvKbody {
  font-family: "Univers LT W04_59 Ult Cond";
  color: black;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 1;
  width: auto;
  /* padding-right: 10px; */
  padding-top: 0px;
  margin-top: 10px;
 padding-bottom: 15px;
   text-decoration: none;
   border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.KvK.router-link-active{
  color: red;
}
.KvKbody.router-link-active{
  color: red;
}
.KvK-button {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 2em;
  color: black;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 1;
  width: auto;
  /* padding-right: 10px; */
  padding-top: 0px;
  margin-top: 15px;
   text-decoration: none;
}
.moves {
  display: flex;
  /* align-content: flex-end; */
  vertical-align: bottom;
  align-items: flex-end;
  width: 75px;
  height: 20px;
  font-family: "Univers LT W04_59 Ult Cond";
  color: red;
  background-color: white;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  padding-right: 50px;
  margin-top: 40px;
  margin-right: 50px;
  overflow-y: scroll;
}
.play {
  font-family: "Univers LT W04_59 Ult Cond";
  grid-column-start: 9;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 1;
  width: 100%;
  padding-top: 0px;
  margin-top: 15px;
   text-decoration: none;
}
.play.router-link-active{
  color: red;
}
h1 {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 3.5em;
  margin-top: -10px;
  margin-bottom: 50px;
  text-transform: uppercase;
  column-span: all;
}
.heading1Quote:before {
  font-family: "Univers LT W01_55 Roman1475956";
  color: black;
  line-height: 1.5;
  content: "“";
  position: absolute;
  margin-left: -0.5em;
}
.heading1Quote:after {
  font-family: "Univers LT W01_55 Roman1475956";
  line-height: 1.5;
  content: "”";
}
.heading1Quote {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 3.5em;
  margin-top: -10px;
  margin-bottom: 50px;
  text-transform: uppercase;
  column-span: all;
}
.heading1 {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 3.35em;
  margin-top: 0px;
  margin-bottom: 50px;
  text-transform: uppercase;
  column-span: all;
}
h2 {
  font-family: "Univers LT W01_65 Bold1475968";
  font-size: 2em;
  margin-top: 0px;
  margin-bottom: 50px;
  column-span: all;
  line-height: 1;
}
.heading2 {
  font-family: "Univers LT W01_65 Bold1475968";
  font-size: 2em;
  margin-top: 0px;
  margin-bottom: 50px;
  column-span: all;
  line-height: 1;
}
.left-image {
  width: 100%;
  grid-column: 2 / 8;
  grid-row: 2;
}
.item-a-image {
  width: 100%;
  margin-bottom: 25px;
  grid-column: 4 / 4;
  grid-row: 2;
}
.right-imageContainer {
  width: 100%;
  grid-column: 9 / 12;
  grid-row: 2;
  overflow: hidden;
}
.kvk-imageContainer {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 9 / 12;
  grid-row: 2;
  margin-top: 27px;
  background-color: 	#F5F5F5;
  overflow: hidden;
}
.right-titleImageContainer {
  width: 100%;
  height: 100vh;
  grid-column: 9 / 12;
  grid-row: 2;
  overflow: hidden;
}
.right-svgContainer {
  /* width: 100%; */
  position: relative;

 background: red;
  /* height: 100%; */
  grid-column: 9 / 12;
  grid-row: 2;
  overflow: hidden;
}
.right-svg {
  height: 80%;
   position: absolute;
  grid-column-start: 9;
  grid-column-end: 9;
  grid-row: 2;
}
.right-svgChecker {
  width: 60%;
  /* height: 100%; */
    position: absolute;
  top: 0px;
  left: 400px;
  /* bottom: 50%; */
  /* grid-column-start: 9;
  grid-column-end: 9;
  grid-row: 2; */
}
.right-svgTrap {
  height: 25%;
  /* height: 100%; */
    position: absolute;
  bottom: -1px;
  left: 0px;
  /* bottom: 50%; */
  /* grid-column-start: 9;
  grid-column-end: 9;
  grid-row: 2; */
}
.right-turk {
  width: 100%;
  margin-left: 100px;
  /* height: 110vh; */
  grid-column: 9 / 12;
  grid-row: 2;
}
.right-imageContainer-landscape {
  width: 100%;
  /* height: 90vh; */
  grid-column: 6 / 12;
  grid-row: 2;
  overflow: hidden;
}
.right-image {
  width: 100%;
  /* height: 100vh; */
  grid-column: 9 / 12;
  grid-row: 2;
}
.kvk-image {
  /* width: 100%; */
  margin-top: 20px;
  width: 100%;
  grid-column: 9 / 12;
  grid-row: 2;
}
.annotation:before {
  font-family: "Univers LT W04_59 Ult Cond";
  color: black;
  line-height: 1.5;
  content: "“";
  position: absolute;
  margin-left: -0.25em;
}
.annotation:after {
  font-family: "Univers LT W04_59 Ult Cond";
  line-height: 1.5;
  content: "”";
}
.annotation{
  color: black;
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.5em;
  line-height: 1.5;
  margin-top: 25px;
  text-transform: uppercase;
}
.annotationMove{
  color: red;
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.5em;
  line-height: 1.5;
  margin-top: 0px;
  text-transform: uppercase;
}
.right-image-landscape {
  width: 100%;
  /* height: 100vh; */
  grid-column: 6 / 12;
  grid-row: 2;
}
.subHead {
  font-family: "Univers LT W01_65 Bold1475968";
  font-size: 1.5em;
  text-align: start;
  line-height: 1.5;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 0px;
  overflow-y: scroll;
}
.teaser{
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1.25em;
  line-height: 1.5;
  text-align: start;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 0px;
}

.teaserAttribute {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  line-height: 1.5;
  position: relative;
  text-align: end;
  /* min-height: 0; */
  /* height: auto; */
  height: auto;
  margin-bottom: 10px;
  float: right;
}
.teaserHead {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1.25em;
  line-height: 1.5;
  text-align: start;
  /* min-height: 0; */
  height: auto;
  /* height: 100%; */
  margin-top: 0px;
}
.teaserHead:before {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 6vw;
  color: red;
  line-height: 0.8;
  content: "“";
  position: absolute;
  margin-left: -0.75em;
}
.bibStory {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  line-height: 1.5;
  text-align: start;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 0px;
  margin-bottom: 10px;
  text-decoration: none;
}
.story {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1.25em;
  line-height: 1.5;
  text-align: start;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 0px;
  margin-bottom: 10px;
}
.story:last-child {
  font-family: "Univers LT W01_55 Roman1475956";
  /* text-align: start; */
  /* position:relative; */
  height: 100%;
  /* margin-top: 0px; */
}

.item-a {
  display: flex;
  flex-direction: column;
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  /* min-height: 0; */
  /* padding-right: 10px; */
  /* padding-top: 25px; */
  /* overflow-y: scroll; */
  height: 100%;
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.item-a-noRule {
  display: flex;
  flex-direction: column;
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 400px;
  /* min-height: 0; */
  /* padding-right: 10px; */
  /* padding-top: 25px; */
  /* overflow-y: scroll; */
  /* bottom: 150px; */
  height: 100%;
  /* border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid; */
}
.item-a-span {
  display: flex;
  flex-direction: column;
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  /* columns: 2; */

  /* min-height: 0; */
  /* padding-right: 10px; */
  /* padding-top: 25px; */
  /* overflow-y: scroll; */
  /* bottom: 150px; */
  height: 100%;
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.data {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  padding-right: 10px;
  padding-top: 25px;
  max-width: 350px;

}
.dataText {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 2;
  padding-right: 10px;
  padding-top: 25px;
  width:100%;

}
.references {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  padding-right: 10px;
  padding-top: 25px;
 max-width: 350px;
}
.referencesText {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start:6;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 3;
  padding-right: 10px;
  padding-top: 25px;
  width:100%;
}
.code {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
  padding-right: 10px;
  padding-top: 25px;
 max-width: 350px;
}
.codeText {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 4;
  grid-row-end: 4;
  padding-right: 10px;
  padding-top: 25px;
  width:100%;
}
.credit {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 5;
  padding-right: 10px;
  padding-top: 25px;
 max-width: 350px;
}
.creditText {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 5;
  grid-row-end: 5;
  padding-right: 10px;
  padding-top: 25px;
  width:100%;
}
.item-a-kvk {
  font-family: "Univers LT W01_55 Roman1475956";
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  /* max-width:400px; */
  width: 100%;
  /* min-height: 0; */
  padding-right: 10px;
  padding-top: 25px;
  /* overflow-y: scroll; */
  /* bottom: 150px; */
  height: 100%;
}
.item-b {
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  /* padding-top:168px; */
  padding-right: 0px;
  margin: 0px;
   height: 100%;
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.item-b-kvk {
     -moz-box-sizing: content-box;
  box-sizing: content-box;
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 2;
  width: 100%;
  padding-top: 25px;
  padding-right: 0px;
  margin: 0px;
}
.item-b-bib-span {
  grid-column-start: 3;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 2;
  height: 100%;
  padding-top: 25px;
  padding-right: 0px;
  margin: 0px;
}
.item-b-kvk-span:last-child{
  height:100%;
}
.item-c {
  display: flex;
  flex-direction: column;
  grid-column-start: 9;
  grid-column-end: 9;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
  /* padding-top: 25px; */
  /* overflow-y: scroll; */
  border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.item-c-kvk {
  display: flex;
  flex-direction: column;
  grid-column-start: 9;
  grid-column-end: 9;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
}
.bottom {
  grid-column: 1;
  grid-column-end: 13;
  grid-row: 5;
  /* width:100%; */
  /* background: white;
    position: absolute;
    left:50px;
    right: 50px; */
  bottom: 0;
  padding: 0px;
  margin: 0px;
  margin-left: 50px;
  margin-right: 50px;
  height: 50px;
  max-height: 50px;
  border-top: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  /* overflow-y: hidden; */
}
.notationL {
  display: flex;
  justify-content: space-between;
  grid-column: 6;
  grid-row: 4;
  width: 200px;
  background: white;
  /* position: absolute; */
  /* left:50px;
    right: 50px; */
  /* bottom:0; */
  margin: 0px;
  height: 75px;
  max-height: 75px;
  border-top: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 1px;
  border-color: black;
  border-style: solid;
  /* overflow-y: hidden; */
}
.notationR {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  grid-column: 7;
  grid-row: 4;
  width: 200px;
  background: none;
  /* position: absolute; */
  /* left:50px;
    right: 50px; */
  /* bottom:0; */
  margin: 0px;
  height: 75px;
  max-height: 75px;
  border-top: 1px;
  border-bottom: 0px;
  border-left: 1px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  /* overflow-y: hidden; */
}
.scoreL {
  background-color: white;
  height: 12.5px;
  width: 200px;
  grid-column: 6;
  grid-row: 3;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 1px;
  border-color: black;
  border-style: solid;
}
.scoreR {
  display: flex;
  flex-direction: row;
  height: 12.5px;
  width: 200px;
  grid-column: 7;
  grid-row: 3;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  /* background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  color: black; */
}
.player {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 2.75em;
  text-transform: uppercase;
  margin-top: 6px;
}
.playerR {
  position: absolute;
  right:0;
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 2.75em;
  text-transform: uppercase;
  margin-top: 6px;
}
.form-horizontal {
  height: 0px;
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
  margin: 4px;
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
  margin: 0px;
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
  font-size: 16px;
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
#sankey {
  margin-top: 25px;
}
#viz{
  margin-top: 25px;
}
.axis {
  cursor: default;
  font-family: "Univers LT W04_59 Ult Cond";
  /* font-weight: 700; */
  font-size: 14px;
}
.ticker {
  cursor: default;
  font-family: "Univers LT W04_59 Ult Cond";
  /* font-weight: 700; */
  font-size: 14px;
  float: right;
}
.spaceAxis {
  cursor: default;
  font-family: "Univers LT W04_59 Ult Cond";
  text-align:center;
  font-size: 14px;
  padding-bottom: 14px;
     border-top: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.links {
  opacity: 0.1;
  mix-blend-mode: multiply;
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  /* transition-delay: 1s; */
}
.line {
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  /* transition-delay: 1s; */
}
.nodes {
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
.B{
  height:25px;
  float:right;
  position:absolute;
  right:0px;
}
.W{
  height:25px;
  float:right;
  position:absolute;
  left:0px;
}
.moveCount{
  display:flex;
  flex-direction: row;
  position: relative;
  bottom: 30px;
  height:10px;
  /* border-radius: 200px 200px 0px 0px;
      -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red; */
  width: 400px;
  justify-content: center;
  color: black;
  grid-column: 6;
  grid-row: 3;
  padding-top: 0px;
     border-top: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  transition:ease-in-out;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.avatarContainer{
  display:flex;
  flex-direction: row;
  position: relative;
  bottom: 60px;
  height:20px;
  width: 400px;
  justify-content: center;
  color: black;
  grid-column: 6;
  grid-row: 3;
  padding-top: 0px;
}
.avatar1frame{
  /* position: absolute;
  right:0; */
  height:20px;
  width:30px;
  /* padding-left:17.5px;
  padding-right:17.5px; */
  margin:0px;
  background: white;
   border-radius: 40px 40px 0px 0px;
       -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
  /* float:right; */
}
.avatar2frame{
  /* position: absolute;
  left:0; */
  height:20px;
  width:30px;
  /* padding-left:17.5px;
  padding-right:17.5px; */
  margin:0px;
  background: white;
   border-radius: 40px 40px 0px 0px;
       -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
  /* float:right; */
}
.bulbContainer{
  display:flex;
  flex-direction: row;
  position: relative;
  bottom: 65px;
  height:25px;
  width: 400px;
  justify-content: center;
  color: black;
  grid-column: 6;
  grid-row: 3;
  padding-top: 0px;
}

.bulb{
  height:20px;
  /* width:5px; */
  padding-left:17.5px;
  padding-right:17.5px;
  margin:0px;
  background: white;
   border-radius: 20px 20px 0px 0px;
       -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
}
.gameStats{
  display:flex;
  flex-direction: row;
  position: relative;
  bottom: 51px;
  height:21px;
      background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  color: black;
  width: 400px;
  justify-content: center;
  color: black;
  grid-column: 6;
  grid-row: 3;
  padding-top: 0px;
       border-top: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  transition:ease-in-out;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.prologuePattern{
   display:flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
   width: 100%;
   height:50px;
   background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  color: black;
}
.statsLabel{
 font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  line-height:1;
  text-align: center;
  height:20px;
  padding-left:17.5px;
  padding-right:17.5px;
  margin:0px;
  margin-top:-1px;
  background: white;
  text-transform: uppercase;
  border: 1px;
   border-color: black;
  border-style: solid;
   border-radius: 40px 40px 40px 40px;
}

.count{
 font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  text-align: center;
  height:15px;
  padding-bottom: 5px;
  padding-left:10px;
  padding-right:10px;
  margin:0px;
  background: white;
}
.name {
  transition: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.white {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  text-align: center;
  height: 30px;
  width: 55px;
  border-radius: 50px 0px 0px 50px;
  justify-content: center;
  color: black;
  padding-top:2.5px;
  margin-top: 20;
  margin-right: 0px;
  transition:ease-in-out;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
    -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
}
.black {
  /* display:flex; */
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  text-align: center;
  height: 30px;
  width: 55px;
  border-radius: 0px 50px 50px 0px;
  padding-top:2.5px;
  margin-top: 20px;
  margin-left: 0px;
  color: black;
  transition:ease-in-out;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
    -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
}

button {

  /* display: inline-block; */
  border: none;
    background: black;
    border-radius: 2px;
  /* padding: 1rem 2rem; */
  margin-right: 10px;
  padding-bottom: 10px;
  padding-top: 4px;
  text-decoration: none;
  height: 25px;
  overflow: hidden;
  width: 25px;
  color: white;
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1.125em;
  line-height: 0.75;
  cursor: pointer;
  text-align: center;
  text-anchor: middle;
  /* transition: background 250ms ease-in-out, transform 150ms ease; */
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover {
  color: black;
    background: white;
      -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
  
}
/* button:focus {
    background: none;
    color: black;
} */

button:focus {
  outline: 0px solid white;
  outline-offset: -4px;

}

button:active {
  transform: scale(0.99);
  color:red;
     background: white;
      -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
  
}
.posNav{
  display:flex;
  flex-direction: row;
  /* position: relative;
  bottom: 65px; */
  /* height:25px; */
  width: 400px;
  justify-content: center;
  align-content: center;
  /* color: black; */
  /* grid-column: 6;
  grid-row: 3; */
  /* padding: 0px; */
}
.standBy{
  color: red;
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.5em;
  text-align: center;
  /* line-height: 0; */
  /* height: 25px; */
  margin:0px;
  margin-top:10px;
  padding:0px;
  /* margin-top: -20px; */
  /* margin-bottom: 50%; */
  text-transform: uppercase;
  width:400px;
}
.posBlock{
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.posButton {
background-color: white;
  /* display: inline-block; */
  border: none;
 margin: 0px;
 padding: 0px;
  text-decoration: none;
  /* height: 25px; */
  /* overflow: hidden; */
  /* width: 25px; */
  color: black;
   font-family: "Univers LT W01_55 Roman1475956";
  font-size: 2em;
  /* line-height: 0.75; */
  cursor: pointer;
  text-align: center;
  text-anchor: middle;
  /* transition: background 250ms ease-in-out, transform 150ms ease; */
  -webkit-appearance: none;
  -moz-appearance: none;
}

.posButton:hover {
  color: red;
    /* background: white; */
      -webkit-box-shadow: inset 0 0 3px 3px white;
  -moz-box-shadow: inset 0 0 3px 3px white;
  box-shadow: inset 0 0 3px 3px white;
  
}
/* .posButton:focus {
    background: none;
    color: black;
} */

.posButton:focus {
  outline: 0px solid white;
  outline-offset: -4px;

}

.posButton:active {
  transform: scale(0.99);
  color:red;
     /* background: white;
      -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black; */
  
}
#floorPlan {
  display: flex;
  flex-direction: column;
  border: 1px;
  height: 400px;
  width: 400px;
  border-color: black;
  border-style: solid;
}
.left {
  float: left;
  height: 50px;
  width: 200px;
  -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
}
.right {
  float: right;
  height: 50px;
  width: 200px;
  -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
}
#barR {
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
#barL {
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
.chartTitle {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  line-height: 2.5;
  color: red;
  margin-top: 20px;
  border-top: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}
.chartSubTitle {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  color: black;
  margin-top: 0px;
}
.chartSource {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 0.75em;
  color: black;
  margin-top: 0px;
}
.space{
  width:400px;
  height:400px;
  position: relative;
     background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  color: black;
      -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
}

.rowLeft{
   -moz-box-sizing: content-box;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  float: left;
  position: absolute;
  top:0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
  height: 50px;
  width: 200px;
  background-color:white;
    -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
}
.rowLeft.one{
  position: absolute;
  top:50px;
}
.rowLeft.two{
  position: absolute;
  top:100px;
}
.rowLeft.three{
  position: absolute;
  top:150px;
}
.rowLeft.four{
  position: absolute;
  top:300px;
  left: 200px;
}
.rowLeft.five{
  position: absolute;
  top:250px;
}
.rowLeft.six{
  position: absolute;
  top:300px;
}
.rowLeft.seven{
  position: absolute;
  top:350px;
}
.rowLeft.eight{
  position: absolute;
  top:150px;
}
.rowLeft.nine{
  position: absolute;
  top:150px;
  left: 200px;
}
.rowLeft.ten{
  position: absolute;
  top:100px;
  left: 200px;
}
.rowLeft.eleven{
  position: absolute;
  top:100px;
  left: 200px;
}
.rowLeft.twelve{
  position: absolute;
  top:50px;
}
.rowLeft.twelveB{
  position: absolute;
  top:200px;
}
.rowLeft.thirteen{
  position: absolute;
  top:100px;
}
.rowLeft.fourteen{
  position: absolute;
  top:200px;
}
.rowLeft.fourteenB{
  position: absolute;
  top:50px;
}
.rowLeft.fifteen{
  position: absolute;
  top:200px;
}
.rowLeft.fifteenB{
  position: absolute;
  top:50px;
}
.rowLeft.fifteen{
  position: absolute;
  top:150px;
}
.rowLeft.sixteen{
  position: absolute;
  top:200px;
}
.rowLeft.seventeen{
  position: absolute;
  top:50px;
}
.rowLeft.eighteen{
  position: absolute;
  top:0px;
}
.zoukhar{
  color: none;
  /* z-index: 400000; */
      /* -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red; */

}
.spaceLabels{
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  text-align: left;
  margin-top: 20px;

}
.legend{
  display: flex;
  flex-direction:row;
  float: right;

}
.legend.sankey{
  margin-top:20px;
  display: flex;
  flex-direction:row;
  float: right;

}
.legendItem{
   -moz-box-sizing: content-box;
  box-sizing: content-box;
  display: flex;
  justify-content: flex-start;
  margin-top:-5px;
  margin-left: 25px;
  margin-right: -20px;
  height: 50px;
  width:100px;
}
.sankeyLegendItem{
   -moz-box-sizing: content-box;
  box-sizing: content-box;
  display: flex;
  justify-content: flex-start;
  margin-top:-5px;
  margin-left: 25px;
  margin-right: -35px;
  height: 25px;
  width:100px;
}
.slidecontainer {
  margin-top:20px;
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 25%; /* Full-width */
  height: 2px; /* Specified height */
  background: black; /* Grey background */
  outline: none; /* Remove outline */
  border-radius: 12.5;
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: red; /* Green background */
  border-radius: 50%;
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: red; /* Green background */
  border-radius: 50%;
  cursor: pointer; /* Cursor on hover */
}
.in{
  display:inline;
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1em;
  width:auto;
  color: black;
  background: white;
    border-radius: 2px;
  text-align: left;
    padding-left:7px;
  padding-right:7px;
  padding-top:2px;
  padding-bottom:4px;
  /* margin-left: 5px; */
  margin-top: 20px;
  text-transform: uppercase;
        -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black;
}
.depth{
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1em;
  /* color: white;
  background: black; */
  text-align: left;
  margin-top: 20px;
  text-transform: uppercase;
  padding-left:5px;
  padding-right:5px;
  padding-top:2px;
  padding-bottom:4px;
  /* margin-left: 2px;  */
  /* border-radius: 2px; */
}

/* Button styles end */
</style>
