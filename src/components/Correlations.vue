<template>
  <div class="item-c-kvk">
    <svg
      id="viz"
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin meet"
    >
    
      <g stroke="black" fill="none">
        <path
          class="lines"
          :key="path.key"
          v-for="path in paths"
          :x="path[0]"
          :y="path.StandardBlitz"
          :d="line(path.cors)"
          :stroke-width=2
        ></path>
      </g>
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
      line: line,
      cors: cors
    };
  },
  computed: {},
  mounted: function() {
    this.cors = cors;
    // this.line = line();
  },
  methods: {
    
  },
};
</script>
