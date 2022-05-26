<template>
    <div class="game-profit-loss-provider-container h-100">
        <h6 class="text-center">By Providers</h6>
        <apex-chart
          type="pie"
          width="380"
          :options="chartOptions"
          :series="series"
          class="d-flex flex-row justify-content-center mt-2 h-100"
        />
    </div>
</template>

<style scoped>
  .game-profit-loss-provider-container h6 {
    font-size: 30px;
    font-weight: bolder;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>

<script>
import ApexChart from 'vue-apexcharts'

export default {
    name: 'ProviderChart',

    components: {
        ApexChart
    },

    data () {
        return {
        series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Pragmatic', 'Joker', 'Team C', 'Play Tech', 'CMD38'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        }
    }
}
</script>
