<template>
    <fish-form class="detailForm" ref="getDetail">
        <h2>Детали</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8" name="detailID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="primary" @click="getDetailById(id)">Посмотреть деталь по id</fish-button>
            </fish-field>
            <fish-field class="allButton">
                <fish-button type="primary" @click="getAllDetail">Посмотреть все детали</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-detail",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            getDetailById: function () {
                axios.get("http://localhost:8081/detail?detailID=" + this.id).then(response => (this.data = response.data))
            },
            getAllDetail: function () {
                axios.get("http://localhost:8081/detailAll").then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .detailForm .idButton, .detailForm .allButton {
        display: grid;
        align-items: end;
    }
</style>