<template>
  <fish-form ref="selectOverhead">
    <h2>Сведения о накладных расходах в процентах</h2>

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
  name: "select-overhead",
  data() {
    return {
      data: null
    };
  },
  methods: {
    select: function() {
      const query = `http://localhost:8081/selectOverhead`;
      axios.get(query).then(response => (this.data = response.data));
    }
  }
};
</script>
