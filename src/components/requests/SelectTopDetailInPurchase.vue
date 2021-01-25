<template>
  <fish-form ref="selectTopDetailInPurchase">
    <h2>Топ самых продаваемых деталей</h2>
    <fish-fields>
      <fish-field>
        <fish-button type="primary" @click="select">Показать</fish-button>
      </fish-field>
    </fish-fields>
    <fish-field>
      <fish-table
        :columns="columns"
        :data="data"
        :pagination="page"
      ></fish-table>
    </fish-field>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "select-top-detail-in-purchase",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "Detail ID", key: "detailID" },
        { title: "Quantity", key: "quantity" }
      ],
      data: []
    };
  },
  methods: {
    select: function() {
      const query = `http://localhost:8081/selectTopDetailInPurchase`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
