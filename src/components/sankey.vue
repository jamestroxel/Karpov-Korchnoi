<template>
  <div v-if="moveIndex > 4 && moveIndex < 26" class="item-c-kvk">
      <svg
        id="sankey"
        :width="width"
        :height="height"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <rect
            class="nodes"
            :key="node.key"
            v-for="node in nodes"
            :x="node.x0"
            :y="node.y0"
            :height="node.y1 - node.y0"
            :width="node.x1 - node.x0"
            :fill="sankeyNodes()"
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
        <g>
          <text
            class="name"
            style="font:14px 'Univers LT W04_59 Ult Cond'"
            :fill="black"
            :key="label.key"
            v-for="label in nodes"
            :x="xLabel(label)"
            :y="yLabel(label)"
            :text-anchor="labelAnchor(label)"
            dy="0.35em"
          >
            {{ label.name }}
          </text>
          <text
            class="name"
            style="font:14px 'Univers LT W04_59 Ult Cond'"
            fill="black"
            opacity=".2"
            x="0"
            y="395"
            text-anchor="left"
            dy="0.35em"
          >
            1. Current move
          </text>
          <text
            class="name"
            style="font:14px 'Univers LT W04_59 Ult Cond'"
            fill="black"
            x="207"
            y="395"
            opacity=".2"
            text-anchor="left"
            dy="0.35em"
          >
            2.
          </text>
          <text
            class="name"
            style="font:14px 'Univers LT W04_59 Ult Cond'"
            fill="black"
            x="387"
            y="395"
            opacity=".2"
            text-anchor="left"
            dy="0.35em"
          >
            3.
          </text>
        </g>
      </svg>
    <div>
      <div class="legend sankey">
        <svg class="sankeyLegendItem">
          <text style="font:14px 'Univers LT W04_59 Ult Cond'"
             fill="black" x="10" y="12" height="15">Chosen moves</text>
          <rect x="0" y="0" height="14" width="2" fill="red"></rect>
        </svg>
      </div>
    </div>
    <div>
      <p class="chartTitle">Decision flow, 3 moves deep</p>
      <p class="chartSubTitle">
        Distribution of the top five responses to the current move, and of the top
        five reponses to each of those.
      </p>
      <p class="chartSource">Source: Chessbase</p>
    </div>
  </div>
  <div v-if="moveIndex > 41 && moveIndex < 45" class="item-c-kvk">
    <Cors v-if="moveIndex > 41 && moveIndex < 45" :moveIndex="moveIndex"></Cors>
  </div>
</template>

<script>
import Cors from "./Correlations.vue";
import * as d3 from "d3";
import { sankey as d3Sankey, sankeyLinkHorizontal} from "d3-sankey";

import e4 from "./e4.json";
import c5 from "./c5.json";
import Nf3 from "./Nf3.json";
import d6 from "./d6.json";
import d4 from "./d4.json";
import cxd4 from "./cxd4.json";
import Nxd4 from "./Nxd4.json";
import Nf6 from "./Nf6.json";
import Nc3 from "./Nc3.json";
import g6 from "./g6.json";
import Be3 from "./Be3.json";
import Bg7 from "./Bg7.json";
import f3 from "./f3.json";
import Nc6 from "./Nc6.json";
import Qd2 from "./Qd2.json";
import castle1 from "./0-0.json";
import Bc4 from "./Bc4.json";
import Bd7 from "./Bd7.json";
import h4 from "./h4.json";
import Rc8 from "./Rc8.json";
import Bb3 from "./Bb3.json";


