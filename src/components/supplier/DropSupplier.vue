<template>
    <fish-form class="supplierForm" ref="dropSupplier">
        <h2>Удалить поставщика</h2>
        <fish-fields>
            <fish-field label="Введите ID поставщика" span="8" name="supplierID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="negative" @click="dropSupplierById(id)">Удалить поставщика по id</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "drop-supplier",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            dropSupplierById: function () {
                axios.delete("http://localhost:8081/supplierDrop?supplierID=" + this.id).then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .supplierForm .idButton {
        display: grid;
        align-items: end;
    }
</style>

