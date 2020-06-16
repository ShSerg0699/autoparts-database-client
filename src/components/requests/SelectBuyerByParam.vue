<template>
    <fish-form ref="selectBuyerByParam">
        <h2>Перечень покупателей по параметрам</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8"
                        :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="parameters.detailID" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите количество, купленных деталей" span="8"
                        :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="parameters.quantity" hint=""></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
        <fish-field label="Период покупки данной детали"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-field span="12" name="date">
                <fish-date-picker v-model="parameters.purchaseDateStart" hint="С"></fish-date-picker>
            </fish-field>
            <fish-field span="12" name="date">
                <fish-date-picker v-model="parameters.purchaseDateEnd" hint="До"></fish-date-picker>
            </fish-field>
        </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field>
                <fish-button type="primary" @click="select">Показать</fish-button>
            </fish-field>
        </fish-fields>
        <fish-field>
            <fish-table :columns="columns" :data="data" :pagination="page"></fish-table>
        </fish-field>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "select-buyer",
        data() {
            return {
                page: {total: 10, current: 1},
                columns: [
                    {title: 'ID', key: 'buyerID'},
                    {title: 'Name', key: 'name'}
                ],
                parameters: {
                    detailID: null,
                    quantity: null,
                    purchaseDateStart: '',
                    purchaseDateEnd: ''
                },
                data: []
            }
        },
        methods: {
            select: function () {
                const query = `http://localhost:8081/selectBuyerByParam` +
                    `?detailID=${this.parameters.detailID}` +
                    `&quantity=${this.parameters.quantity}` +
                    `&purchaseDateStart=${this.parameters.purchaseDateStart}` +
                    `&purchaseDateEnd=${this.parameters.purchaseDateEnd}`;
                axios.get(query)
                    .then(response => (this.data = response.data))
            }
        }
    };
</script>