<template>
  <div class="home">
    <img alt="Autoparts logo" src="../assets/auto_parts.png" />
    <HelloWorld msg="Welcome to Autoparts database" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
