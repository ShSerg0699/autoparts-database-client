<template>
  <fish-form class="cellAddDetail">
    <h2>Добавить деталь в ячейку</h2>
    <fish-field
      label="Введите ID ячейки"
      span="8"
      name="cellID"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="id"></fish-input-number>
    </fish-field>
    <fish-field
      label="Введите ID детали"
      span="8"
      name="detailID"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="postBody.detailID"></fish-input-number>
    </fish-field>
    <fish-field
      label="Введите количество"
      span="8"
      name="count"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number
        min="0"
        max="1000"
        v-model="postBody.quantity"
      ></fish-input-number>
    </fish-field>
    <fish-field
      label="Дата появления на складе"
      span="8"
      name="date"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-date-picker
        v-model="postBody.appearanceDate"
        hint=""
      ></fish-date-picker>
    </fish-field>
    <fish-fields>
      <fish-field>
        <fish-button type="primary" @click="cellAddDetail"
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
  name: "cell-add-detail",
  data() {
    return {
      id: null,
      postBody: {
        detailID: null,
        quantity: null,
        appearanceDate: ""
      },
      data: null
    };
  },
  methods: {
    cellAddDetail: function() {
      axios
        .post("http://localhost:8081/cellAddDetail?cellID=" + this.id, {
          detailID: this.postBody.detailID,
          quantity: this.postBody.quantity,
          appearanceDate: this.postBody.appearanceDate
        })
        .then(response => (this.data = response.data));
    }
  }
};
</script>
