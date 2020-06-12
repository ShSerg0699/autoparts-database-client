<template>
    <fish-form ref="addCell">
        <h2>Добавить ячейку</h2>
        <fish-fields>
            <fish-field label="Введите размер ячейки" span="8">
                <fish-input-number v-model="postBody.space" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field>
                <fish-button type="primary" @click="addCell">Добавить</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "add-cell",
        data() {
            return {
                postBody: {
                    space: null
                },
                data: null
            }
        },
        methods: {
            addCell: function () {
                axios.post("http://localhost:8081/cellAdd", {space: this.postBody.space}).then(response => (this.data = response.data))
            }
        }
    };
</script>