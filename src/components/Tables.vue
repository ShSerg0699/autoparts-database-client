<template>
  <div class="tables">
    <h1>{{ msg }}</h1>
    <input
      type="radio"
      v-bind:value="{ name: 'Tom', age: 22 }"
      v-model="user">
      <label>Tom</label>
      <input type="radio" v-bind:value="{name:'Bob', age:25}" v-model="user">
        <label>Bob</label>
      <input type="radio" v-bind:value="{name:'Sam', age:28}" v-model="user">
        <label>Sam</label>
      <span>Выбрано:{{user.name}} - {{user.age}}</span>
  </div>
</template>

<script>
export default {
  name: "Tables",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
