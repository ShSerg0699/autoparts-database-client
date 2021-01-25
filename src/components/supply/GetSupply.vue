<template>
  <fish-form class="supplyForm" ref="getSupply">
    <h2>Поставки</h2>
    <fish-fields>
      <fish-field label="Введите ID поставки" span="8" name="supplyID">
        <fish-input-number v-model="id"></fish-input-number>
      </fish-field>
      <fish-field class="idButton">
        <fish-button type="primary" @click="getSupplyById(id)"
          >Посмотреть поставки по id</fish-button
        >
      </fish-field>
      <fish-field class="allButton">
        <fish-button type="primary" @click="getAllSupply"
          >Посмотреть все поставки</fish-button
        >
      </fish-field>
    </fish-fields>
    <fish-field>
      <fish-table
        :columns="columns"
        :data="data"
        :pagination="page"
      ></fish-table>
    </fish-field>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "get-supply",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "ID", key: "supplyID" },
        { title: "Supplier", key: "supplierID" },
        { title: "Delivery Date", key: "deliveryDate" },
        { title: "Marriage Rate", key: "marriageRate" },
        { title: "Customs Clearance", key: "customsClearance" },
        { title: "Detail List", key: "detailList" }
      ],
      id: null,
      data: []
    };
  },
  methods: {
    getSupplyById: function() {
      axios
        .get("http://localhost:8081/supply?supplyID=" + this.id)
        .then(response => (this.data = [response.data]));
    },
    getAllSupply: function() {
      axios
        .get("http://localhost:8081/supplyAll")
        .then(response => (this.data = response.data));
    }
  }
};
</script>

<style scoped>
.supplyForm .idButton,
.supplyForm .allButton {
  display: grid;
  align-items: end;
}
</style>
