<template>
  <div class="order-table">
    <b-table
      :data="orders"
      :loading="loading"
      paginated
      backend-pagination
      :current-page.sync="pagination.currentPage"
      :per-page="pagination.perPage"
      :total="pagination.total"
      @page-change="onPageChange"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Order Name">
          {{ props.row.name || "" }}
        </b-table-column>
        <b-table-column field="user.company.name" label="Customer Company">
          {{
            props.row.user && props.row.user.company
              ? props.row.user.company.name
              : ""
          }}
        </b-table-column>
        <b-table-column field="user.name" label="Customer Name">
          {{ props.row.user ? props.row.user.name : "" }}
        </b-table-column>
        <b-table-column field="created_at" label="Order Date">
          {{ props.row.created_at || "" }}
        </b-table-column>
        <b-table-column field="deliveredAmount" label="Delivered Amount">
          {{ getDeliveredAmount(props.row) }}
        </b-table-column>
        <b-table-column field="totalAmount" label="Total Amount">
          ${{ getTotalAmount(props.row) }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { OrderService } from "@/services/order.service";

export default {
  data: () => ({
    orders: [],
    pagination: {
      currentPage: 1,
      perPage: 10,
      total: 0
    },
    loading: false
  }),
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      this.loading = true;

      try {
        const data = await OrderService.all({
          includes: "items,items.deliveries,user,user.company",
          page: this.pagination.currentPage,
          per_page: this.pagination.perPage
        }).then(response => response.data);

        this.pagination.currentPage = data.current_page;
        this.pagination.perPage = data.per_page;
        this.pagination.total = data.total;

        this.orders = data.data;
      } catch (err) {
        console.error(err);
      }

      this.loading = false;
    },
    getDeliveredAmount(order) {
      const items = order.items || [];
      const amount = items.reduce((acc, item) => {
        const deliveries = item.deliveries || [];
        const deliveredQuantity = deliveries.reduce((acc, delivery) => {
          acc += delivery.quantity;
          return acc;
        }, 0);

        acc += deliveredQuantity * item.price_per_unit;

        return acc;
      }, 0);

      return `$${amount}` || "-";
    },
    getTotalAmount(order) {
      const items = order.items || [];
      const amount = items.reduce((acc, item) => {
        acc += item.quantity * item.price_per_unit;
        return acc;
      }, 0);

      return `$${amount}`;
    },
    onPageChange(page) {
      this.pagination.currentPage = page;
      this.fetchOrders();
    }
  }
};
</script>
