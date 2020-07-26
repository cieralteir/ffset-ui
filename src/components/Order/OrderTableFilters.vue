<template>
  <div class="order-table-filters">
    <div class="columns is-multiline">
      <div class="column is-12">
        <b-field>
          <b-input
            v-model="filters.search"
            placeholder="Search..."
            type="search"
            icon="magnify"
          />
        </b-field>
      </div>
      <div class="column is-4">
        <b-field label="Created Date">
          <b-datepicker
            v-model="inputs.createdDate"
            placeholder="Select a date..."
            range
          />
        </b-field>
      </div>
      <div class="column is-12">
        <b-button type="is-light" @click="filter">SEARCH</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";

export default {
  data: () => ({
    filters: {
      search: "",
      createdDateStart: "",
      createdDateEnd: ""
    },
    inputs: {
      createdDate: null
    }
  }),
  watch: {
    "inputs.createdDate"(value) {
      this.filters.createdDateStart = moment
        .tz(value[0], "Australia/Melbourne")
        .format("");
      this.filters.createdDateEnd = moment
        .tz(moment(value[1]).endOf("day"), "Australia/Melbourne")
        .format("");
    }
  },
  methods: {
    filter() {
      this.$emit("filter", this.filters);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-table-filters {
  margin-bottom: 30px;
}
</style>
