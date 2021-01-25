<template>
  <fish-form class="purchaseForm" ref="updatePurchase">
    <h2>Редактировать данные о покупке</h2>
    <fish-fields>
      <fish-field
        label="Введите ID покпкуи"
        span="12"
        name="buyerID"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number v-model="postBody.id"></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-field
      label="Введите дату покупки"
      span="12"
      name="date"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-date-picker
        v-model="postBody.purchaseDate"
        hint=""
      ></fish-date-picker>
    </fish-field>
    <fish-fields>
      <fish-field
        label="Введите ID покупателя"
        span="12"
        name="buyerID"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number v-model="postBody.buyer.buyerID"></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-button type="positive" @click="addDetail"
        >добавить деталь</fish-button
      >
    </fish-fields>

    <fish-fields
      v-bind:key="index"
      v-for="(detail, index) in postBody.detailList"
    >
      <fish-field
        label="Введите ID детали"
        span="12"
        name="detailID"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number v-model="detail.detailID"></fish-input-number>
      </fish-field>
      <fish-field
        label="Введите количество"
        name="count"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input-number
          min="0"
          max="1000"
          v-model="detail.quantity"
        ></fish-input-number>
      </fish-field>
      <fish-field class="dropDetail">
        <fish-button type="negative" @click="deleteDetail(index)"
          >убрать деталь</fish-button
        >
      </fish-field>
    </fish-fields>

    <fish-button type="primary" @click="submitHandler">Обновить</fish-button>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "update-purchase",
  data() {
    return {
      postBody: {
        id: null,
        purchaseDate: "",
        buyer: {
          buyerID: ""
        },
        detailList: [
          {
            detailID: null,
            quantity: null
          }
        ]
      },
      data: null
    };
  },
  methods: {
    submitHandler() {
      axios
        .patch("http://localhost:8081/purchaseUpdate", {
          purchaseID: this.postBody.id,
          purchaseDate: this.postBody.purchaseDate,
          buyer: {
            buyerID: this.postBody.buyer.buyerID
          },
          detailList: this.postBody.detailList
        })
        .then(response => (this.data = response.data));
    },
    addDetail() {
      this.postBody.detailList.push({
        supplierID: null,
        quantity: null
      });
    },
    deleteDetail(index) {
      this.postBody.detailList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.purchaseForm .dropDetail {
  display: grid;
  align-items: end;
}
</style>
