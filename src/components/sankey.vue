<template>
<div id="sankey" class="item-c">
  <svg :width='width' :height='height' :nodes="nodes" :links="links">
    <!-- <g>
      <rect v-bind:x="node in nodes" v-bind:y="node in nodes"></rect>
    </g> -->
    <g fill="none">
      <path v-bind:d="sankeyLinkHorizontal"></path>
    </g>
  </svg>
</div>
</template>

<script>
// import * as d3 from "d3";
import {sankey as sankey, sankeyLinkHorizontal as sankeyLinkHorizontal } from 'd3-sankey';

import json from './sankey.json'

// const height = 400;
// const width = 400;

export default {
  name: 'Sankey',
  // props: {
  //   data: Object
  // },
  data(){
    return {
      json: null,
      width: 400,
      height: 400,

    }
  },
  mounted: function() {
    //  d3.json("./sankey.json").then((data) => {
    // console.log(data);
    //     });
    console.log('***', json);
    this.data = json;

    },
    
    
}
      //  d3.json("/sankey.json").then((error,data) => {
//         if (error) throw error;
//         that.json = data;
//       console.log(sankey(that.json));
//       console.log(that.json);
//       });
//   }
// }


// function draw(data) {
//   const svg = d3
//     .select("#sankey")
//     .append("svg")
//     .attr("viewBox", [0, 0, width, height])
//     .attr("width", width)
//     .attr("height", height);

//   svg
//     .append("g")
//     .selectAll("rect")
//     .data(data.nodes)
//     .join("rect")
//     .attr("x", (d) => d.x0)
//     .attr("y", (d) => d.y0)
//     .attr("height", (d) => d.y1 - d.y0)
//     .attr("width", (d) => d.x1 - d.x0);
//   // .append("title")
//   // .text((d) => `${d.name}\n${d.value.toLocaleString()}`);
//   svg
//     .append("g")
//     .attr("fill", "none")
//     .selectAll("g")
//     .data(data.links)
//     .join("path")
//     .attr("d", d3.sankeyLinkHorizontal())
//     .attr("stroke", "black")
//     .attr("opacity", function (d) {
//       if (data.nodes[0] === 0) {
//         return 1;
//       } else {
//         return 0.1;
//       }
//     })
//     .attr("stroke-width", (d) => d.width)
//     .style("mix-blend-mode", "multiply");
//   // .append("title")
//   // .text((d) => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);

//   svg
//     .append("g")
//     .style("font", "14px 'Univers LT W04_59 Ult Cond'")
//     .selectAll("text")
//     .data(data.nodes)
//     .join("text")
//     .attr("x", (d) => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
//     .attr("y", (d) => (d.y1 + d.y0) / 2)
//     .attr("dy", "0.35em")
//     .attr("text-anchor", (d) => (d.x0 < width / 2 ? "start" : "end"))
//     .text((d) => d.name);

// }
// function sankey(data) {
//   const sankeyGenerator = d3
//     .sankey()
//     .nodeSort(null)
//     .linkSort(null)
//     .nodeWidth(4)
//     .nodePadding(30)
//     .extent([
//       [0, 5],
//       [width, height - 5],
//     ]);
//   return (({ nodes, links }) =>
//     sankeyGenerator({
//       nodes: nodes.map((d) => Object.assign({}, d)),
//       links: links.map((d) => Object.assign({}, d)),
//     }))(data);
// }

// function loadData() {
//   d3.json("./sankey.json").then((data) => {
//     console.log(data);

//     console.log(sankey(data));
//     draw(sankey(data));
//   });
// }
// // loadData();

</script>
