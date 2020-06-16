<template>
    <fish-layout class="tables" sider="l">
        <nav slot="header">
            <div class="logo">Таблицы</div>
        </nav>
        <div slot="sider">
            <fish-menu mode="inline" style="width: 240px;">
                <fish-submenu index="0" mode="inline">
                    <template slot="title">Покупатели</template>
                    <fish-option index="0-0" content="Добавить покупателя"
                                 v-on:click="component = 'add-buyer'"></fish-option>
                    <fish-option index="0-1" content="Редактировать данные"
                                 v-on:click="component = 'update-buyer'"></fish-option>
                    <fish-option index="0-2" content="Удалить покупателя"
                                 v-on:click="component = 'drop-buyer'"></fish-option>
                </fish-submenu>
                <fish-submenu index="1" mode="inline">
                    <template slot="title">Ячейки на складе</template>
                    <fish-option index="1-0" content="Добавить ячейку"
                                 v-on:click="component = 'add-cell'"></fish-option>
                    <fish-option index="1-1" content="Редактировать данные"
                                 v-on:click="component = 'update-cell'"></fish-option>
                    <fish-option index="1-2" content="Удалить ячейку"
                                 v-on:click="component = 'drop-cell'"></fish-option>
                    <fish-option index="1-3" content="Добавить деталь в ячейку"
                                 v-on:click="component = 'cell-add-detail'"></fish-option>
                    <fish-option index="1-4" content="Удалить деталь из ячейки"
                                 v-on:click="component = 'cell-drop-detail'"></fish-option>

                </fish-submenu>
                <fish-submenu index="2" mode="inline">
                    <template slot="title">Детали</template>
                    <fish-option index="2-0" content="Добавить деталь"
                                 v-on:click="component = 'add-detail'"></fish-option>
                    <fish-option index="2-1" content="Редактировать данные"
                                 v-on:click="component = 'update-detail'"></fish-option>
                    <fish-option index="2-2" content="Удалить деталь"
                                 v-on:click="component = 'drop-detail'"></fish-option>
                </fish-submenu>
                <fish-submenu index="3" mode="inline">
                    <template slot="title">Покупки</template>
                    <fish-option index="3-0" content="Добавить покупку"
                                 v-on:click="component = 'add-purchase'"></fish-option>
                    <fish-option index="3-1" content="Редактировать данные"
                                 v-on:click="component = 'update-purchase'"></fish-option>
                    <fish-option index="3-2" content="Удалить покупку"
                                 v-on:click="component = 'drop-purchase'"></fish-option>
                    <fish-option index="3-3" content="Добавить деталь в покупку"
                                 v-on:click="component = 'purchase-add-detail'"></fish-option>
                    <fish-option index="3-4" content="Удалить деталь из покупки"
                                 v-on:click="component = 'purchase-drop-detail'"></fish-option>
                </fish-submenu>
                <fish-submenu index="4" mode="inline">
                    <template slot="title">Поставщики</template>
                    <fish-option index="4-0" content="Добавить поставщика"
                                 v-on:click="component = 'add-supplier'"></fish-option>
                    <fish-option index="4-1" content="Редактировать данные"
                                 v-on:click="component = 'update-supplier'"></fish-option>
                    <fish-option index="4-2" content="Удалить поставщика"
                                 v-on:click="component = 'drop-supplier'"></fish-option>
                    <fish-option index="4-3" content="Добавить деталь в прайс-лист"
                                 v-on:click="component = 'supplier-add-detail'"></fish-option>
                    <fish-option index="4-4" content="Удалить деталь из прайс-листа"
                                 v-on:click="component = 'supplier-drop-detail'"></fish-option>
                </fish-submenu>
                <fish-submenu index="5" mode="inline">
                    <template slot="title">Поставки</template>
                    <fish-option index="5-0" content="Добавить поставку"
                                 v-on:click="component = 'add-supply'"></fish-option>
                    <fish-option index="5-1" content="Редактировать данные"
                                 v-on:click="component = 'update-supply'"></fish-option>
                    <fish-option index="5-2" content="Удалить поставку"
                                 v-on:click="component = 'drop-supply'"></fish-option>
                </fish-submenu>
            </fish-menu>
        </div>
        <div slot="content">
            <component v-bind:is="component"></component>
        </div>
    </fish-layout>
</template>

<script>
    import addBuyer from "./buyer/AddBuyer"
    import updateBuyer from "./buyer/UpdateBuyer"
    import dropBuyer from "./buyer/DropBuyer"
    import addCell from "./cell/AddCell"
    import updateCell from "./cell/UpdateCell"
    import cellAddDetail from "./cell/CellAddDetail"
    import cellDropDetail from "./cell/CellDropDetail"
    import dropCell from "./cell/DropCell"
    import addDetail from "./detail/AddDetail"
    import updateDetail from "./detail/UpdateDetail"
    import dropDetail from "./detail/DropDetail"
    import addPurchase from "./purchase/AddPurchase"
    import updatePurchase from "./purchase/UpdatePurchase"
    import purchaseAddDetail from "./purchase/PurchaseAddDetail"
    import purchaseDropDetail from "./purchase/PurchaseDropDetail"
    import dropPurchase from "./purchase/DropPurchase"
    import addSupplier from "./supplier/AddSupplier"
    import updateSupplier from "./supplier/UpdateSupplier"
    import dropSupplier from "./supplier/DropSupplier"
    import supplierAddDetail from "./supplier/SupplierAddDetail"
    import supplierDropDetail from "./supplier/SupplierDropDetail"
    import addSupply from "./supply/AddSupply"
    import updateSupply from "./supply/UpdateSupply"
    import dropSupply from "./supply/DropSupply"

    export default {
        name: "RefactorTables",
        components: {
            "add-buyer": addBuyer,
            "update-buyer": updateBuyer,
            "drop-buyer": dropBuyer,
            "add-cell": addCell,
            "update-cell": updateCell,
            "drop-cell": dropCell,
            "cell-add-detail": cellAddDetail,
            "cell-drop-detail": cellDropDetail,
            "add-detail": addDetail,
            "update-detail": updateDetail,
            "drop-detail": dropDetail,
            "add-purchase": addPurchase,
            "update-purchase": updatePurchase,
            "drop-purchase": dropPurchase,
            "purchase-add-detail": purchaseAddDetail,
            "purchase-drop-detail": purchaseDropDetail,
            "add-supplier": addSupplier,
            "update-supplier": updateSupplier,
            "drop-supplier": dropSupplier,
            "supplier-add-detail": supplierAddDetail,
            "supplier-drop-detail": supplierDropDetail,
            "add-supply": addSupply,
            "update-supply": updateSupply,
            "drop-supply": dropSupply
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
        padding: 0.7em 5em;
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