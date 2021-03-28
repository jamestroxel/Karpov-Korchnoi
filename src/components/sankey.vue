<template>
<div id="sankey" class="item-c">
  <svg :width='width' :height='height' :nodes="nodes" :links="links">
    <g>
      <!-- <rect v-for='d' -->
    </g>
  </svg>
</div>
</template>

<script>
import * as d3 from "d3";
// import {sankey as d3Sankey, sankeyLinkHorizontal} from 'd3-sankey';

// import json from './sankey.json'

// const height = 400;
// const width = 400;

export default {
  name: 'Sankey',
  data(){
    return {
      data: null,
      width: 400,
      height: 400,
      links:[]
    }
  },
  mounted: function() {
     d3.json("./sankey.json").then((data) => {
    console.log(data);
        });
    },
    // computed: {
      
      
    //   // once we have the CSV loaded, the "root" will be calculated
      
    //   root: function() {
        
    //     var that = this;

    //     if (this.csv) {
    //       var stratify = d3.stratify().parentId(function(d) {
    //         return d.id.substring(0, d.id.lastIndexOf("."));
    //       });

    //       // attach the tree to the Vue data object
    //       return this.tree(
    //         stratify(that.csv).sort(function(a, b) {
    //           return a.height - b.height || a.id.localeCompare(b.id);
    //         })
    //       );
    //     }
    //   },
      
    //   // the "tree" is also a computed property so that it is always up to date when the width and height settings change
      
    //   tree: function() {
    //     return d3
    //       .cluster()
    //       .size([this.settings.height, this.settings.width - 160]);
    //   },
      
    //     // Instead of enter, update, exit, we mainly use computed properties and instead of "d3.data()" we can use array.map to create objects that hold class names, styles, and other attributes for each datum
      
    //   nodes: function() {
    //     var that = this;
    //     if (this.root) {
    //       return this.root.descendants().map(function(d) {
    //         return {
    //           id: d.id,
    //           r: 2.5,
    //           className: "node" +
    //             (d.children ? " node--internal" : " node--leaf"),
    //           text: d.id.substring(d.id.lastIndexOf(".") + 1),
    //           highlight: d.id.toLowerCase().indexOf(that.search.toLowerCase()) != -1 && that.search != "",
    //           style: {
    //             transform: "translate(" + d.y + "px," + d.x + "px)"
    //           },
    //           textpos: {
    //             x: d.children ? -8 : 8,
    //             y: 3
    //           },
    //           textStyle: {
    //             textAnchor: d.children ? "end" : "start"
    //           }
    //         };
    //       });
    //     }
    //   },
      
    //     // Instead of enter, update, exit, we mainly use computed properties and instead of "d3.data()" we can use array.map to create objects that hold class names, styles, and other attributes for each datum
      
    //   links: function() {
    //     var that = this;

    //     if (this.root) {

    //       // here we’ll calculate the "d" attribute for each path that is then used in the template where we use "v-for" to loop through all of the links to create <path> elements

    //       return this.root.descendants().slice(1).map(function(d) {
    //         return {
    //           id: d.id,
    //           d: "M" + d.y + "," + d.x + "C" + (d.parent.y + 100) + "," + d.x + " " + (d.parent.y + 100) + "," + d.parent.x + " " + d.parent.y + "," + d.parent.x,
             
    //           // here we could of course calculate colors depending on data but for now all links share the same color from the settings object that we can manipulate using UI controls and v-model
              
    //           style: {
    //             stroke: that.settings.strokeColor
    //           }
    //         };
    //       });
    //     }
    //   }
    // },
    // methods: {
		// 	add: function () {
    //    this.json.push({
    //      id: "flare.physics.Dummy",
    //      value: 0
    //    })
    //   },
    //   select: function(index, node) {
    //     this.selected = index;
    //   }
    // }
	}


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
