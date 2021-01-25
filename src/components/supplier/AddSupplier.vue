<template>
  <fish-form class="supplierForm" ref="addSupplier">
    <h2>Добавить поставщика</h2>
    <fish-fields>
      <fish-field
        label="Введите имя поставщика"
        span="12"
        name="name"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-input v-model="postBody.name" hint=""></fish-input>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Выберите тип поставщика"
        name="type"
        :rules="[{ required: true }]"
      >
        <fish-radios v-model="postBody.type">
          <fish-radio
            :index="index + 1"
            v-for="(c, index) in ['1', '2']"
            :key="index"
            ><span v-html="c"></span>
          </fish-radio>
        </fish-radios>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Введите среднее время доставки"
        :rules="[
          { required: true, message: 'данное поле не должно быть пустым' }
        ]"
      >
        <fish-field
          span="8"
          :rules="[
            { required: true, message: 'данное поле не должно быть пустым' }
          ]"
        >
          <fish-input-number
            label-left="Месяцев:"
            v-model="postBody.deliveryTimeMonths"
            hint=""
          ></fish-input-number>
        </fish-field>
        <fish-field
          span="8"
          :rules="[
            { required: true, message: 'данное поле не должно быть пустым' }
          ]"
        >
          <fish-input-number
            label-left="Дней:"
            v-model="postBody.deliveryTimeDays"
            hint=""
          ></fish-input-number>
        </fish-field>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Введите гарантийный срок">
        <fish-field span="8">
          <fish-input-number
            label-left="Лет:"
            v-model="postBody.guaranteeYears"
            hint=""
          ></fish-input-number>
        </fish-field>
        <fish-field span="8">
          <fish-input-number
            label-left="Месяцев:"
            v-model="postBody.guaranteeMonths"
            hint=""
          ></fish-input-number>
        </fish-field>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Введите номер договора" span="8">
        <fish-input-number
          v-model="postBody.contract"
          hint=""
          max="99999999"
        ></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field
        label="Введите размер скидки предоставленной поставщиком"
        span="8"
      >
        <fish-input-number
          v-model="postBody.discount"
          hint=""
          min="0"
          max="100"
        ></fish-input-number>
      </fish-field>
    </fish-fields>
    <fish-button type="primary" @click="addSupplier">Добавить</fish-button>
    <p>{{ data }}</p>
  </fish-form>
</template>

<script>
import axios from "axios";

export default {
  name: "add-supplier",
  data() {
    return {
      postBody: {
        name: "",
        type: null,
        deliveryTimeMonths: null,
        deliveryTimeDays: null,
        guaranteeYears: null,
        guaranteeMonths: null,
        contract: null,
        discount: null
      },
      data: null
    };
  },
  methods: {
    addSupplier() {
      axios
        .post("http://localhost:8081/supplierAdd", {
          name: this.postBody.name,
          type: this.postBody.type,
          deliveryTime:
            this.postBody.deliveryTimeMonths +
            " MONTHS " +
            this.postBody.deliveryTimeDays +
            " DAYS",
          guarantee:
            this.postBody.guaranteeYears +
            " YEARS " +
            this.postBody.guaranteeMonths +
            " MONTHS",
          contract: this.postBody.contract,
          discount: this.postBody.discount
        })
        .then(response => (this.data = response.data));
    }
  }
};
</script>
