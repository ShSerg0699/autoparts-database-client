<template>
    <fish-form class="purchaseForm" ref="dropPurchase">
        <h2>Удалить покупку</h2>
        <fish-fields>
            <fish-field label="Введите ID покупки" span="8" name="purchaseID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="negative" @click="dropPurchaseById(id)">Удалить покупку по id</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "drop-purchase",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            dropPurchaseById: function () {
                axios.delete("http://localhost:8081/purchaseDrop?purchaseID=" + this.id).then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .purchaseForm .idButton {
        display: grid;
        align-items: end;
    }
</style>

