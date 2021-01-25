<template>
  <fish-form ref="updateBuyer">
    <h2>Редактировать данные о покупателе</h2>
    <fish-fields>
      <fish-field label="Введите ID покупателя" span="8">
        <fish-input-number v-model="postBody.id" hint=""></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Введите имя покупателя" span="8">
        <fish-input v-model="postBody.name" hint=""></fish-input>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field>
        <fish-button type="primary" @click="updateBuyer">Обновить</fish-button>
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "update-buyer",
  data() {
    return {
      postBody: {
        id: null,
        name: null
      },
      data: null
    };
  },
  methods: {
    updateBuyer: function() {
      axios
        .patch("http://localhost:8081/buyerUpdate", {
          buyerID: this.postBody.id,
          name: this.postBody.name
        })
        .then(response => (this.data = response.data));
    }
  }
};
</script>
