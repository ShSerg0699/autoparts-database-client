<template>
    <fish-form class="buyerForm" ref="dropBuyer">
        <h2>Удалить покупателя</h2>
        <fish-fields>
            <fish-field label="Введите ID покупателя" span="8" name="buyerID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="primary" @click="dropBuyerById(id)">Удалить покупателя по id</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "drop-buyer",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            dropBuyerById: function () {
                axios.get("http://localhost:8081/buyerDrop?buyerID=" + this.id).then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .buyerForm .idButton {
        display: grid;
        align-items: end;
    }
</style>

