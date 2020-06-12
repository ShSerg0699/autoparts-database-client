<template>
    <fish-form class="purchaseDropDetail">
        <h2>Удалить деталь из покупки</h2>
        <fish-field label="Введите ID покупки" span="8" name="purchaseID"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="purchaseID"></fish-input-number>
        </fish-field>
        <fish-field label="Введите ID детали" span="8" name="detailID"
                    :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="detailID"></fish-input-number>
        </fish-field>

        <fish-fields>
            <fish-field>
                <fish-button type="negative" @click="purchaseDropDetail">Удалить деталь</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>


<script>
    import axios from "axios";

    export default {
        name: "purchase-drop-detail",
        data() {
            return {
                purchaseID: null,
                detailID: null,
                data: null
            }
        },
        methods: {
            purchaseDropDetail: function () {
                axios.delete("http://localhost:8081/purchaseDropDetail?purchaseID=" + this.purchaseID + "&detailID=" + this.detailID).then(response => (this.data = response.data))
            }
        }
    };
</script>

