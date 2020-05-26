<template>
  <div class="tables">
    <h1>{{ msg }}</h1>
    <button
      v-on:click="component = 'get-buyer'">buyer</button>

    <button
          v-on:click="component = 'get-cell'">cell</button>

      <component v-bind:is="component"></component>
  </div>
</template>

<script>
import getBuyer from "@/components/buyer/GetBuyer.vue"
import getCell from "@/components/cell/GetCell.vue"
import getDetail from "@/components/detail/GetDetail.vue"
import getPurchase from "@/components/purchase/GetPurchase.vue"
import getSupplier from "@/components/supplier/GetSupplier.vue"
import getSupply from "@/components/supply/GetSupply.vue"


export default {
  name: "Tables",
  props: {
    msg: String
  },
  components: {
    "get-buyer": getBuyer,
    "get-cell": getCell,
    "get-detail": getDetail,
    "get-purchase": getPurchase,
    "get-supplier": getSupplier,
    "get-supply": getSupply
  },
  data(){
    return{
        component: "get-buyer"
    }
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
