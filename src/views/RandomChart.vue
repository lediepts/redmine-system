<template>
  <div class="small">
    <LineChart></LineChart>
    <button>Randomize</button>
  </div>
</template>

<script>
import LineChart from "../LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {}
    };
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
