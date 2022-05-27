<template>
  <div>
    <user-log-filters
      v-model="filter"
    />
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="filter.search"
                class="d-inline-block mr-1"
                placeholder="Search by member's username..."
              />
              <!-- <b-button
                variant="primary"
                @click="add()"
              >
                <span class="text-nowrap">Add</span>
              </b-button> -->
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table
        ref="resourceTable"
        class="position-relative"
        responsive
        primary-key="id"
        show-empty
        small
        empty-text="No matching records found"
        :fields="columns"
        :items="fetchRows"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filter"
        :no-local-sorting="true"
        :filter-debounce="600"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <!-- Column: member-->
        <!-- <template #cell(member)="data">
          <span
            v-if="data.item.member"
            v-b-tooltip.hover.top="data.value"
            class="cursor-pointer text-primary"
            @click="view(data.item.member)"
          > {{ data.value }} </span>
        </template> -->
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span
              class="text-muted"
            >Showing {{ meta.from }} to {{ meta.to }} of
              {{ meta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>

    <form-modal
      ref="formModal"
      :resource-id.sync="resourceId"
      @save="$refs.resourceTable.refresh()"
    />
  </div>
</template>

<script>
/* eslint-disable new-cap */
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  // BButton,
  BTable,
  BPagination,
  // BDropdown,
  // BDropdownItem,
  // BBadge,
  VBTooltip,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { makeTable } from '@/helpers/table'
import resourceTable from '@/mixins/resource/resource-table'
import dayjs from 'dayjs'
import ProfitLossByMember from '@/models/ProfitLossByMember'
import UserLogFilters from '@/components/UserLogFilters.vue'
import Ripple from 'vue-ripple-directive'
import FormModal from '../members-list/FormModal.vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    // BButton,
    BTable,
    // BDropdown,
    // BDropdownItem,
    BPagination,
    // BBadge,

    vSelect,
    UserLogFilters,
    FormModal,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  mixins: [
    resourceTable,
  ],
  data() {
    return {
      resourceId: null,
      model: ProfitLossByMember,
      ...makeTable({
        filter: {
          search: '',
          date_range: '',
        },
        columns: [
          // { key: 'actions' },
          {
            key: 'website',
            sortable: true,
            formatter: (value, key, item) => item.website.code,
          },
          {
            key: 'member',
            sortable: true,
            formatter: (value, key, item) => item.member.username,
          },
          {
            key: 'deposit_count',
            sortable: true,
          },
          {
            key: 'deposit_amount',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'withdraw_count',
            sortable: true,
          },
          {
            key: 'withdraw_amount',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'adjustment_count',
            sortable: true,
          },
          {
            key: 'adjustment_amount',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'bet_count',
            sortable: true,
          },
          {
            key: 'bet_amount',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'vba',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'win_loss',
            label: 'Win/Loss',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'bonus_count',
            sortable: true,
          },
          {
            key: 'bonus_amount',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'share_upline',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'share_downline',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'referral',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'commission',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'progressive',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
          {
            key: 'total_win_loss',
            label: 'Total Win/Loss',
            sortable: true,
            formatter: value => this.$options.filters.currency(value),
          },
        ],
      }),
    }
  },
  mounted() {
    this.$root.$on('selected-website', () => {
      this.$nextTick(
        () => {
          // TODO: issue here, the request sent is duplicated sometimes
          this.$refs.resourceTable.refresh()
        },
      )
    })
  },
  methods: {
    fetchRowsParams() {
      return {
        fields: {
          member: 'id,username',
          website: 'id,code',
        },
        include: 'member,website',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
