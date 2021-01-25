<template>
  <fish-form ref="selectCashReport">
    <h2>Кассовый отчёт за указанный период</h2>
    <fish-fields>
      <fish-field
        label="Период кассового отчёта"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.purchaseDateStart"
            hint="С"
          ></fish-date-picker>
        </fish-field>
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.purchaseDateEnd"
            hint="До"
          ></fish-date-picker>
        </fish-field>
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
  name: "select-cash-report",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "Purchase Date", key: "purchaseDate" },
        { title: "Detail ID", key: "detailID" },
        { title: "Name", key: "name" },
        { title: "Quantity", key: "quantity" },
        { title: "Buyer", key: "buyerId" }
      ],
      parameters: {
        purchaseDateStart: "",
        purchaseDateEnd: ""
      },
      data: []
    };
  },
  methods: {
    select: function() {
      const query =
        `http://localhost:8081/selectCashReport` +
        `?purchaseDateStart=${this.parameters.purchaseDateStart}` +
        `&purchaseDateEnd=${this.parameters.purchaseDateEnd}`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
