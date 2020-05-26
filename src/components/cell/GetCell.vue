<template>
    <div class="getCell">
        <h2>Cell</h2>
        <input type="text" v-model="id" placeholder="Введите ID покупателя" />

        <button v-on:click="getCellById(id)">Get by ID</button>
        <button v-on:click="getAllCell">Get all</button>
        <p>{{ data }}</p>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-cell",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            getCellById: function () {
                axios.get("http://localhost:8081/cell?cellID=" + this.id).then(response => (this.data = response.data))
            },
            getAllCell: function () {
                axios.get("http://localhost:8081/cellAll").then(response => (this.data = response.data))
            }
        }
    };
</script>
