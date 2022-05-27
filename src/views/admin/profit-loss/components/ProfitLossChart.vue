<template>
  <div>
    <b-row>
      <b-col md="4">
        <div id="chart-spark1">
          <h1>$ 424,652</h1>
          Active Members
        </div>
      </b-col>
      <b-col md="4">
        <div id="chart-spark2">
          <h1>$ 235,212</h1>
          Deposits
        </div>
      </b-col>
      <b-col md="4">
        <div id="chart-spark3">
          <h1>$ 135,965</h1>
          Withdraws
        </div>
      </b-col>
    </b-row>

    <b-table
      class="mt-2"
      responsive="sm"
      :items="items"
    />
  </div>
</template>

<script>

import { BRow, BCol, BTable } from 'bootstrap-vue'

export default {
  name: 'ProfitLossChart',

  components: {
    BRow,
    BCol,
    BTable,
  },

  data() {
    return {
      items: [...Array(5)].map(() => ({
        bet: 10000,
        vba: 10000,
        win_loss: 100000,
        uplink: 100000,
        downlink: 100000,
        bonus: 100000,
        referral: 100000,
        commission: 100000,
        progressive: 100000,
        total_win_loss: 100000,
      })),
    }
  },
}
</script>
