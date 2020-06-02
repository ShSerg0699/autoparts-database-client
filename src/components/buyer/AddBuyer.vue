<template>
    <div class="addBuyer">
        <h2>Buyer</h2>
        <p>Введите имя покупателя</p>
        <input type="text" v-model="name"/>

        <button v-on:click="addBuyer(name)">Enter</button>
        <p>{{ data }}</p>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                postBody: {
                    name: null
                },
                data: null
            }
        },
        methods: {
            addBuyer: function () {
                axios.post("http://localhost:8081/buyerAdd", {name: this.name})
            }
        }
    };
</script>