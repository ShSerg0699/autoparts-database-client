<template>
    <fish-form ref="selectDetailInformation">
        <h2>Сведения о конкретном виде деталей</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8"
                        :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input v-model="parameters.detailID" hint=""></fish-input>
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
        name: "select-detail-information",
        data() {
            return {
                page: {total: 10, current: 1},
                columns: [
                    {title: 'SupplierID', key: 'supplierID'},
                    {title: 'Supplier Name', key: 'supplierName'},
                    {title: 'Price', key: 'price'},
                    {title: 'Delivery Time', key: 'deliveryTime'}
                ],
                parameters: {
                    detailID: null
                },
                data: []
            }
        },
        methods: {
            select: function () {
                const query = `http://localhost:8081/selectDetailInformation` +
                    `?detailID=${this.parameters.detailID}`;
                axios.get(query)
                    .then(response => (this.data = response.data))
            }
        }
    };
</script>