<template>
    <fish-form class="purchaseAddDetail">
        <h2>Добавить деталь в покупку</h2>
        <fish-field label="Введите ID покупки" span="8" name="purchaseID"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="id"></fish-input-number>
        </fish-field>
        <fish-field label="Введите ID детали" span="8" name="detailID"
                    :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="postBody.detailID"></fish-input-number>
        </fish-field>
        <fish-field label="Введите количество" span="8" name="count"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number min="0" max="1000"
                               v-model="postBody.quantity"></fish-input-number>
        </fish-field>

        <fish-fields>
            <fish-field>
                <fish-button type="primary" @click="purchaseAddDetail">Добавить деталь</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>


<script>
    import axios from "axios";

    export default {
        name: "purchase-add-detail",
        data() {
            return {
                id: null,
                postBody: {
                    detailID: null,
                    quantity: null
                },
                data: null
            }
        },
        methods: {
            purchaseAddDetail: function () {
                axios.post("http://localhost:8081/purchaseAddDetail?purchaseID=" + this.id,
                    {
                        detailID: this.postBody.detailID,
                        quantity: this.postBody.quantity
                    }).then(response => (this.data = response.data))
            }
        }
    };
</script>
