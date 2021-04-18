<template>
  <div class="item-c-kvk">
    <svg
      id="viz"
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin meet"
    >
      <g class="line" fill="none"></g>
      <g
        class="axis x-axis"
        :transform="`translate(0, ${(height - 8) * 0.915})`"
      ></g>
      <g class="axis y-axis" :transform="`translate(${margin}, 0)`"></g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import data from "./correlations.json";

export default {
  name: "Correlations",
  props: {
    moveIndex: Number,
  },
  data() {
    return {
      d3: d3,
      width: 400,
      height: 400,
      margin: 27,
    };
  },
  updated() {
    // if (this.moveIndex > 23) {
    const xAxis = d3.axisBottom(this.xScale);
    const yAxis = d3.axisLeft(this.yScale);
    d3.select(".x-axis").call(xAxis);
    d3.select(".y-axis").call(yAxis);
    console.log(yAxis);

    return this.gm();
    // }
  },
  mounted: function() {
    this.data = data;
  },
  computed: {
    xScale() {
      return d3
        .scaleOrdinal()
        .domain(["", "Standard & Blitz", "Blitz & Bullet", "One & Five Minute"])
        .range([
          this.margin,
          this.width * 0.25,
          this.width * 0.5,
          this.width * 0.75,
          this.width - 1,
        ]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([-0.1, 1])
        .range([this.height - 6, 6]);
    },
  },
  methods: {
    gmLine() {
      return d3
        .line()
        .x((d) => {
          console.log(d);
          const x = this.xScale(d.format);
          console.log(x);
          return x;
        })
        .y((d) => {
          console.log(d);
          const y = this.yScale(d.value);
          console.log(y);
          return y;
        });
    },
    gm() {
      const svg = d3.select("#viz");
      var ref = this;

      // svg
      //   .append("defs")
      //   .append("marker")
      //   .attr("id", "arrow")
      //   .attr("viewBox", "0 0 10 10")
      //   .attr("refX", 1)
      //   .attr("refY", 5)
      //   .attr("markerWidth", 6)
      //   .attr("markerHeight", 6)
      //   .attr("orient", "auto");
      svg
        .select(".line")
        .selectAll("path")
        .data(this.data)
        .join("path")
        .attr("class", function(d) {
          if (d.rank == "GM") {
            return "gm";
          }
          if (d.rank == "IM") {
            return "im";
          }
          if (d.rank == "FM") {
            return "fm";
          } else {
            return "none";
          }
        })
        .attr("marker-start", function(d) {
          if (d.rank == "GM") {
            return "url(#redDotFill)";
          }
          if (d.rank == "IM") {
            return "url(#redDotStroke)";
          }
          if (d.rank == "FM") {
            return "url(#blackDotFill)";
          } else {
            return "url(#blackDotStroke)";
          }})
        .attr("marker-mid", function(d) {
          if (d.rank == "GM") {
            return "url(#redDotFill)";
          }
          if (d.rank == "IM") {
            return "url(#redDotStroke)";
          }
          if (d.rank == "FM") {
            return "url(#blackDotFill)";
          } else {
            return "url(#blackDotStroke)";
          }})
        .attr("marker-end", function(d) {
          if (d.rank == "GM") {
            return "url(#redDotFill)";
          }
          if (d.rank == "IM") {
            return "url(#redDotStroke)";
          }
          if (d.rank == "FM") {
            return "url(#blackDotFill)";
          } else {
            return "url(#blackDotStroke)";
          }})
        .attr("stroke", function(d) {
          if (d.rank == "GM") {
            return "red";
          }
          if (d.rank == "IM") {
            return "red";
          }
          if (d.rank == "FM") {
            return "black";
          } else {
            return "black";
          }
        })
        .attr("stroke-width", 1)
        .attr("d", function(d) {
          const line = ref.gmLine()(d.cors);
          return line;
        });
    
      const redDotFill = svg
        .append("defs")
        .append("marker")
        .data(this.data)
        .join("marker")
        .attr("id", "redDotFill")
        .attr("viewBox", "0 0 18 18")
        .attr("refX", 5)
        .attr("refY", 9)
        .attr("fill", "red")
        .attr("markerWidth", 9)
        .attr("markerHeight", 9)
        .attr("orient", "auto");
        redDotFill.append("circle").attr("r", 7).attr("cx",9).attr("cy",9);

        const redDotStroke = svg
        .append("defs")
        .append("marker")
        .data(this.data)
        .join("marker")
        .attr("id", "redDotStroke")
        .attr("viewBox", "0 0 18 18")
        .attr("refX", 5)
        .attr("refY", 9)
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .attr("fill", "white")
        .attr("markerWidth", 9)
        .attr("markerHeight", 9)
        .attr("orient", "auto");
        redDotStroke.append("circle").attr("r", 7).attr("cx",9).attr("cy",9);
      
      const blackDotFill = svg
        .append("defs")
        .append("marker")
        .data(this.data)
        .join("marker")
        .attr("id", "blackDotFill")
        .attr("viewBox", "0 0 18 18")
        .attr("refX", 5)
        .attr("refY", 9)
        .attr("fill", "black")
        .attr("markerWidth", 9)
        .attr("markerHeight", 9)
        .attr("orient", "auto");
        blackDotFill.append("circle").attr("r", 7).attr("cx",9).attr("cy",9);

        const blackDotStroke = svg
        .append("defs")
        .append("marker")
        .data(this.data)
        .join("marker")
        .attr("id", "blackDotStroke")
        .attr("viewBox", "0 0 18 18")
        .attr("refX", 5)
        .attr("refY", 9)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("fill", "white")
        .attr("markerWidth", 9)
        .attr("markerHeight", 9)
        .attr("orient", "auto");
        blackDotStroke.append("circle").attr("r", 7).attr("cx",9).attr("cy",9);
    },
  },
};
</script>
