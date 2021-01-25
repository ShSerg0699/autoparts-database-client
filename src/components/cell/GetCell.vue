<template>
  <fish-form class="cellForm" ref="getCell">
    <h2>Ячейки на складе</h2>
    <fish-fields>
      <fish-field label="Введите ID ячейки" span="8" name="cellID">
        <fish-input-number v-model="id"></fish-input-number>
      </fish-field>
      <fish-field class="idButton">
        <fish-button type="primary" @click="getCellById(id)"
          >Посмотреть ячейку по id</fish-button
        >
      </fish-field>
      <fish-field class="allButton">
        <fish-button type="primary" @click="getAllCell"
          >Посмотреть все ячейки</fish-button
        >
      </fish-field>
    </fish-fields>
    <fish-table :columns="columns" :data="data" :pagination="page"></fish-table>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "get-cell",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "ID", key: "cellID" },
        { title: "Space", key: "space" },
        { title: "Details", key: "detailList" }
      ],
      id: null,
      data: []
    };
  },
  methods: {
    getCellById: function() {
      axios
        .get("http://localhost:8081/cell?cellID=" + this.id)
        .then(response => (this.data = [response.data]));
    },
    getAllCell: function() {
      axios
        .get("http://localhost:8081/cellAll")
        .then(response => (this.data = response.data));
    }
  }
};
</script>

<style scoped>
.cellForm .idButton,
.cellForm .allButton {
  display: grid;
  align-items: end;
}
</style>
