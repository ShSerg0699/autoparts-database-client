<template>
    <fish-form class="supplierDropDetail">
        <h2>Удалить деталь из прайс-листа</h2>
        <fish-field label="Введите ID поставщика" span="8" name="supplierID"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="supplierID"></fish-input-number>
        </fish-field>
        <fish-field label="Введите ID детали" span="8" name="detailID"
                    :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-input-number v-model="detailID"></fish-input-number>
        </fish-field>

        <fish-fields>
            <fish-field>
                <fish-button type="negative" @click="supplierDropDetail">Удалить деталь</fish-button>
            </fish-field>
        </fish-fields>
        <p>{{ data }}</p>
    </fish-form>
</template>


<script>
    import axios from "axios";

    export default {
        name: "supplier-drop-detail",
        data() {
            return {
                supplierID: null,
                detailID: null,
                data: null
            }
        },
        methods: {
            supplierDropDetail: function () {
                axios.delete("http://localhost:8081/supplierDropDetail?supplierID=" + this.supplierID + "&detailID=" + this.detailID).then(response => (this.data = response.data))
            }
        }
    };
</script>

