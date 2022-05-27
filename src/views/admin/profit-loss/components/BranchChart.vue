<template>
    <div class="game-profit-loss-branch-container">
        <h6 class="text-center game-font">By Branch</h6>
        <apex-chart type="bar" height="380" :options="chartOptions" :series="series"></apex-chart>
    </div>
</template>

<style scoped>
  .game-profit-loss-branch-container h6 {
    font-size: 30px;
    font-weight: bolder;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>

<script>
import ApexChart from 'vue-apexcharts'

export default {
    name: 'BranchChart',

    components: {
        ApexChart
    },

    data () {
        return {
            series: [{
                name: 'sales',
                data: [
                    {
                        x: 'Web 1',
                        y: 400
                    },
                    {
                        x: 'Web 2',
                        y: 430
                    },
                    {
                        x: 'Web 3',
                        y: 448
                    },
                    {
                        x: 'Web 4',
                        y: 600
                    },
                ]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 380
            },
            xaxis: {
              type: 'category',
            },
          },

        }
    }
}
</script>
