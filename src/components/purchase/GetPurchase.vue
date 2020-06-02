<template>
    <div class="getPurchase">
        <h2>Посмотреть покупки</h2>
        <input type="text" v-model="id" placeholder="Введите ID покупки" />

        <button v-on:click="getPurchaseById(id)">Get by ID</button>
        <button v-on:click="getAllPurchase">Get all</button>
        <p>{{ data }}</p>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-purchase",
        data() {
            return {
                id: null,
                data: null
            }
        },
        methods: {
            getPurchaseById: function () {
                axios.get("http://localhost:8081/purchase?purchaseID=" + this.id).then(response => (this.data = response.data))
            },
            getAllPurchase: function () {
                axios.get("http://localhost:8081/purchaseAll").then(response => (this.data = response.data))
            }
        }
    };
</script>
