<template>
  <div class="item-c-kvk">
    <svg
      id="viz"
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin meet"
    >
    
      <g stroke="black" fill="none">
        <path id="GM" 
        :d="gm(cors)"></path>
      </g>
      <g class="axis x-axis" :transform="`translate(0, ${height - margin})`"></g>
      <g class="axis y-axis" :transform="`translate(${margin}, 0)`"></g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import cors from "./correlations.json";

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
  computed: {
    
  },
  mounted: function() {
    this.cors = cors;

    // this.line = line();
  },
  methods: {
     line(){
      return d3.line()
        .x(d => this.xScale(d.cors.format))
        .y(d => this.yScale(d.cors.value))
    },
    xScale(){
      return d3.scaleOrdinal()
        .domain(["Standard & Blitz", "Blitz & Bullet", "1 & 5 Minute"])
        .range([this.margin, this.width - this.margin])
    },
    yScale(){
      return d3.scaleLinear()
        .domain([-1, 9])
        .range([this.height - this.margin, this.margin])
    },
    gm(d){
    return d3.select('#GM')
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr('d', () => {
        return this.line()(d.value)
      })   
    }  
  },
};
</script>