export default {
  name: "Sankey",
  props: {
    moveIndex: Number,
  },
  components: {
    Cors,
  },
  data() {
    return {
      d3: d3,
      sankey: d3Sankey,
      sankeyLinkHorizontal: sankeyLinkHorizontal,
      moves: null,
      width: 400,
      height: 400,
      marginTop: 25,
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
          [this.width, this.height - this.marginTop],
        ]);
      // console.log(this.moves);
      return (({ nodes, links }) =>
        sankeyGenerator({
          nodes: nodes.map((d) => Object.assign({}, d)),
          links: links.map((d) => Object.assign({}, d)),
        }))(this.moves[this.moveIndex]);
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
    this.moves = [
      e4,
      e4,
      e4,
      e4,
      e4,
      e4,
      c5,
      Nf3,
      d6,
      d4,
      cxd4,
      Nxd4,
      Nf6,
      Nc3,
      g6,
      Be3,
      Bg7,
      f3,
      Nc6,
      Qd2,
      castle1,
      Bc4,
      Bd7,
      h4,
      Rc8,
      Bb3
    ];
    this.sankey = this.sankeyData;
  },
  updated() {
    // this.sankeyLabels();
    // this.sankeyNodes();
    //  this.sankeyData();
    // this.sankeyData(this.moveIndex)
  },
  methods: {
    xLabel(d) {
      return d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6;
    },
    yLabel(d) {
      return (d.y1 + d.y0) / 2;
    },
    labelAnchor(d) {
      return d.x0 < this.width / 2 ? "start" : "end";
    },
    sankeyNodes() {
      const svg = d3.select("#sankey");
      svg
        .selectAll("rect")
        .data(this.sankeyData.nodes)
        .attr("fill", function(d) {
          if (d.name === "e4" && d.node == 0) {
            return "red";
          }
          if (d.name === "c5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nf3" && d.node == 6) {
            return "red";
          }
          if (d.name === "c5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nf3" && d.node == 1) {
            return "red";
          }
          if (d.name === "d6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nf3" && d.node == 0) {
            return "red";
          }
          if (d.name === "d6" && d.node == 1) {
            return "red";
          }
          if (d.name === "d4" && d.node == 6) {
            return "red";
          }
          if (d.name === "d6" && d.node == 0) {
            return "red";
          }
          if (d.name === "d4" && d.node == 1) {
            return "red";
          }
          if (d.name === "cxd4" && d.node == 6) {
            return "red";
          }
          if (d.name === "d4" && d.node == 0) {
            return "red";
          }
          if (d.name === "cxd4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nxd4" && d.node == 6) {
            return "red";
          }
          if (d.name === "cxd4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nxd4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nf6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nxd4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nc3" && d.node == 1) {
            return "red";
          }
          if (d.name === "g6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nf6" && d.node == 0) {
            return "red";
          }
          if (d.name === "c5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nc3" && d.node == 6) {
            return "red";
          }
          if (d.name === "c5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nc3" && d.node == 1) {
            return "red";
          }
          if (d.name === "g6" && d.node == 8) {
            return "red";
          }
          if (d.name === "Nc3" && d.node == 0) {
            return "red";
          }
          if (d.name === "g6" && d.node == 3) {
            return "red";
          }
          if (d.name === "Be3" && d.node == 6) {
            return "red";
          }
          if (d.name === "g6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Be3" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bg7" && d.node == 6) {
            return "red";
          }
          if (d.name === "Be3" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bg7" && d.node == 1) {
            return "red";
          }
          if (d.name === "f3" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bg7" && d.node == 0) {
            return "red";
          }
          if (d.name === "f3" && d.node == 1) {
            return "red";
          }
          if (d.name === " Nc6" && d.node == 7) {
            return "red";
          }
          if (d.name === "f3" && d.node == 0) {
            return "red";
          }
          if (d.name === " Nc6" && d.node == 2) {
            return "red";
          }
          if (d.name === "Qd2" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nc6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Qd2" && d.node == 1) {
            return "red";
          }
          if (d.name === " 0-0" && d.node == 6) {
            return "red";
          }
          if (d.name === "Qd2" && d.node == 0) {
            return "red";
          }
          if (d.name === "0-0" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bc4" && d.node == 6) {
            return "red";
          }
          if (d.name === "0-0" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bc4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bd7" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bc4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bd7" && d.node == 1) {
            return "red";
          }
          if (d.name === "h4" && d.node == 8) {
            return "red";
          }
          if (d.name === "Bd7" && d.node == 0) {
            return "red";
          }
          if (d.name === "h4" && d.node == 3) {
            return "red";
          }
          if (d.name === "Rc8" && d.node == 6) {
            return "red";
          }
          if (d.name === "h4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rc8" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bb3" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rc8" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bb3" && d.node == 1) {
            return "red";
          }
          if (d.name === "Ne5" && d.node == 5) {
            return "red";
          }
          if (d.name === "Bb3" && d.node == 0) {
            return "red";
          }
          if (d.name === "Ne5" && d.node == 2) {
            return "red";
          }
          if (d.name === "0-0-0" && d.node == 6) {
            return "red";
          }
          if (d.name === "Ne5" && d.node == 0) {
            return "red";
          }
          if (d.name === " 0-0-0" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nc4" && d.node == 6) {
            return "red";
          }
          if (d.name === "0-0-0" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nc4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bxc4" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nc4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bxc4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rxc4" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bxc4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rxc4" && d.node == 1) {
            return "red";
          }
          if (d.name === "h5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rxc4" && d.node == 0) {
            return "red";
          }
          if (d.name === "h5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nxh5" && d.node == 6) {
            return "red";
          }
          if (d.name === "h5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nxh5" && d.node == 1) {
            return "red";
          }
          if (d.name === "g4" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nxh5" && d.node == 0) {
            return "red";
          }
          if (d.name === "g4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nf6" && d.node == 6) {
            return "red";
          }
          if (d.name === "g4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nf6" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nde2" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nf6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nde2" && d.node == 1) {
            return "red";
          }
          if (d.name === "Qa5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nde2" && d.node == 0) {
            return "red";
          }
          if (d.name === "Qa5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bh6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Qa5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bh6" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bxh6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bh6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bxh6" && d.node == 1) {
            return "red";
          }
          if (d.name === "Qxh6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bxh6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Qxh6" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rfc8" && d.node == 6) {
            return "red";
          }
          if (d.name === "Qxh6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rfc8" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rd3" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rfc8" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rd3" && d.node == 1) {
            return "red";
          }
          if (d.name === "R4c5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rd3" && d.node == 0) {
            return "red";
          }
          if (d.name === "R4c5" && d.node == 1) {
            return "red";
          }
          if (d.name === "g5" && d.node == 6) {
            return "red";
          }
          if (d.name === "R4c5" && d.node == 0) {
            return "red";
          }
          if (d.name === "g5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rxg5" && d.node == 6) {
            return "red";
          }
          if (d.name === "g5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rxg5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rd5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rxg5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rd5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Rxd5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rd5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Rxd5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nxd5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Rd5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nxd5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Re8" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nxd5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Re8" && d.node == 1) {
            return "red";
          }
          if (d.name === "Nef4" && d.node == 6) {
            return "red";
          }
          if (d.name === "Re8" && d.node == 0) {
            return "red";
          }
          if (d.name === "Nef4" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bc6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Nef4" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bc6" && d.node == 1) {
            return "red";
          }
          if (d.name === "e5" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bc6" && d.node == 0) {
            return "red";
          }
          if (d.name === "e5" && d.node == 1) {
            return "red";
          }
          if (d.name === "Bxd5" && d.node == 6) {
            return "red";
          }
          if (d.name === "e5" && d.node == 0) {
            return "red";
          }
          if (d.name === "Bxd5" && d.node == 1) {
            return "red";
          }
          if (d.name === "exf6" && d.node == 6) {
            return "red";
          }
          if (d.name === "Bxd5" && d.node == 0) {
            return "red";
          }
          if (d.name === "exf6" && d.node == 1) {
            return "red";
          }
          if (d.name === "Qxh7+" && d.node == 6) {
            return "red";
          }
          if (d.name === "exf6" && d.node == 0) {
            return "red";
          }
          if (d.name === "Qxf7+" && d.node == 1) {
            return "red";
          }
          if (d.name === "Kf8" && d.node == 6) {
            return "red";
          }
          if (d.name === "Qxh7+" && d.node == 0) {
            return "red";
          }
          if (d.name === "Kf8" && d.node == 1) {
            return "red";
          }
          if (d.name === "Qh8+" && d.node == 6) {
            return "red";
          }
          if (d.name === "Kf8" && d.node == 0) {
            return "red";
          }
          if (d.name === "Qh8+" && d.node == 1) {
            return "red";
          }
          if (d.name === "Qh8+" && d.node == 0) {
            return "red";
          } else {
            return "black";
          }
        });
        
    },
    
  },
};
</script>
