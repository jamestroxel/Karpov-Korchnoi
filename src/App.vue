<template>
  <nav class="navContainer">
    <div class="nav1"></div>
    <router-link to="/prologue" class="prologue">Prologue</router-link>
    <router-link to="/kvk" class="KvK">Karpov vs. Korchnoi</router-link>
    <router-link to="/bibliography" class="play">Bibliography</router-link>
  </nav>
  <div class="titleContainer">
    <a href="https://github.com/jamestroxel/Karpov-Korchnoi" target="_blank" class="author">James Troxel, 2021</a>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: "App",
  components: {
  }
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
  background-color: white;
  /* mix-blend-mode: difference; */
  overflow-y: scroll;
}
.bold{
  font-family: "Univers LT W01_65 Bold1475968";
}
.item-a-logo {
  font-family: "Univers LT W01_55 Roman1475956";
  display:flex;
  justify-content: center;
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
  height: 100%;
  /* margin-top: 25%; */
  margin-top:-35px;
}
.title {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  /* line-height: 1.5; */
  text-align: start;
  display: block;
  grid-column-start:2;
  grid-column-end: 2;
  grid-row:5;
  /* height: auto; */
  /* height: 100%; */
  margin-top: 12.5px;
  margin-bottom: 0px;
  pointer-events: none;
}
.subTitle {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  /* line-height: 1.5; */
  text-align: start;
  display: block;
  grid-column-start:4;
  grid-column-end: 8;
  grid-row:5;
  /* height: auto; */
  /* height: 100%; */
  margin-top: 12.5px;
  margin-bottom: 0px;
  pointer-events: none;
}
.boilerplate {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  /* line-height: 1.5; */
  /* text-align: start; */
  display: block;
  grid-column-start:4;
  grid-column-end: 10;
  grid-row:5;
  /* height: auto; */
  /* height: 100%; */
  margin-top: 12.5px;
  margin-bottom: 0px;
  pointer-events: none;
}
.logo-container {
  font-family: "Univers LT W01_55 Roman1475956";
  display:flex;
  flex-direction: column;
  justify-content: left;
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 100%;
  height: 100%;
  /* margin-top: 25%; */
  margin-top:50px;
}

