<template>
  <div class="item-c-kvk">
    <p>{{moveIndex}}</p>
    <svg
      id="viz"
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin meet"
    >
    
      <g class="line" stroke="black" fill="none"></g>
      <g class="axis x-axis" :transform="`translate(0, ${height - margin})`"></g>
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
      margin: 0
    };
  },
  updated(){
    if (this.moveIndex > 24){
      return this.gm();
    }
  },
  mounted: function() {
    this.data = data;
  },

  methods: {
    gmLine(){
      return d3.line()
        .x(d => this.xScale(d.format))
        .y(d => this.yScale(d.value))
    },
    xScale(){
      return d3.scaleOrdinal()
        .domain(["Standard & Blitz", "Blitz & Bullet", "1 & 5 Minute"])
        .range([this.margin, this.width - this.margin])
    },
    yScale(){
      return d3.scaleLinear()
        .domain([-1, 1])
        .range([this.height - this.margin, this.margin])
    },
    gm(){
    const svg = d3.select("#viz");
    var ref = this;
      svg
      .select('.line')
      .selectAll('path')
      .data(this.data)
      .join('path')
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr('d', function(d) {
        return ref.gmLine()(d.cors)
      })   
    }  
  },
};
</script>
