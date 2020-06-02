<template>
    <fish-form class="purchaseForm" ref="getPurchase">
        <h2>Покупки</h2>
        <fish-fields>
            <fish-field label="Введите ID покупки" span="8" name="purchaseID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="primary" @click="getPurchaseById(id)">Посмотреть покупку по id</fish-button>
            </fish-field>
            <fish-field class="allButton">
                <fish-button type="primary" @click="getAllPurchase">Посмотреть все покупки</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-purchase",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            getPurchaseById: function () {
                axios.get("http://localhost:8081/purchase?purchaseID=" + this.id).then(response => (this.data = response.data))
            },
            getAllPurchase: function () {
                axios.get("http://localhost:8081/purchaseAll").then(response => (this.data = response.data))
            }
        }
    };
</script>


<style scoped>
    .purchaseForm .idButton, .purchaseForm .allButton {
        display: grid;
        align-items: end;
    }
</style>