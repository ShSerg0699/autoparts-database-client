<template>
    <fish-form ref="addDetail">
        <h2>Добавить деталь</h2>
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
                <fish-button type="primary" @click="addDetail">Добавить</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "add-detail",
        data() {
            return {
                postBody: {
                    name: null,
                    price: null,
                    size: null
                },
                data: null
            }
        },
        methods: {
            addDetail: function () {
                axios.post("http://localhost:8081/detailAdd", {
                    name: this.postBody.name,
                    price: this.postBody.price,
                    size: this.postBody.size})
            }
        }
    };
</script>