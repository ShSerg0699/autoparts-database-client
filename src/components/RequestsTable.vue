<template>
    <fish-layout class="requests" sider="l">
        <nav slot="header">
            <div class="logo">SQL запросы</div>
        </nav>
        <div slot="sider">
            <fish-menu mode="inline" style="width: 280px;">
                <fish-option index="0" content="Перечень поставщиков по параметрам" v-on:click="component = 'select-supplier'"></fish-option>
                <fish-option index="1" content="Сведения о конкретном виде деталей" v-on:click="component = 'select-detail-information'"></fish-option>
                <fish-option index="2" content="Перечень покупателей по параметрам" v-on:click="component = 'select-buyer'"></fish-option>
                <fish-option index="3" content="Сведения о деталях на складе" v-on:click="component = 'select-detail-in-stock'"></fish-option>
                <fish-option index="4" content="Топ самых продаваемых деталей" v-on:click="component = 'select-top-detail-in-purchase'"></fish-option>
                <fish-option index="5" content="Топ самых поставляемых деталей" v-on:click="component = 'select-top-detail-in-supply'"></fish-option>
                <fish-option index="6" content="Доля товара конкретного поставщика" v-on:click="component = 'select-specific-supplier-goods-share'"></fish-option>
                <fish-option index="7" content="Сведения о наклодных расходах" v-on:click="component = 'select-overhead'"></fish-option>
                <fish-option index="8" content="Перечень залежавшихся деталей" v-on:click="component = 'select-stockpiled-detail'"></fish-option>
                <fish-option index="9" content="Перечень реализованного товара" v-on:click="component = 'select-sold-detail'"></fish-option>
                <fish-option index="10" content="Кассовый отчёт за указанный период" v-on:click="component = 'select-cash-report'"></fish-option>
                <fish-option index="11" content="Инвентаризационная ведомость" v-on:click="component = 'select-inventory-list'"></fish-option>
                <fish-option index="12" content="Скорость продажи товара" v-on:click="component = 'select-detail-speed-sale'"></fish-option>
                <fish-option index="13" content="Перечень пустые ячейек на складе" v-on:click="component = 'select-empty-cell'"></fish-option>

            </fish-menu>
        </div>
        <div slot="content">
            <component v-bind:is="component"></component>
        </div>
    </fish-layout>
</template>

<script>
    import selectSupplierByParam from "./requests/SelectSupplierByParam"
    import selectDetailInformation from "./requests/SelectDetailInformation"
    import selectBuyerByParam from "./requests/SelectBuyerByParam"
    import selectDetailInStock from "./requests/SelectDetailInStock"
    import selectTopDetailInPurchase from "./requests/SelectTopDetailInPurchase"
    import selectTopDetailInSupply from "./requests/SelectTopDetailInSupply"
    import selectSpecificSupplierGoodsShare from "./requests/SelectSpecificSupplierGoodsShare"
    import selectOverhead from "./requests/SelectOverhead"
    import selectStockpiledDetail from "./requests/SelectStockpiledDetail"
    import selectSoldDetailByDate from "./requests/SelectSoldDetaiByDate"
    import selectCashReport from "./requests/SelectCashReport"
    import selectInventoryList from "./requests/SelectInventoryList"
    import selectDetailSpeedSale from "./requests/SelectDetailSpeedSale"
    import selectEmptyCell from "./requests/SelectEmptyCell"

    export default {
        name: "RequestsTable",
        components: {
            "select-supplier": selectSupplierByParam,
            "select-detail-information": selectDetailInformation,
            "select-buyer": selectBuyerByParam,
            "select-detail-in-stock": selectDetailInStock,
            "select-top-detail-in-purchase": selectTopDetailInPurchase,
            "select-top-detail-in-supply": selectTopDetailInSupply,
            "select-specific-supplier-goods-share": selectSpecificSupplierGoodsShare,
            "select-overhead": selectOverhead,
            "select-stockpiled-detail": selectStockpiledDetail,
            "select-sold-detail": selectSoldDetailByDate,
            "select-cash-report": selectCashReport,
            "select-inventory-list": selectInventoryList,
            "select-detail-speed-sale": selectDetailSpeedSale,
            "select-empty-cell": selectEmptyCell
        },
        data(){
            return {
                component: "select-supplier"
            }
        }
    }
</script>

<style>
    .fish.layout.requests > .header {
        padding: 0;
        background: #e0f0fa;
    }

    .fish.layout.requests .has-sider > .content {
        margin: 20px;
        padding: 0.7em 8em;
    }

    .fish.layout.requests .logo {
        padding: 1em;
    }

    .logo {
        padding: 0.7em .8em;
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>