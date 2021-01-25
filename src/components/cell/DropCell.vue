<template>
  <fish-form class="cellForm" ref="dropCell">
    <h2>Удалить ячейку</h2>
    <fish-fields>
      <fish-field label="Введите ID ячейки" span="8" name="cellID">
        <fish-input-number v-model="id"></fish-input-number>
      </fish-field>
      <fish-field class="idButton">
        <fish-button type="negative" @click="dropCellById(id)"
          >Удалить ячейку по id</fish-button
        >
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "drop-cell",
  data() {
    return {
      id: null,
      data: null
    };
  },
  methods: {
    dropCellById: function() {
      axios
        .delete("http://localhost:8081/cellDrop?cellID=" + this.id)
        .then(response => (this.data = response.data));
    }
  }
};
</script>

<style scoped>
.cellForm .idButton {
  display: grid;
  align-items: end;
}
</style>
