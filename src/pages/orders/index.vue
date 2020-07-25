<template>
  <div class="page-orders">
    <order-table-filters />
    <order-table />
  </div>
</template>

<script>
import OrderTable from "@/components/Order/OrderTable";
import OrderTableFilters from "@/components/Order/OrderTableFilters";

export default {
  components: {
    OrderTable,
    OrderTableFilters
  }
};
</script>
