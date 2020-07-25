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
    </div>
  </div>
</template>

<script>
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
    filters: {
      handler(value) {
        this.$emit("filter", value);
      },
      deep: true
    },
    "inputs.createdDate"(value) {
      this.filters.createdDateStart = value[0];
      this.filters.createdDateEnd = value[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.order-table-filters {
  margin-bottom: 30px;
}
</style>
