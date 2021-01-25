<template>
  <fish-form class="supplierAddDetail">
    <h2>Добавить деталь в прайс-лист</h2>
    <fish-field
      label="Введите ID поставщика"
      span="8"
      name="supplierID"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="supplierID"></fish-input-number>
    </fish-field>
    <fish-field
      label="Введите ID детали"
      span="8"
      name="detailID"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="detailID"></fish-input-number>
    </fish-field>
    <fish-field
      label="Введите цену поставщика"
      span="8"
      name="count"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="price"></fish-input-number>
    </fish-field>

    <fish-fields>
      <fish-field>
        <fish-button type="primary" @click="supplierAddDetail"
          >Добавить деталь</fish-button
        >
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "supplier-add-detail",
  data() {
    return {
      supplierID: null,
      detailID: null,
      price: null,
      data: null
    };
  },
  methods: {
    supplierAddDetail: function() {
      axios
        .post(
          "http://localhost:8081/supplierAddDetail?supplierID=" +
            this.supplierID +
            "&detailID=" +
            this.detailID +
            "&price=" +
            this.price
        )
        .then(response => (this.data = response.data));
    }
  }
};
</script>
