<template>
    <fish-layout class="tables" sider="l">
        <nav slot="header">
            <div class="logo">Таблицы</div>
        </nav>
        <div slot="sider">
            <fish-menu mode="inline" style="width: 200px;">
                <fish-option index="0" content="Покупатели" v-on:click="component = 'get-buyer'"></fish-option>
                <fish-option index="1" content="Ячейки на складе" v-on:click="component = 'get-cell'"></fish-option>
                <fish-option index="2" content="Детали" v-on:click="component = 'get-detail'"></fish-option>
                <fish-option index="3" content="Покупки" v-on:click="component = 'get-purchase'"></fish-option>
                <fish-option index="4" content="Поставщики" v-on:click="component = 'get-supplier'"></fish-option>
                <fish-option index="5" content="Поставки" v-on:click="component = 'get-supply'"></fish-option>
            </fish-menu>
        </div>
        <div slot="content">
            <component v-bind:is="component"></component>
        </div>
    </fish-layout>
</template>

<script>
    import getBuyer from "./buyer/GetBuyer.vue"
    import getCell from "./cell/GetCell.vue"
    import getDetail from "./detail/GetDetail.vue"
    import getPurchase from "./purchase/GetPurchase.vue"
    import getSupplier from "./supplier/GetSupplier"
    import getSupply from "./supply/GetSupply.vue"

    export default {
        name: "GetTables",
        components: {
            "get-buyer": getBuyer,
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
<style>
    .fish.layout.tables > .header {
        padding: 0;
        background: #e0f0fa;
    }
    .fish.layout.tables .has-sider > .content {
        margin: 20px;
        padding: 0.7em 1em;
    }
    .fish.layout.tables .logo {
        padding: 1em;
    }
    .logo {
        padding: 0.7em .8em;
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
