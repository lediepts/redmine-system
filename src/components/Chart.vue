<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: true
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }
    ]
  },
  legend: {
    display: true
  },
  tooltips: {
    enabled: true,
    mode: "single",
    callbacks: {
      label(tooltipItems, data) {
        const { datasetIndex, index } = tooltipItems;
        const value = data.datasets[datasetIndex].data[index];
        if (parseInt(value, 10) > 999) {
          return ` ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        }
        return ` ${value}`;
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false
};
export default {
  extends: Line,
  mixins: [reactiveProp],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: new Array(12)
              .fill("")
              .map(() => Math.round(Math.random() * 1000) + 200)
          }
        ]
      },
      chartOptions
    );
  }
};
</script>
