<template>
    <div class="tables">
        <h1>Таблицы:</h1>
        <button
                v-on:click="component = 'get-buyer'">buyer
        </button>
        <br>
        <button
                v-on:click="component = 'add-buyer'">addBuyer
        </button>
        <br>
        <button
                v-on:click="component = 'get-cell'">cell
        </button>
        <br>
        <button
                v-on:click="component = 'get-detail'">detail
        </button>
        <br>
        <button
                v-on:click="component = 'get-purchase'">purchase
        </button>
        <br>
        <button
                v-on:click="component = 'get-supplier'">supplier
        </button>
        <br>
        <button
                v-on:click="component = 'get-supply'">supply
        </button>
        <br>

        <component v-bind:is="component"></component>

    </div>
</template>

<script>
    import getBuyer from "./buyer/GetBuyer.vue"
    import addBuyer from "./buyer/AddBuyer.vue"
    import getCell from "./cell/GetCell.vue"
    import getDetail from "./detail/GetDetail.vue"
    import getPurchase from "./purchase/GetPurchase.vue"
    import getSupplier from "./supplier/GetSupplier"
    import getSupply from "./supply/GetSupply.vue"

    export default {
        name: "Tables",
        components: {
            "get-buyer": getBuyer,
            "add-buyer": addBuyer,
            "get-cell": getCell,
            "get-detail": getDetail,
            "get-purchase": getPurchase,
            "get-supplier": getSupplier,
            "get-supply": getSupply
        },
        data() {
            return {
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
