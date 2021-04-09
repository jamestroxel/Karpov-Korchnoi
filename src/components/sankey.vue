<template>
  <div class="item-c-kvk">
    <svg id="sankey" :width="width" :height="height" preserveAspectRatio="xMidYMid meet">
      <!-- <g>
        <rect
          :key="node.key"
          v-for="node in nodes"
          :x="node.x0"
          :y="node.y0"
          :height="node.y1 - node.y0"
          :width="node.x1 - node.x0"
          fill="red"
        ></rect>
      </g> -->
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
  props: {
    moveIndex: Number
  },
  data() {
    return {
      d3: d3,
      sankey: d3Sankey,
      sankeyLinkHorizontal: sankeyLinkHorizontal,
      moves: null,
      width: 400,
      height: 400,
      e4: e4,
      c5: c5,
      Nf3: Nf3,
      d6: d6,
      d4: d4,
      cxd4: cxd4,
      Nxd4: Nxd4
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
        }))(this.moves[2]);
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
    updatedIndex(){
      return this.moveIndex;
    }
  },
  mounted: function() {
    this.moves = [e4, c5, Nf3, d6, d4, cxd4, Nxd4];
    // this.moveIndex = moveIndex;
  },
  updated(){
    this.sankeyLabels();
    this.sankeyNodes();
    // this.sankeyData(this.moveIndex)
  },
  methods: {
    sankeyNodes(){
      const svg = d3.select("#sankey");
      svg
        .append("g")
        .selectAll("rect")
        .data(this.sankeyData.nodes)
        .join("rect")
        .attr("x", (d) => d.x0)
        .attr("y", (d) => d.y0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("width", (d) => d.x1 - d.x0)
        .attr("fill",function(d) {
        if (d.name === "e4" && d.node == 0){  
          return "red"}
          if (d.name === "c5" && d.node == 1){  
          return "red"}
            if (d.name === "Nf3" && d.node == 6){  
          return "red"}
        if (d.name === "c5" && d.node == 0){  
          return "red"}
          if (d.name === "Nf3" && d.node == 1){  
          return "red"}
          if (d.name === "d6" && d.node == 6){  
          return "red"}
        if (d.name === "Nf3" && d.node == 0){  
          return "red"}
          if (d.name === "d6" && d.node == 1){  
          return "red"}
          if (d.name === "d4" && d.node == 6){  
          return "red"}
          if (d.name === "d6" && d.node == 0){  
          return "red"}
          if (d.name === "d4" && d.node == 1){  
          return "red"}
          if (d.name === "cxd4" && d.node == 6){  
          return "red"}
        if (d.name === "d4" && d.node == 0){  
          return "red"}
          if (d.name === "cxd4" && d.node == 1){  
          return "red"}
          if (d.name === "Nxd4" && d.node == 6){  
          return "red"}
        if (d.name === "cxd4" && d.node == 0){  
          return "red"}
          if (d.name === "Nxd4" && d.node == 1){  
          return "red"}
          if (d.name === "Nf6" && d.node == 6){  
          return "red"}
          if (d.name === "Nxd4" && d.node == 0){  
          return "red"}
          if (d.name === "Nc3" && d.node == 1){  
          return "red"}
          if (d.name === "g6" && d.node == 6){  
          return "red"}
          if (d.name === "Nf6" && d.node == 0){  
          return "red"}
          if (d.name === "c5" && d.node == 1){  
          return "red"}
          if (d.name === "Nc3" && d.node == 6){  
          return "red"}
          if (d.name === "c5" && d.node == 0){  
          return "red"}
          if (d.name === "Nc3" && d.node == 1){  
          return "red"}
          if (d.name === "g6" && d.node == 6){  
          return "red"}
          if (d.name === "Nc3" && d.node == 0){  
          return "red"}
          if (d.name === "g6" && d.node == 1){  
          return "red"}
          if (d.name === "Be3" && d.node == 6){  
          return "red"}
          if (d.name === "g6" && d.node == 0){  
          return "red"}
          if (d.name === "Be3" && d.node == 1){  
          return "red"}
          if (d.name === "Bg7" && d.node == 6){  
          return "red"}
          if (d.name === "Be3" && d.node == 0){  
          return "red"}
          if (d.name === "Bg7" && d.node == 1){  
          return "red"}
          if (d.name === "f3" && d.node == 6){  
          return "red"}
          if (d.name === "Bg7" && d.node == 0){  
          return "red"}
          if (d.name === "f3" && d.node == 1){  
          return "red"}
          if (d.name === "Nc6" && d.node == 6){  
          return "red"}
          if (d.name === "f3" && d.node == 0){  
          return "red"}
          if (d.name === "Nc6" && d.node == 1){  
          return "red"}
          if (d.name === "Qd2" && d.node == 6){  
          return "red"}
          if (d.name === "Nc6" && d.node == 0){  
          return "red"}
          if (d.name === "c5" && d.node == 1){  
          return "red"}
          if (d.name === "Qd2" && d.node == 6){  
          return "red"}
          if (d.name === "c5" && d.node == 0){  
          return "red"}
          if (d.name === "Qd2" && d.node == 1){  
          return "red"}
          if (d.name === "0-0" && d.node == 6){  
          return "red"}
          if (d.name === "Qd2" && d.node == 0){  
          return "red"}
          if (d.name === "0-0" && d.node == 1){  
          return "red"}
          if (d.name === "Bc4" && d.node == 6){  
          return "red"}
          if (d.name === "0-0" && d.node == 0){  
          return "red"}
          if (d.name === "Bc4" && d.node == 1){  
          return "red"}
          if (d.name === "Bd7" && d.node == 6){  
          return "red"}
          if (d.name === "Bc4" && d.node == 0){  
          return "red"}
          if (d.name === "Bd7" && d.node == 1){  
          return "red"}
          if (d.name === "h4" && d.node == 6){  
          return "red"}
          if (d.name === "Bd7" && d.node == 0){  
          return "red"}
          if (d.name === "h4" && d.node == 1){  
          return "red"}
          if (d.name === "Rc8" && d.node == 6){  
          return "red"}
          if (d.name === "h4" && d.node == 0){  
          return "red"}
          if (d.name === "Rc8" && d.node == 1){  
          return "red"}
          if (d.name === "Bb3" && d.node == 6){  
          return "red"}
          if (d.name === "Rc8" && d.node == 0){  
          return "red"}
          if (d.name === "Bb3" && d.node == 1){  
          return "red"}
          if (d.name === "Ne5" && d.node == 6){  
          return "red"}
          if (d.name === "Bb3" && d.node == 0){  
          return "red"}
          if (d.name === "Ne5" && d.node == 1){  
          return "red"}
          if (d.name === "0-0-0" && d.node == 6){  
          return "red"}
          if (d.name === "Ne5" && d.node == 0){  
          return "red"}
          if (d.name === "0-0-0" && d.node == 1){  
          return "red"}
          if (d.name === "Nc4" && d.node == 6){  
          return "red"}
          if (d.name === "0-0-0" && d.node == 0){  
          return "red"}
          if (d.name === "Nc4" && d.node == 1){  
          return "red"}
          if (d.name === "Bxc4" && d.node == 6){  
          return "red"}
          if (d.name === "Nc4" && d.node == 0){  
          return "red"}
          if (d.name === "Bxc4" && d.node == 1){  
          return "red"}
          if (d.name === "Rxc4" && d.node == 6){  
          return "red"}
          if (d.name === "Bxc4" && d.node == 0){  
          return "red"}
          if (d.name === "Rxc4" && d.node == 1){  
          return "red"}
          if (d.name === "h5" && d.node == 6){  
          return "red"}
          if (d.name === "Rxc4" && d.node == 0){  
          return "red"}
          if (d.name === "h5" && d.node == 1){  
          return "red"}
          if (d.name === "Nxh5" && d.node == 6){  
          return "red"}
          if (d.name === "h5" && d.node == 0){  
          return "red"}
          if (d.name === "Nxh5" && d.node == 1){  
          return "red"}
          if (d.name === "g4" && d.node == 6){  
          return "red"}
          if (d.name === "Nxh5" && d.node == 0){  
          return "red"}
          if (d.name === "g4" && d.node == 1){  
          return "red"}
          if (d.name === "Nf6" && d.node == 6){  
          return "red"}
          if (d.name === "g4" && d.node == 0){  
          return "red"}
          if (d.name === "Nf6" && d.node == 1){  
          return "red"}
          if (d.name === "Nde2" && d.node == 6){  
          return "red"}
          if (d.name === "Nf6" && d.node == 0){  
          return "red"}
          if (d.name === "Nde2" && d.node == 1){  
          return "red"}
          if (d.name === "Qa5" && d.node == 6){  
          return "red"}
          if (d.name === "Nde2" && d.node == 0){  
          return "red"}
          if (d.name === "Qa5" && d.node == 1){  
          return "red"}
          if (d.name === "Bh6" && d.node == 6){  
          return "red"}
          if (d.name === "Qa5" && d.node == 0){  
          return "red"}
          if (d.name === "Bh6" && d.node == 1){  
          return "red"}
          if (d.name === "Bxh6" && d.node == 6){  
          return "red"}
          if (d.name === "Bh6" && d.node == 0){  
          return "red"}
          if (d.name === "Bxh6" && d.node == 1){  
          return "red"}
          if (d.name === "Qxh6" && d.node == 6){  
          return "red"}
          if (d.name === "Bxh6" && d.node == 0){  
          return "red"}
          if (d.name === "Qxh6" && d.node == 1){  
          return "red"}
          if (d.name === "Rfc8" && d.node == 6){  
          return "red"}
          if (d.name === "Qxh6" && d.node == 0){  
          return "red"}
          if (d.name === "Rfc8" && d.node == 1){  
          return "red"}
          if (d.name === "Rd3" && d.node == 6){  
          return "red"}
          if (d.name === "Rfc8" && d.node == 0){  
          return "red"}
           if (d.name === "Rd3" && d.node == 1){  
          return "red"}
           if (d.name === "R4c5" && d.node == 6){  
          return "red"}
          if (d.name === "Rd3" && d.node == 0){  
          return "red"}
          if (d.name === "R4c5" && d.node == 1){  
          return "red"}
          if (d.name === "g5" && d.node == 6){  
          return "red"}
          if (d.name === "R4c5" && d.node == 0){  
          return "red"}
           if (d.name === "g5" && d.node == 1){  
          return "red"}
           if (d.name === "Rxg5" && d.node == 6){  
          return "red"}
          if (d.name === "g5" && d.node == 0){  
          return "red"}
          if (d.name === "Rxg5" && d.node == 1){  
          return "red"}
          if (d.name === "Rd5" && d.node == 6){  
          return "red"}
          if (d.name === "Rxg5" && d.node == 0){  
          return "red"}
          if (d.name === "Rd5" && d.node == 1){  
          return "red"}
          if (d.name === "Rxd5" && d.node == 6){  
          return "red"}
          if (d.name === "Rd5" && d.node == 0){  
          return "red"}
          if (d.name === "Rxd5" && d.node == 1){  
          return "red"}
          if (d.name === "Nxd5" && d.node == 6){  
          return "red"}
          if (d.name === "Rd5" && d.node == 0){  
          return "red"}
          if (d.name === "Nxd5" && d.node == 1){  
          return "red"}
           if (d.name === "Re8" && d.node == 6){  
          return "red"}
          if (d.name === "Nxd5" && d.node == 0){  
          return "red"}
          if (d.name === "Re8" && d.node == 1){  
          return "red"}
          if (d.name === "Nef4" && d.node == 6){  
          return "red"}
          if (d.name === "Re8" && d.node == 0){  
          return "red"}
          if (d.name === "Nef4" && d.node == 1){  
          return "red"}
          if (d.name === "Bc6" && d.node == 6){  
          return "red"}
          if (d.name === "Nef4" && d.node == 0){  
          return "red"}
          if (d.name === "Bc6" && d.node == 1){  
          return "red"}
          if (d.name === "e5" && d.node == 6){  
          return "red"}
          if (d.name === "Bc6" && d.node == 0){  
          return "red"}
          if (d.name === "e5" && d.node == 1){  
          return "red"}
          if (d.name === "Bxd5" && d.node == 6){  
          return "red"}
          if (d.name === "e5" && d.node == 0){  
          return "red"}
          if (d.name === "Bxd5" && d.node == 1){  
          return "red"}
          if (d.name === "exf6" && d.node == 6){  
          return "red"}
          if (d.name === "Bxd5" && d.node == 0){  
          return "red"}
          if (d.name === "exf6" && d.node == 1){  
          return "red"}
          if (d.name === "Qxh7+" && d.node == 6){  
          return "red"}
          if (d.name === "exf6" && d.node == 0){  
          return "red"}
          if (d.name === "Qxf7+" && d.node == 1){  
          return "red"}
          if (d.name === "Kf8" && d.node == 6){  
          return "red"}
          if (d.name === "Qxh7+" && d.node == 0){  
          return "red"}
          if (d.name === "Kf8" && d.node == 1){  
          return "red"}
          if (d.name === "Qh8+" && d.node == 6){  
          return "red"}
          if (d.name === "Kf8" && d.node == 0){  
          return "red"}
          if (d.name === "Qh8+" && d.node == 1){  
          return "red"}
          if (d.name === "Qh8+" && d.node == 0){  
          return "red"
        } else {return 'black'}});
    },
    sankeyLabels() {
      const svg = d3.select("#sankey");
      svg
        .append("g")
        .style("font", "14px 'Univers LT W04_59 Ult Cond'")
        .selectAll("text")
        .data(this.sankeyData.nodes)
        .join("text")
        // .attr("fill",function(d) {
        // if (d.name === "e4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "c5" && d.node == 1){  
        //   return "red"}
        //     if (d.name === "Nf3" && d.node == 6){  
        //   return "red"}
        // if (d.name === "c5" && d.node == 0){  
        //   return "red"}
        // if (d.name === "Nf3" && d.node == 0){  
        //   return "red"}
        // if (d.name === "d6" && d.node == 0){  
        //   return "red"}
        // if (d.name === "cxd4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nxd4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nf6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nc3" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "g6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Be3" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bg7" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "f3" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nc6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Qd2" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "0-0" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bc4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bd7" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "h4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rc8" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bb3" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Ne5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "0-0-0" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nc4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bxc4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rxc4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "h5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nxh5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "g4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nf6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nde2" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Qa5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bh6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bxh6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Qxh6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rfc8" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rd3" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "R4c5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "g5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rxg5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rd5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Rxd5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nxd5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Re8" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Nef4" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bc6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "e5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Bxd5" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "exf6" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Qxh7+" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Kf8" && d.node == 0){  
        //   return "red"}
        //   if (d.name === "Qh8+" && d.node == 0){  
        //   return "red"
        // } else {return 'black'}})
        .attr("x", (d) => (d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6))
        .attr("y", (d) => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", (d) => (d.x0 < this.width / 2 ? "start" : "end"))
        .text((d) => d.name);
    },
    nodeFill(d) {
        if (d.name === "e4" && d.node == 0){  
          return "red"}
          if (d.name === "c5" && d.node == 1){  
          return "red"}
            if (d.name === "Nf3" && d.node == 6){  
          return "red"}
        if (d.name === "c5" && d.node == 0){  
          return "red"}
        if (d.name === "Nf3" && d.node == 0){  
          return "red"}
        if (d.name === "d6" && d.node == 0){  
          return "red"}
        if (d.name === "cxd4" && d.node == 0){  
          return "red"}
          if (d.name === "Nxd4" && d.node == 0){  
          return "red"}
          if (d.name === "Nf6" && d.node == 0){  
          return "red"}
          if (d.name === "Nc3" && d.node == 0){  
          return "red"}
          if (d.name === "g6" && d.node == 0){  
          return "red"}
          if (d.name === "Be3" && d.node == 0){  
          return "red"}
          if (d.name === "Bg7" && d.node == 0){  
          return "red"}
          if (d.name === "f3" && d.node == 0){  
          return "red"}
          if (d.name === "Nc6" && d.node == 0){  
          return "red"}
          if (d.name === "Qd2" && d.node == 0){  
          return "red"}
          if (d.name === "0-0" && d.node == 0){  
          return "red"}
          if (d.name === "Bc4" && d.node == 0){  
          return "red"}
          if (d.name === "Bd7" && d.node == 0){  
          return "red"}
          if (d.name === "h4" && d.node == 0){  
          return "red"}
          if (d.name === "Rc8" && d.node == 0){  
          return "red"}
          if (d.name === "Bb3" && d.node == 0){  
          return "red"}
          if (d.name === "Ne5" && d.node == 0){  
          return "red"}
          if (d.name === "0-0-0" && d.node == 0){  
          return "red"}
          if (d.name === "Nc4" && d.node == 0){  
          return "red"}
          if (d.name === "Bxc4" && d.node == 0){  
          return "red"}
          if (d.name === "Rxc4" && d.node == 0){  
          return "red"}
          if (d.name === "h5" && d.node == 0){  
          return "red"}
          if (d.name === "Nxh5" && d.node == 0){  
          return "red"}
          if (d.name === "g4" && d.node == 0){  
          return "red"}
          if (d.name === "Nf6" && d.node == 0){  
          return "red"}
          if (d.name === "Nde2" && d.node == 0){  
          return "red"}
          if (d.name === "Qa5" && d.node == 0){  
          return "red"}
          if (d.name === "Bh6" && d.node == 0){  
          return "red"}
          if (d.name === "Bxh6" && d.node == 0){  
          return "red"}
          if (d.name === "Qxh6" && d.node == 0){  
          return "red"}
          if (d.name === "Rfc8" && d.node == 0){  
          return "red"}
          if (d.name === "Rd3" && d.node == 0){  
          return "red"}
          if (d.name === "R4c5" && d.node == 0){  
          return "red"}
          if (d.name === "g5" && d.node == 0){  
          return "red"}
          if (d.name === "Rxg5" && d.node == 0){  
          return "red"}
          if (d.name === "Rd5" && d.node == 0){  
          return "red"}
          if (d.name === "Rxd5" && d.node == 0){  
          return "red"}
          if (d.name === "Nxd5" && d.node == 0){  
          return "red"}
          if (d.name === "Re8" && d.node == 0){  
          return "red"}
          if (d.name === "Nef4" && d.node == 0){  
          return "red"}
          if (d.name === "Bc6" && d.node == 0){  
          return "red"}
          if (d.name === "e5" && d.node == 0){  
          return "red"}
          if (d.name === "Bxd5" && d.node == 0){  
          return "red"}
          if (d.name === "exf6" && d.node == 0){  
          return "red"}
          if (d.name === "Qxh7+" && d.node == 0){  
          return "red"}
          if (d.name === "Kf8" && d.node == 0){  
          return "red"}
          if (d.name === "Qh8+" && d.node == 0){  
          return "red"
        } else {return 'black'}

    }
  },
};
</script>
