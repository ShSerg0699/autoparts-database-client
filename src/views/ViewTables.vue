<template>
  <div class="view">
    <Tables />
  </div>
</template>

<script>
import GetTables from "@/components/GetTables.vue";

export default {
  name: "ViewTables",
  components: {
    Tables: GetTables
  }
};
</script>
