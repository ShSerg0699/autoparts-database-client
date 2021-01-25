<template>
  <fish-form class="supplyForm" ref="dropSupply">
    <h2>Удалить поставку</h2>
    <fish-fields>
      <fish-field label="Введите ID поставки" span="8" name="supplyID">
        <fish-input-number v-model="id"></fish-input-number>
      </fish-field>
      <fish-field class="idButton">
        <fish-button type="negative" @click="dropSupplyById(id)"
          >Удалить поставку по id</fish-button
        >
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "drop-supply",
  data() {
    return {
      id: null,
      data: null
    };
  },
  methods: {
    dropSupplyById: function() {
      axios
        .delete("http://localhost:8081/supplyDrop?supplyID=" + this.id)
        .then(response => (this.data = response.data));
    }
  }
};
</script>

<style scoped>
.supplyForm .idButton {
  display: grid;
  align-items: end;
}
</style>
