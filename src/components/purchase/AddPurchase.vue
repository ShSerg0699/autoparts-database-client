<template>
    <fish-form class="purchaseForm" ref="addPurchase">
        <h2>Добавить покупку {{postBody.detailList[0].detailID}}</h2>
        <fish-field label="Дата покупки" span="12" name="date"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-date-picker v-model="postBody.purchaseDate" hint=""></fish-date-picker>
        </fish-field>
        <fish-fields>
            <fish-field label="ID покупателя" span="12" name="buyerID"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="postBody.buyerID"></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-button type="positive" @click="submitHandler">добавить деталь</fish-button>
        </fish-fields>

        <fish-fields v-bind:key="index" v-for="(detail, index) in postBody.detailList">
            <fish-field label="ID детали" span="12" name="detailID"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="detail.detailID"></fish-input-number>
            </fish-field>
            <fish-field label="Количество" name="count"
                        :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number min="0" max="1000"
                                   v-model="detail.quantity"></fish-input-number>
            </fish-field>
            <fish-field class="dropDetail">
                <fish-button type="negative" @click="deleteDetail(index)">убрать деталь</fish-button>
            </fish-field>
        </fish-fields>


        <fish-button type="primary" @click="submitHandler">Добавить</fish-button>
    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'AddPurchase',
        data() {
            return {
                postBody: {
                    purchaseDate: '',
                    buyer: {
                        buyerID: ''
                    },
                    detailList: [
                        {
                            detailID: 1,
                            quantity: 3
                        },
                        {
                            detailID: 2,
                            quantity: 1
                        }
                    ]
                }
            }
        },
        methods: {
            submitHandler() {
                axios.post("http://localhost:8081/purchaseAdd",
                    {
                        purchaseDate: this.purchaseDate,
                        buyer: {
                            buyerID: this.buyerID
                        },
                        detailList: this.detailList
                    })
            },
            addDetail() {

            },
            deleteDetail(){

            }


        }
    }
</script>

<style scoped>
    .purchaseForm .dropDetail{
        display: grid;
        align-items: end;
    }
</style>