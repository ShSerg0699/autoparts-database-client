<template>
  <fish-form ref="selectInventoryList">
    <h2>Инвентаризационная ведомость за указанный период</h2>
    <fish-fields>
      <fish-field
        label="Период инвентаризации"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.appearanceDateStart"
            hint="С"
          ></fish-date-picker>
        </fish-field>
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.appearanceDateEnd"
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
  name: "select-inventory-list",
  data() {
    return {
      page: { total: 10, current: 1 },
      columns: [
        { title: "Detail ID", key: "detailID" },
        { title: "Cell ID", key: "cellID" },
        { title: "Appearance Date", key: "appearanceDate" },
        { title: "Purchase Date", key: "purchaseDate" }
      ],
      parameters: {
        appearanceDateStart: "",
        appearanceDateEnd: ""
      },
      data: []
    };
  },
  methods: {
    select: function() {
      const query =
        `http://localhost:8081/selectInventoryList` +
        `?appearanceDateStart=${this.parameters.appearanceDateStart}` +
        `&appearanceDateEnd=${this.parameters.appearanceDateEnd}`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
