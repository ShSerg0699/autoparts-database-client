<template>
  <div class="view">
    <Tables />
  </div>
</template>

<script>
import RequestsTable from "../components/RequestsTable";

export default {
  name: "ViewTables",
  components: {
    Tables: RequestsTable
  }
};
</script>
