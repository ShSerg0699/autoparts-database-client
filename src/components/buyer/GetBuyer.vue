<template>
  <div class="getBuyer">
    <h2>Buyer</h2>
    <input type="text" v-model="id" placeholder="Введите ID покупателя" />

    <button v-on:click="getBuyerById(id)">Get by ID</button>
    <button v-on:click="getAllBuyer">Get all</button>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "get-buyer",
  data() {
    return {
      id: null,
      data: null
    }
  },
  methods: {
    getBuyerById: function () {
      axios.get("http://localhost:8081/buyer?buyerID=" + this.id).then(response => (this.data = response.data))
    },
    getAllBuyer: function () {
      axios.get("http://localhost:8081/buyerAll").then(response => (this.data = response.data))
    }
  }
};
</script>