.titleContainer {
  mix-blend-mode: difference;
  padding: 0px;
  margin:0px;
  position: fixed;
  display: flex;
  height: 100%;
  /* width:50px; */
  align-content: center;
  align-items: center;
  justify-content: space-around;
  color: white;
  /* background-color: black; */
  /* pointer-events: none; */
   z-index: 1;
}
/* a {
  color: white;
} */
.author {
  mix-blend-mode: difference;
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 1em;
  text-align: center;
  margin-left: 12.5px;
  margin-right:-50px;
  margin-bottom: -110px;
  padding: 0px;
  color:white;
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
  font-family: "Univers LT W01_55 Roman1475956";
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
a {color:inherit;}         
a:visited {color:inherit;} 
a:hover {color:red;}   
a:active {color:red;}    
.KvK {
  font-family: "Univers LT W01_55 Roman1475956";
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
  background-color: white;
  width: 100%;
  height: 100vh;
  margin-bottom:0px;
  display: grid;
  grid-template-columns: 50px 1fr 50px minmax(325px, 400px) 50px 200px 200px 50px 400px 50px 1fr 50px;
  grid-template-rows: 50px 2fr 12.5px 75px 50px;
  overflow:hidden;
}
.teaser-container {
  /* mix-blend-mode: difference; */
  width: 100%;
  height: 100vh;
  display: grid;
  color: white;
  padding-top:50px;
  background-color: black;
  grid-template-columns: 50px 1fr 50px minmax(325px, 400px) 50px 200px 200px 50px 400px 50px 1fr 50px;
  grid-template-rows: 50px 2fr 12.5px 75px 50px;
  overflow:hidden;
  /* z-index: 1; */
}
.kvk-container {
  width: 100%;
  height: 100vh;
  margin-bottom:0px;
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
  padding-top: 4px;
  margin-top: 10px;
  margin-left: 0px;
 padding-bottom: 5px;
 padding-right: 5px;
 padding-left: 5px;
   text-decoration: none;
   border-top: 1px;
  border-bottom: 1px;
  border-left: 1px;
  border-right: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 2px 2px 2px 2px;
   -webkit-animation: slideright .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: slideright .5s; /* Firefox < 16 */
        -ms-animation: slideright .5s; /* Internet Explorer */
         -o-animation: slideright .5s; /* Opera < 12.1 */
            animation: slideright .5s;
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
  font-family: "Univers LT W01_55 Roman1475956";
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
.kvkHeading1 {
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 3.35em;
  margin-top: 50px;
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
.kvkHeading2 {
  font-family: "Univers LT W01_65 Bold1475968";
  font-size: 2em;
  margin-top: 50px;
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
  display:block;
  width: 100%;
  /* padding-bottom:50px; */
  position:relative;
  grid-column: 9 / 12;
   grid-row-start: 2;
  grid-row-end: 5;
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
  left: -1px;
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
.right-image-title {
  width: 100%;
  height: 100vh;
  object-fit:cover;
  /* width: 100%; */
  position:absolute;
    margin:auto;
    top:0;right:0;bottom:100;left:0;
  /* bottom:50px; */
  grid-column: 9 / 13;
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
.kvkSubHead {
  font-family: "Univers LT W01_65 Bold1475968";
  font-size: 1.5em;
  text-align: start;
  line-height: 1.5;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 25px;
  overflow-y: scroll;
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
  font-size: 1.5em;
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
  font-size: 1.5em;
  line-height: 1.5;
  text-align: start;
  /* min-height: 0; */
  height: auto;
  /* height: 100%; */
  margin-top: 0px;
}
.teaserHead:before {
  font-family: "Univers LT W01_55 Roman1475956";
  font-size: 3.5em;
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
  display: block;
  /* min-height: 0; */
  /* height: auto; */
  /* height: 100%; */
  margin-top: 0px;
  margin-bottom: 25px;
  pointer-events: none;
  widows: 3;
}

.story:last-child {
  font-family: "Univers LT W01_55 Roman1475956";
  text-align: start;
  position:relative;
  height: 100%;
  margin-top: 0px;
  widows: 3;
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
.item-a-teaser {
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
  border-color: white;
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
  grid-row-end: 5;
  /* max-width:400px; */
  width: 100%;
  /* min-height: 0; */
  padding-right: 10px;
  padding-top: 25px;
  overflow-y: scroll;
  /* bottom: 150px; */
  /* height: 100%; */
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
       -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
       -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
.paraB{
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
line-height:1;
  text-align: center;
  height:21px;
  padding-left:17.5px;
  padding-right:0px;
  margin:0px;
  margin-top:7px;
  background: white;
  text-transform: uppercase;
    border: 1px;
  border-right: 0px;
   border-color: black;
  border-style: solid;
   border-radius: 40px 0px 0px 40px;
  float:right;
  position:absolute;
  right:0px;
}
.B{
  height:25px;
  float:right;
  position:absolute;
  right:0px;
}
.paraW{
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  line-height:1;
  text-align: left;
  height:21px;
  width:59.141px;
  padding-left:0px;
  padding-right:17.5px;
  margin:0px;
 margin-top:7px;
  background: white;
  text-transform: uppercase;
  border: 1px;
  border-left: 0px;
   border-color: black;
  border-style: solid;
   border-radius: 0px 40px 40px 0px;
  float:right;
  position:absolute;
  left:0px;
}
.W{
  height:25px;
  float:right;
  position:absolute;
  left:0px;
}
.paraMoveCount{
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
}
.moveCount{
  display:flex;
  flex-direction: row;
  position: relative;
  bottom: 29px;
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

.bulb{
  height:30px;
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
.paraStats{
  display:flex;
  flex-direction: row;
  position: relative;
  /* bottom: 51px; */
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
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
  transition:ease-in-out;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
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
  color: white;
  line-height:1;
  text-align: center;
  height:20px;
  padding-bottom: 1px;
  padding-left:17.5px;
  padding-right:17.5px;
  margin:0px;
  margin-top:-1px;
  background: black;
  text-transform: uppercase;
  border: 1px;
   border-color: black;
  border-style: solid;
   border-radius: 40px 40px 40px 40px;
}

.paraCount{
 font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1.25em;
  text-align: center;
  height:15px;
  padding-bottom: 5px;
  padding-left:10px;
  padding-right:10px;
  margin-top:31px;
  background: white;
}
.paraScoreB{
 font-family: "Univers LT W04_59 Ult Cond";
  position: absolute;
 right: 0px;
  font-size: 1.25em;
  text-align: right;
  height:15px;
  padding-bottom: 5px;
  padding-left:10px;
  padding-right:0px;
  margin-top:31px;
  background: white;
  float: right;
}
.paraScoreW{
 font-family: "Univers LT W04_59 Ult Cond";
 position: absolute;
 left: 0px;
  font-size: 1.25em;
  text-align: left;
  height:15px;
  padding-bottom: 5px;
  padding-left:0px;
  padding-right:10px;
  margin-top:31px;
  background: white;
  float: left;
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
  opacity:1;
  border-radius: 50px 0px 0px 50px;
  justify-content: center;
  color: black;
  padding-top:2.5px;
  margin-top: 20;
  margin-right: 0px;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
    -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
     -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
     -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
.routerButton {

  /* display: inline-block; */
  border: none;
    /* background: black; */
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

.routerButton:hover {
  color: black;
    background: white;
      -webkit-box-shadow: inset 0 0 3px 3px red;
  -moz-box-shadow: inset 0 0 3px 3px red;
  box-shadow: inset 0 0 3px 3px red;
  
}
/* .routerButton:focus {
    background: none;
    color: black;
} */

.routerButton:focus {
  outline: 0px solid white;
  outline-offset: -4px;

}

.routerButton:active {
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
  margin-left: 4px;
  width: 400px;
  justify-content: center;
      -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
   -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .5s; /* Firefox < 16 */
        -ms-animation: fadein .5s; /* Internet Explorer */
         -o-animation: fadein .5s; /* Opera < 12.1 */
            animation: fadein .5s;
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
  height:100%;
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
  margin-top:19px;
  margin-bottom: 25px;
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 45%; /* Full-width */
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
  color: white;
  background: black;
    border-radius: 2px;
  text-align: left;
    padding-left:7px;
  padding-right:7px;
  padding-top:2px;
  padding-bottom:4px;
  /* margin-left: 5px; */
  margin-top: 20px;
  text-transform: uppercase;
        /* -webkit-box-shadow: inset 0 0 3px 3px black;
  -moz-box-shadow: inset 0 0 3px 3px black;
  box-shadow: inset 0 0 3px 3px black; */
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
.scroll{
  font-family: "Univers LT W04_59 Ult Cond";
  font-size: 1em;
  grid-column: 4;
  grid-column-end: 4;
  grid-row: 4;
  position: absolute;
  top: 50px;
  padding-left: 5px;
  padding-right:5px;
  padding-top:2px;
  padding-bottom: 2px;
  margin: 0px;
  margin-left:-5px;
  height: 20px;
  color: black;
  background: white;
  border: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 0px 0px 2px 2px;
   -webkit-animation: slidedown .5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: slidedown .5s; /* Firefox < 16 */
        -ms-animation: slidedown .5s; /* Internet Explorer */
         -o-animation: slidedown .5s; /* Opera < 12.1 */
            animation: slidedown .5s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}


@keyframes slidedown {
    from { top: 0; }
    to   { top: 50; }
}

/* Firefox < 16 */
@-moz-keyframes slidedown {
    from { top: 0; }
    to   { top: 50; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes slidedown {
    from { top: 0; }
    to   { top: 50; }
}

/* Internet Explorer */
@-ms-keyframes slidedown {
    from { top: 0; }
    to   { top: 50; }
}

@keyframes slideright {
    from { left: 0; }
    to   { left: 50; }
}

/* Firefox < 16 */
@-moz-keyframes slideright {
    from { left: 0; }
    to   { left: 50; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes slideright {
    from { left: 0; }
    to   { left: 50; }
}

/* Internet Explorer */
@-ms-keyframes slideright {
    from { left: 0; }
    to   { left: 50; }
}
</style>
