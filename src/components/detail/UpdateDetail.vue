<template>
    <fish-form ref="addDetail">
        <h2>Редактировать данные о детале</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8">
                <fish-input-number v-model="postBody.id" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите название детали" span="8">
                <fish-input v-model="postBody.name" hint=""></fish-input>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите цену" span="8">
                <fish-input-number v-model="postBody.price" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите размер" span="8">
                <fish-input-number v-model="postBody.size" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field>
                <fish-button type="primary" @click="updateDetail">Обновить</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "update-detail",
        data() {
            return {
                postBody: {
                    id: null,
                    name: null,
                    price: null,
                    size: null
                },
                data: null
            }
        },
        methods: {
            updateDetail: function () {
                axios.patch("http://localhost:8081/detailUpdate", {
                    detailID: this.postBody.id,
                    name: this.postBody.name,
                    price: this.postBody.price,
                    size: this.postBody.size
                }).then(response => (this.data = response.data))
            }
        }
    };
</script>