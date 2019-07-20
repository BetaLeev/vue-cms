<template>
  <div class="user-analyse-container">
    <div class="container">
      <h2 class="title">用户分析</h2>
      <line-chart class="line-chart"
        height="100"
        :chart-data="dataLine"></line-chart>

      <bar-chart class="bar-chart"
        height="100"
        :chart-data="dataBar"></bar-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./line-chart.js";
import BarChart from "./bar-chart.js";
export default {
  data() {
    return {
      dataLine: {
        labels: ["a", "b", "c", "d"],
        datasets: [
          {
            label: "Data 2",
            backgroundColor: "#f87973",
            data: [2, 4, 4, 2]
          },
          {
            label: "Data 3",
            backgroundColor: "#f87979",
            data: [3, 4, 1, 6]
          }
        ],
        options: {}
      },
      dataBar: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "1",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "2",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "3",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "4",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "5",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "6",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          },
          {
            label: "7",
            backgroundColor: "pink",
            data: [3, 2, 1, 9, 11, 22, 33]
          }
        ]
      }
    };
  },
  components: {
    LineChart,
    BarChart
  }
};
</script>

<style lang='stylus' scoped></style>