<template>
    <fish-form class="detailForm" ref="getDetail">
        <h2>Детали</h2>
        <fish-fields>
            <fish-field label="Введите ID детали" span="8" name="detailID">
                <fish-input-number v-model="id"></fish-input-number>
            </fish-field>
            <fish-field class="idButton">
                <fish-button type="primary" @click="getDetailById(id)">Посмотреть деталь по id</fish-button>
            </fish-field>
            <fish-field class="allButton">
                <fish-button type="primary" @click="getAllDetail">Посмотреть все детали</fish-button>
            </fish-field>
        </fish-fields>
        <fish-table :columns="columns" :data="data" :pagination="page" @change="changeHandler"></fish-table>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-detail",
        data() {
            return {
                page: {total: 10, current: 1},
                columns: [
                    {title: 'ID', key: 'detailID', sortable: true},
                    {title: 'Name', key: 'name', sortable: true},
                    {title: 'Price', key: 'price', sortable: true},
                    {title: 'Size', key: 'size', sortable: true}
                ],
                id: null,
                data: [],
                oldData: this.data
            }
        },
        methods: {
            getDetailById: function () {
                axios.get("http://localhost:8081/detail?detailID=" + this.id).then(response => (this.data = [response.data]))
            },
            getAllDetail: function () {
                axios.get("http://localhost:8081/detailAll").then(response => (this.data = response.data))
            },
            changeHandler (pagination, filters, sorter) {
                let nData = this.oldData
                for (let key of Object.keys(filters)) {
                    nData = nData.filter((item) => filters[key].includes(item[key]))
                }
                if (sorter) {
                    nData.sort((a, b) => {
                        let bv = b[sorter.key] + ''
                        let av = a[sorter.key] + ''
                        return sorter.by === 'desc' ? bv.localeCompare(av) : av.localeCompare(bv)
                    })
                }

                this.data = nData
            }
        }
    };
</script>

<style scoped>
    .detailForm .idButton, .detailForm .allButton {
        display: grid;
        align-items: end;
    }
</style>