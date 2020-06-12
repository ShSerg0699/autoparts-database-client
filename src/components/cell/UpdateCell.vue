<template>
    <fish-form ref="updateCell">
        <h2>Редактировать данные о ячейке</h2>
        <fish-fields>
            <fish-field label="Введите ID ячейки" span="8">
                <fish-input-number v-model="postBody.id" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите размер ячейки" span="8">
                <fish-input-number v-model="postBody.space" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field>
                <fish-button type="primary" @click="updateCell">Обновить</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "update-cell",
        data() {
            return {
                postBody: {
                    id: null,
                    space: null
                },
                data: null
            }
        },
        methods: {
            updateCell: function () {
                axios.patch("http://localhost:8081/cellUpdate",
                    {
                        cellID: this.postBody.id,
                        space: this.postBody.space
                    }).then(response => (this.data = response.data))
            }
        }
    };
</script>