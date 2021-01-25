<template>
  <fish-form class="cellDropDetail">
    <h2>Удалить деталь из ячейки</h2>
    <fish-field
      label="Введите ID ячейки"
      span="8"
      name="cellID"
      :rules="[
        { required: true, message: 'данное поле не должно быть пустым' }
      ]"
    >
      <fish-input-number v-model="cellID"></fish-input-number>
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

    <fish-fields>
      <fish-field>
        <fish-button type="negative" @click="cellDropDetail"
          >Удалить деталь</fish-button
        >
      </fish-field>
    </fish-fields>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "cell-drop-detail",
  data() {
    return {
      cellID: null,
      detailID: null,
      data: null
    };
  },
  methods: {
    cellDropDetail: function() {
      axios
        .delete(
          "http://localhost:8081/cellDropDetail?cellID=" +
            this.cellID +
            "&detailID=" +
            this.detailID
        )
        .then(response => (this.data = response.data));
    }
  }
};
</script>
