<template>
  <fish-form ref="addBuyer">
    <h2>Добавить покупателя</h2>
    <fish-fields>
      <fish-field
        label="Введите имя покупателя"
        span="8"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input v-model="postBody.name" hint=""></fish-input>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field>
        <fish-button type="primary" @click="addBuyer">Добавить</fish-button>
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "add-buyer",
  data() {
    return {
      postBody: {
        name: null
      },
      data: null
    };
  },
  methods: {
    addBuyer: function() {
      axios
        .post("http://localhost:8081/buyerAdd", { name: this.postBody.name })
        .then(response => (this.data = response.data));
    }
  }
};
</script>
