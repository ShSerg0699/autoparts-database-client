<template>
  <div class="edit">
    <Tables />
  </div>
</template>

<script>
    import RefactorTables from "@/components/RefactorTables.vue";

    export default {
        name: "Edit",
        components: {
            Tables: RefactorTables
        }
    };
</script>
