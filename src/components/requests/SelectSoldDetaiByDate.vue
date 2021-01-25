<template>
  <fish-form ref="selectBuyerByParam">
    <h2>Перечень реализованного товара за конкретный день</h2>
    <fish-fields>
      <fish-field label="Введите дату" span="12" name="date">
        <fish-date-picker
          v-model="parameters.purchaseDate"
          hint=""
        ></fish-date-picker>
      </fish-field>
    </fish-fields>
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
  name: "select-sold-detail",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "Detail ID", key: "detailID" },
        { title: "Name", key: "name" },
        { title: "Price", key: "price" }
      ],
      parameters: {
        purchaseDate: ""
      },
      data: []
    };
  },
  methods: {
    select: function() {
      const query =
        `http://localhost:8081/selectSoldDetailByDate` +
        `?purchaseDate=${this.parameters.purchaseDate}`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
