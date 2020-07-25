<template>
  <div class="order-table">
    <p>Total Amount: <strong>$198.22</strong></p>
    <br />
    <b-table :data="orders">
      <template slot-scope="props">
        <b-table-column field="name" label="Order Name">
          {{ props.row.name || "" }}
        </b-table-column>
        <b-table-column field="customerCompanyName" label="Customer Company">
          {{
            props.row.customer && props.row.customer.company
              ? props.row.customer.company.name
              : ""
          }}
        </b-table-column>
        <b-table-column field="customerName" label="Customer Name">
          {{ props.row.customer ? props.row.customer.name : "" }}
        </b-table-column>
        <b-table-column field="createdAt" label="Order Date">
          {{ props.row.createdAt || "" }}
        </b-table-column>
        <b-table-column field="deliveredAmount" label="Delivered Amount">
          {{ props.row.deliveredAmount ? `$${props.row.deliveredAmount}` : "-" }}
        </b-table-column>
        <b-table-column field="totalAmount" label="Total Amount">
          ${{ props.row.totalAmount || "" }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    // Temporary data
    orders: [
      {
        name: "PO #001-W",
        customer: {
          name: "Waylon Beahan V",
          company: {
            name: "Comedy Central Inc"
          }
        },
        createdAt: "04-23-20 04:18:00",
        deliveredAmount: 99.11,
        totalAmount: 99.11
      },
      {
        name: "PO #002-H",
        customer: {
          name: "Dr. Harold Senger",
          company: {
            name: "Sony Ericsson"
          }
        },
        createdAt: "04-23-20 04:18:00",
        deliveredAmount: 0,
        totalAmount: 99.11
      },
      {
        name: "PO #003-H",
        customer: {
          name: "Dr. Harold Senger",
          company: {
            name: "Sony Ericsson"
          }
        },
        createdAt: "04-23-20 04:18:00",
        deliveredAmount: 99.11,
        totalAmount: 99.11
      }
    ]
  })
};
</script>
