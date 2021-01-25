<template>
  <fish-form ref="selectSpecificsSupplierGoodsShare">
    <h2>Доля товара конкретного поставщика от общего оборота в процентах</h2>
    <fish-fields>
      <fish-field
        label="Введите ID поставщика"
        span="8"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number
          v-model="parameters.supplierID"
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
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "select-specific-supplier-goods-share",
  data() {
    return {
      parameters: {
        supplierID: null,
        deliveryDateStart: "",
        deliveryDateEnd: ""
      },
      data: null
    };
  },
  methods: {
    select: function() {
      const query =
        `http://localhost:8081/selectSpecificSupplierGoodsShare` +
        `?supplierID=${this.parameters.supplierID}` +
        `&deliveryDateStart=${this.parameters.deliveryDateStart}` +
        `&deliveryDateEnd=${this.parameters.deliveryDateEnd}`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
