<template>
    <fish-form ref="selectEmptyCell">
        <h2>Перечень пустых ячеек на складе</h2>

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
        name: "select-empty-cell",
        data() {
            return {
                page: {total: 10, current: 1},
                columns: [
                    {title: 'Cell ID', key: 'cellID'},
                    {title: 'Space', key: 'space'},
                ],
                data: []
            }
        },
        methods: {
            select: function () {
                const query = `http://localhost:8081/selectEmptyCell`;
                axios.get(query)
                    .then(response => (this.data = response.data))
            }
        }
    };
</script>