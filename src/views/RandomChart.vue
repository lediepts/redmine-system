<template>
  <div class="small">
    <LineChart height="300"></LineChart>
  </div>
</template>

<script>
import LineChart from "../components/Chart.vue";

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
