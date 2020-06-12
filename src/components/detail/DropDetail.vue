<template>
    <fish-form class="detailForm" ref="dropDetail">
        <h2>Удалить деталь</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8" name="detailID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="negative" @click="dropDetailById(id)">Удалить деталь по id</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "drop-detail",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            dropDetailById: function () {
                axios.delete("http://localhost:8081/detailDrop?detailID=" + this.id).then(response => (this.data = response.data))
            }
        }
    };
</script>

<style scoped>
    .detailForm .idButton {
        display: grid;
        align-items: end;
    }
</style>

