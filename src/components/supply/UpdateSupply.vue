<template>
    <fish-form class="supplyForm" ref="updateSupply">
        <h2>Редактировать данные о поставке</h2>
        <fish-fields>
            <fish-field label="Введите ID поставки" span="12" name="supplierID"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="postBody.supplyID"></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-field label="Введите дату поставки" span="12" name="date"
                    :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
            <fish-date-picker v-model="postBody.deliveryDate" hint=""></fish-date-picker>
        </fish-field>
        <fish-fields>
            <fish-field label="Введите ID поставщика" span="12" name="supplierID"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="postBody.supplier.supplierID"></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите коэффициент брака" span="12" name="marriageRate"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="postBody.marriageRate" max="100"></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-field label="Введите таможенное оформление" span="12" name="customsClearance"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="postBody.customsClearance"></fish-input-number>
            </fish-field>
        </fish-fields>
        <fish-fields>
            <fish-button type="positive" @click="addDetail">добавить деталь</fish-button>
        </fish-fields>

        <fish-fields v-bind:key="index" v-for="(detail, index) in postBody.detailList">
            <fish-field label="Введите ID детали" span="12" name="detailID"
                        :rules="[{ required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number v-model="detail.detailID"></fish-input-number>
            </fish-field>
            <fish-field label="Введите количество" name="count"
                        :rules="[{required: true, message: 'данное поле не должно быть пустым'}]">
                <fish-input-number min="0" max="1000"
                                   v-model="detail.quantity"></fish-input-number>
            </fish-field>
            <fish-field class="dropDetail">
                <fish-button type="negative" @click="deleteDetail(index)">убрать деталь</fish-button>
            </fish-field>
        </fish-fields>


        <fish-button type="primary" @click="submitHandler">Обновить</fish-button>
        <p>{{ data }}</p>

    </fish-form>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'update-supply',
        data() {
            return {
                postBody: {
                    supplyID: null,
                    deliveryDate: '',
                    supplier: {
                        supplierID: null
                    },
                    marriageRate: null,
                    customsClearance: null,
                    detailList: [
                        {
                            detailID: null,
                            quantity: null
                        }
                    ]
                },
                data: null
            }
        },
        methods: {
            submitHandler() {
                axios.patch("http://localhost:8081/supplyUpdate",
                    {
                        supplyID: this.postBody.supplyID,
                        deliveryDate: this.postBody.deliveryDate,
                        supplier: {
                            supplierID: this.postBody.supplier.supplierID
                        },
                        marriageRate: this.postBody.marriageRate,
                        customsClearance: this.postBody.customsClearance,
                        detailList: this.postBody.detailList
                    }).then(response => (this.data = response.data))
            },
            addDetail() {
                this.postBody.detailList.push({
                    supplierID: null,
                    quantity: null
                })

            },
            deleteDetail(index){
                this.postBody.detailList.splice(index, 1)
            }


        }
    }
</script>

<style scoped>
    .supplyForm .dropDetail{
        display: grid;
        align-items: end;
    }
</style>