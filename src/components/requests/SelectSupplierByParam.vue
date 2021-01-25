<template>
  <fish-form ref="selectSupplierByParam">
    <h2>Перечень поставщиков по параметрам</h2>
    <fish-fields>
      <fish-field
        label="Выберите тип поставщика"
        name="type"
        :rules="[{ required: true }]"
      >
        <fish-radios v-model="parameters.type">
          <fish-radio
            :index="index + 1"
            v-for="(c, index) in ['1', '2']"
            :key="index"
            ><span v-html="c"></span>
          </fish-radio>
        </fish-radios>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Введите ID детали"
        span="8"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number
          v-model="parameters.detailID"
          hint=""
        ></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Введите количество, поставленных деталей"
        span="8"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number
          v-model="parameters.quantity"
          hint=""
        ></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Период поставки данной детали"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.deliveryDateStart"
            hint="С "
          ></fish-date-picker>
        </fish-field>
        <fish-field span="12" name="date">
          <fish-date-picker
            v-model="parameters.deliveryDateEnd"
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
  name: "select-supplier",
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
      parameters: {
        type: null,
        detailID: null,
        quantity: null,
        deliveryDateStart: "",
        deliveryDateEnd: ""
      },
      data: []
    };
  },
  methods: {
    select: function() {
      const query =
        `http://localhost:8081/selectSupplierByParam` +
        `?type=${this.parameters.type}` +
        `&detailID=${this.parameters.detailID}` +
        `&quantity=${this.parameters.quantity}` +
        `&deliveryDateStart=${this.parameters.deliveryDateStart}` +
        `&deliveryDateEnd=${this.parameters.deliveryDateEnd}`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
