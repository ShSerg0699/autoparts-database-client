<template>
    <fish-form class="buyerForm" ref="getBuyer">
        <h2>Покупатели</h2>
        <fish-fields>
            <fish-field label="Введите ID покупателя" span="8" name="buyerID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="primary" @click="getBuyerById(id)">Посмотреть покупателя по id</fish-button>
            </fish-field>
            <fish-field class="allButton">
                <fish-button type="primary" @click="getAllBuyer">Посмотреть всех покупателей</fish-button>
            </fish-field>
        </fish-fields>
        <fish-field>
            <fish-table :columns="columns" :data="data" :pagination="page"></fish-table>
        </fish-field>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-buyer",
        data() {
            return {
                page: {total: 10, current: 1},
                columns: [
                    {title: 'ID', key: 'buyerID'},
                    {title: 'Name', key: 'name'}
                ],
                id: null,
                data: []
            }
        },
        methods: {
            getBuyerById: function () {
                axios.get("http://localhost:8081/buyer?buyerID=" + this.id).then(response => (this.data = [response.data]))
            },
            getAllBuyer: function () {
                axios.get("http://localhost:8081/buyerAll").then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .buyerForm .idButton, .buyerForm .allButton {
        display: grid;
        align-items: end;
    }
</style>

