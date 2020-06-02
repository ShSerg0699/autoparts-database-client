<template>
    <fish-layout class="tables" sider="l">
        <nav slot="header">
            <div class="logo">Таблицы</div>
        </nav>
        <div slot="sider">
            <fish-menu mode="inline" style="width: 200px;">
                <fish-option index="0" content="Покупатели" v-on:click="component = 'add-buyer'"></fish-option>
                <fish-option index="1" content="Ячейки на складе" v-on:click="component = 'add-cell'"></fish-option>
                <fish-option index="2" content="Детали" v-on:click="component = 'add-detail'"></fish-option>
                <fish-option index="3" content="Покупки" v-on:click="component = 'add-purchase'"></fish-option>
                <fish-option index="4" content="Поставщики" v-on:click="component = 'add-supplier'"></fish-option>
                <fish-option index="5" content="Поставки" v-on:click="component = 'add-supply'"></fish-option>
            </fish-menu>
        </div>
        <div slot="content">
            <component v-bind:is="component"></component>
        </div>
    </fish-layout>
</template>

<script>
    import addBuyer from "./buyer/AddBuyer.vue"
    import addCell from "./cell/AddCell.vue"
    import addDetail from "./detail/AddDetail.vue"
    import addPurchase from "./purchase/AddPurchase.vue"
    import addSupplier from "./supplier/AddSupplier"
    import addSupply from "./supply/AddSupply.vue"

    export default {
        name: "RefactorTables",
        components: {
            "add-buyer": addBuyer,
            "add-cell": addCell,
            "add-detail": addDetail,
            "add-purchase": addPurchase,
            "add-supplier": addSupplier,
            "add-supply": addSupply
        },
        data() {
            return {
                component: "add-buyer"
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