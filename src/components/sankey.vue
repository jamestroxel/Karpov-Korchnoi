<template>
  <div class="item-c-kvk">
    <svg id="sankey" :width="width" :height="height">
      <g>
        <rect
          :key="node.key"
          v-for="node in nodes"
          :x="node.x0"
          :y="node.y0"
          :height="node.y1 - node.y0"
          :width="node.x1 - node.x0"
        ></rect>
      </g>
      <g stroke="black" fill="none">
        <path
          class="links"
          :key="link.key"
          v-for="link in links"
          :d="sankeyLinkHorizontal()(link)"
          :stroke-width="link.width"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import { sankey as d3Sankey, sankeyLinkHorizontal } from "d3-sankey";

import e4 from "./e4.json";
import c5 from "./c5.json";
import Nf3 from "./Nf3.json";
import d6 from "./d6.json";
import d4 from "./d4.json";
import cxd4 from "./cxd4.json";
import Nxd4 from "./Nxd4.json";



export default {
  name: "Sankey",

  data() {
    return {
      d3: d3,
      sankey: d3Sankey,
      sankeyLinkHorizontal: sankeyLinkHorizontal,
      // nodes: nodes,
      // links: links,
      moves: null,
      width: 400,
      height: 400,
    };
  },
  computed: {
    sankeyData() {
      if (this.moves === null) {
        return null;
      }
      const sankeyGenerator = d3Sankey()
        .nodeSort(null)
        .linkSort(null)
        .nodeWidth(2)
        .nodePadding(15)
        .extent([
          [0, 5],
          [this.width, this.height - 5],
        ]);
      // console.log(this.moves);
      return (({ nodes, links }) =>
        sankeyGenerator({
          nodes: nodes.map((d) => Object.assign({}, d)),
          links: links.map((d) => Object.assign({}, d)),
        }))(this.moves[3]);
    },
    nodes() {
      if (this.sankeyData) {
        return this.sankeyData.nodes;
      } else {
        return null;
      }
    },
    links() {
      if (this.sankeyData) {
        return this.sankeyData.links;
      } else {
        return null;
      }
    },
  },
  mounted: function() {
    this.moves = [e4, c5, Nf3, d6, d4, cxd4, Nxd4];
  },
  updated(){
    this.sankeyLabels();
  },
  methods: {
    sankeyLabels() {
      const svg = d3.select("#sankey");
      svg
        .append("g")
        .style("font", "14px 'Univers LT W04_59 Ult Cond'")
        .selectAll("text")
        .data(this.sankeyData.nodes)
        .join("text")
        .attr("class","labels")
        .attr("x", (d) => (d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6))
        .attr("y", (d) => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", (d) => (d.x0 < this.width / 2 ? "start" : "end"))
        .text((d) => d.name);
    },
  },
};
</script>
