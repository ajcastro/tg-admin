<template>
  <div class="w-100">
    <b-row>
      <b-col
        cols="12"
        md="6"
      >
        <h1>P/L</h1>

        <div />
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col
        cols="12"
        md="6"
      >
        <label for="dateFrom">Date From</label>
        <b-form-datepicker
          id="dateFrom"
          v-model="dateFrom"
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        />
      </b-col>
      <b-col
        cols="12"
        md="6"
      >
        <label for="dateTo">Date To</label>
        <b-form-datepicker
          id="dateTo"
          v-model="dateTo"
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        />
      </b-col>
    </b-row>
    <b-row
      cols="12"
      class="my-2"
    >
      <b-col
        cols="12"
        xl="12"
      >
        <profit-loss-chart />
      </b-col>
      <b-col
        cols="12"
        lg="12"
        xl="12"
        class="mt-3"
      >
        <b-row>
          <b-col
            cols="12"
            lg="6"
          >
            <branch-chart />
          </b-col>
          <b-col
            cols="12"
            lg="6"
          >
            <provider-chart />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BFormDatepicker } from 'bootstrap-vue'
import vSelect from 'vue-select'
import ProfitLossChart from '@/views/admin/profit-loss/components/ProfitLossChart.vue'
import BranchChart from '@/views/admin/profit-loss/components/BranchChart.vue'
import ProviderChart from '@/views/admin/profit-loss/components/ProviderChart.vue'

export default {
  name: 'ProfitLoss',

  components: {
    BRow,
    BCol,
    vSelect,
    BFormDatepicker,
    ProfitLossChart,
    BranchChart,
    ProviderChart,
  },

  data() {
    return {
      selectedWebsiteId: null,
      websites: [],
      dateFrom: null,
      dateTo: null,
    }
  },

  methods: {
    onSelectWebsite() {

    },
  },
}
</script>
