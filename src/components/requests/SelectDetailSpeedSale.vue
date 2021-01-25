<template>
  <fish-form ref="selectDetailSpeedSale">
    <h2>Скорость продажи товаров</h2>
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
  name: "select-detail-speed-sale",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "Detail ID", key: "detailID" },
        { title: "Delivery Date", key: "deliveryDate" },
        { title: "Purchase Date", key: "purchaseDate" }
      ],
      data: []
    };
  },
  methods: {
    select: function() {
      const query = `http://localhost:8081/selectDetailSpeedSale`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
