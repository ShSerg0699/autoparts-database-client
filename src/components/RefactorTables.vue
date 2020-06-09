<template>
    <fish-layout class="tables" sider="l">
        <nav slot="header">
            <div class="logo">Таблицы</div>
        </nav>
        <div slot="sider">
            <fish-menu mode="inline" style="width: 200px;">
                <fish-submenu index="0" mode="inline">
                    <template slot="title">Покупатели</template>
                    <fish-option index="0-0" content="Добавить покупателя" v-on:click="component = 'add-buyer'"></fish-option>
                    <fish-option index="0-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="0-2" content="Удалить покупателя" v-on:click="component = 'drop-buyer'"></fish-option>
                </fish-submenu>
                <fish-submenu index="1" mode="inline">
                    <template slot="title">Ячейки на складе</template>
                    <fish-option index="1-0" content="Добавить ячейку" v-on:click="component = 'add-cell'"></fish-option>
                    <fish-option index="1-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="1-2" content="Удалить ячейку" v-on:click="component = ''"></fish-option>
                    <fish-option index="1-3" content="Добавить деталь в ячейку" v-on:click="component = ''"></fish-option>
                    <fish-option index="1-4" content="Удалить деталь из ячейки" v-on:click="component = ''"></fish-option>

                </fish-submenu>
                <fish-submenu index="2" mode="inline">
                    <template slot="title">Детали</template>
                    <fish-option index="2-0" content="Добавить деталь" v-on:click="component = 'add-detail'"></fish-option>
                    <fish-option index="2-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="2-2" content="Удалить деталь" v-on:click="component = ''"></fish-option>
                </fish-submenu>
                <fish-submenu index="3" mode="inline">
                    <template slot="title">Покупки</template>
                    <fish-option index="3-0" content="Добавить покупку" v-on:click="component = 'add-purchase'"></fish-option>
                    <fish-option index="3-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="3-2" content="Удалить покупку" v-on:click="component = ''"></fish-option>
                    <fish-option index="3-3" content="Добавить деталь в покупку" v-on:click="component = ''"></fish-option>
                    <fish-option index="3-4" content="Удалить деталь из покупки" v-on:click="component = ''"></fish-option>
                </fish-submenu>
                <fish-submenu index="4" mode="inline">
                    <template slot="title">Поставщики</template>
                    <fish-option index="4-0" content="Добавить поставщика" v-on:click="component = 'add-supplier'"></fish-option>
                    <fish-option index="4-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="4-2" content="Удалить поставщика" v-on:click="component = ''"></fish-option>
                </fish-submenu>
                <fish-submenu index="5" mode="inline">
                    <template slot="title">Поставки</template>
                    <fish-option index="5-0" content="Добавить поставку" v-on:click="component = 'add-supply'"></fish-option>
                    <fish-option index="5-1" content="Редактировать данные" v-on:click="component = ''"></fish-option>
                    <fish-option index="5-2" content="Удалить поставку" v-on:click="component = ''"></fish-option>
                </fish-submenu>
            </fish-menu>
        </div>
        <div slot="content">
            <component v-bind:is="component"></component>
        </div>
    </fish-layout>
</template>

<script>
    import addBuyer from "./buyer/AddBuyer.vue"
    import dropBuyer from "./buyer/DropBuyer.vue"
    import addCell from "./cell/AddCell.vue"
    import addDetail from "./detail/AddDetail.vue"
    import addPurchase from "./purchase/AddPurchase.vue"
    import addSupplier from "./supplier/AddSupplier"
    import addSupply from "./supply/AddSupply.vue"

    export default {
        name: "RefactorTables",
        components: {
            "add-buyer": addBuyer,
            "drop-buyer": dropBuyer,
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