<template>
    <div>
        <!-- <b-row> //TODO: commented out for the meantime
          <b-col md="4">
            <div id="chart-spark1">
                <apex-chart type="area" height="160" :options="chartOptions" :series="series" />
            </div>
          </b-col>
          <b-col md="4">
            <div id="chart-spark2">
                <apex-chart type="area" height="160" :options="chartOptionsSpark2" :series="seriesSpark2" />
            </div>
          </b-col>
          <b-col md="4">
            <div id="chart-spark3">
                <apex-chart type="area" height="160" :options="chartOptionsSpark3" :series="seriesSpark3" />
            </div>
          </b-col>
        </b-row> -->

        <div class="row my-2 mx-1">
          <table class="w-100">
            <thead>
              <th>Total Value</th>
              <th>Percentage of Portfolio</th>
              <th>Last 10 days</th>
              <th>Volume</th>
            </thead>
            <tbody>
              <tr>
                <td>$32,554</td>
                <td>15%</td>
                <td>
                    <div id="chart-1">
                        <apex-chart
                            type="line"
                            height="35"
                            width="100"
                            :options="chartOptions1"
                            :series="series1"
                        />
                    </div>
                </td>
                <td>
                    <div id="chart-5">
                        <apex-chart
                            type="bar"
                            height="35"
                            width="100"
                            :options="chartOptions5"
                            :series="series5"
                        />
                    </div>
                </td>
              </tr>
              <tr>
                <td>$23,533</td>
                <td>7%</td>
                <td>
                  <div id="chart-2">
                        <apex-chart
                            type="line"
                            height="35"
                            width="100"
                            :options="chartOptions2"
                            :series="series2"
                        />
                  </div>
                </td>
                <td>
                  <div id="chart-6">
                        <apex-chart
                            type="bar"
                            height="35"
                            width="100"
                            :options="chartOptions6"
                            :series="series6"
                        />
                </div>
                </td>
              </tr>
              <tr>
                <td>$54,276</td>
                <td>9%</td>
                <td>
                  <div id="chart-3">
                        <apex-chart
                            type="pie"
                            height="40"
                            width="40"
                            :options="chartOptions3"
                            :series="series3"
                        />
                </div>
                </td>
                <td>
                  <div id="chart-7">
                        <apex-chart
                            type="radialBar"
                            height="50"
                            width="50"
                            :options="chartOptions7"
                            :series="series7"
                        />
                </div>
                </td>
              </tr>
              <tr>
                <td>$11,533</td>
                <td>2%</td>
                <td>
                  <div id="chart-4">
                        <apex-chart
                            type="donut"
                            height="40"
                            width="40"
                            :options="chartOptions4"
                            :series="series4"
                        />
                  </div>
                </td>
                <td>
                  <div id="chart-8">
                        <apex-chart
                            type="radialBar"
                            height="40"
                            width="40"
                            :options="chartOptions8"
                            :series="series8"
                        />
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>

<script>

import { BRow, BCol } from 'bootstrap-vue'
import ApexChart from 'vue-apexcharts'

export default {
    name: 'ProfitLossChart',

    components: {
        ApexChart,
        BRow,
        BCol
    },

    data () {
        return {
            series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptions: {
            chart: {
              type: 'area',
              height: 160,
              sparkline: {
                enabled: true
              },
            },
            stroke: {
              curve: 'straight'
            },
            fill: {
              opacity: 0.3,
            },
            yaxis: {
              min: 0
            },
            colors: ['#DCE6EC'],
            title: {
              text: '$424,652',
              offsetX: 0,
              style: {
                fontSize: '24px',
              }
            },
            subtitle: {
              text: 'Active Members',
              offsetX: 0,
              style: {
                fontSize: '14px',
              }
            }
          },

          seriesSpark2: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptionsSpark2: {
            chart: {
              type: 'area',
              height: 160,
              sparkline: {
                enabled: true
              },
            },
            stroke: {
              curve: 'straight'
            },
            fill: {
              opacity: 0.3,
            },
            yaxis: {
              min: 0
            },
            colors: ['#DCE6EC'],
            title: {
              text: '$235,312',
              offsetX: 0,
              style: {
                fontSize: '24px',
              }
            },
            subtitle: {
              text: 'Deposits',
              offsetX: 0,
              style: {
                fontSize: '14px',
              }
            }
          },

          seriesSpark3: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptionsSpark3: {
            chart: {
              type: 'area',
              height: 160,
              sparkline: {
                enabled: true
              },
            },
            stroke: {
              curve: 'straight'
            },
            fill: {
              opacity: 0.3
            },
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            yaxis: {
              min: 0
            },
            title: {
              text: '$135,965',
              offsetX: 0,
              style: {
                fontSize: '24px',
              }
            },
            subtitle: {
              text: 'Withdraw',
              offsetX: 0,
              style: {
                fontSize: '14px',
              }
            }
          },

          series1: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptions1: {
            chart: {
              type: 'line',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function (seriesName) {
                    return ''
                  }
                }
              },
              marker: {
                show: false
              }
            }
          },

          series2: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
          }],
          chartOptions2: {
            chart: {
              type: 'line',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function (seriesName) {
                    return ''
                  }
                }
              },
              marker: {
                show: false
              }
            }
          },

          series3: [43, 32, 12, 9],
          chartOptions3: {
            chart: {
              type: 'pie',
              width: 40,
              height: 40,
              sparkline: {
                enabled: true
              }
            },
            stroke: {
              width: 1
            },
            tooltip: {
              fixed: {
                enabled: false
              },
            }
          },

          series4: [43, 32, 12, 9],
          chartOptions4: {
            chart: {
              type: 'donut',
              width: 40,
              height: 40,
              sparkline: {
                enabled: true
              }
            },
            stroke: {
              width: 1
            },
            tooltip: {
              fixed: {
                enabled: false
              },
            }
          },

          series5: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptions5: {
            chart: {
              type: 'bar',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                columnWidth: '80%'
              }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function (seriesName) {
                    return ''
                  }
                }
              },
              marker: {
                show: false
              }
            }
          },

          series6: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
          }],
          chartOptions6: {
            chart: {
              type: 'bar',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                columnWidth: '80%'
              }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function (seriesName) {
                    return ''
                  }
                }
              },
              marker: {
                show: false
              }
            }
          },

          series7: [45],
          chartOptions7: {
            chart: {
              type: 'radialBar',
              width: 50,
              height: 50,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 0
                },
                dataLabels: {
                  show: false
                }
              }
            }
          },

          series8: [53, 67],
          chartOptions8: {
            chart: {
              type: 'radialBar',
              width: 40,
              height: 40,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 1
                },
                dataLabels: {
                  show: false
                }
              }
            }
          },
        }
    }
}
</script>
