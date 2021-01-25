<template>
  <fish-form class="supplierForm" ref="getSupplier">
    <h2>Поставщики</h2>
    <fish-fields>
      <fish-field label="Введите ID поставщика" span="8" name="supplierID">
        <fish-input-number v-model="id"></fish-input-number>
      </fish-field>
      <fish-field class="idButton">
        <fish-button type="primary" @click="getSupplierById(id)"
          >Посмотреть поставщика по id</fish-button
        >
      </fish-field>
      <fish-field class="allButton">
        <fish-button type="primary" @click="getAllSupplier"
          >Посмотреть всех поставщиков</fish-button
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
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "get-supplier",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "ID", key: "supplierID" },
        { title: "Name", key: "name" },
        { title: "Type", key: "type" },
        { title: "Delivery Time", key: "deliveryTime" },
        { title: "Guarantee", key: "guarantee" },
        { title: "Contract", key: "contract" },
        { title: "Discount", key: "discount" }
      ],
      id: null,
      data: []
    };
  },
  methods: {
    getSupplierById: function() {
      axios
        .get("http://localhost:8081/supplier?supplierID=" + this.id)
        .then(response => (this.data = [response.data]));
    },
    getAllSupplier: function() {
      axios
        .get("http://localhost:8081/supplierAll")
        .then(response => (this.data = response.data));
    }
  }
};
</script>

<style scoped>
.supplierForm .idButton,
.supplierForm .allButton {
  display: grid;
  align-items: end;
}
</style>
