<template>
  <div class="container">
    <div>
      <h2>Enter the form detail for confirm the booking</h2>
      <div>
        <ul v-if="errorList.length">
          <strong>Please Correct the following error</strong>
          <li v-for="(error, index) in this.errorList" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <form @submit.prevent="submit">
        <div class="row">
          <div class="form-group col-md-6">
            <label htmlFor="exampleFirstName" class="form__label">Name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.users.name.$model"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
            <div class="error" v-if="!$v.users.name.required">
              Field is required
            </div>
            <div class="error" v-if="!$v.users.name.minLength">
              Name must have at least
              {{ $v.users.name.$params.minLength.min }} letters.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              min="0"
              class="form-control"
              v-model="users.email"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="abc@email.com"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              class="form-control"
              v-model="users.phone"
              name="phone"
              id="phone"
              placeholder="62066*****"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              min="0"
              class="form-control"
              v-model="users.address"
              name="Address"
              id="Address"
              placeholder="Vill-XYZ"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <label htmlFor="Date">dateOfVisiting</label>
            <input
              type="text"
              class="form-control"
              v-model="users.date"
              name="date"
              id="date"
              aria-describedby="emailHelp"
              placeholder="yyyy-MM-dd"
            />
          </div>
        </div>
        <button type="button" @click="createUser" class="btn btn-danger">
          SAVE
        </button>
          <RouterLink to="/makePayment">Make Payment</RouterLink>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { required, minLength, between } from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";
import Vue from "vue";
import { RouterLink } from "vue-router";
import { HTTP } from "../common.js";
Vue.use(Vuelidate);
export default {
  data() {
    return {
      errorList: [],
      users: {
        name: "",
        email: "",
        phone:"",
        address:"",
        date: "",
      },
    };
  },
  validations: {
    users: {
      name: {
        required,
        minLength: minLength(4),
      },
    },
  },
  methods: {
    async createUser() {
      if (
        this.users.name &&
        this.users.email &&
        this.users.phone&&
        this.users.address&&
        this.users.date
      ) {
        console.log(this.users.date);
        await axios.post("http://127.0.0.1:3333/Users/store", this.users)
          .then((res) => {
            alert("Data SucessFully Added");
            this.users = {
              name: "",
              email: "",
              address: "",
              phone: "",
              dateOfJoining: "",
            };
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              if (error.response.status == 422) {
                console.log("PLease Enter in required Field");
              }
              console.log(error.response.data);
              console.log(error.response.status + "error");
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
        return true;
      } else if (
        !this.users.name ||
        !this.users.phone||
        !this.users.address ||
        !this.users.email ||
        !this.users.date
      ) {
        this.errorList = [];
        this.errorList.push("Please Insert Into Required list");
      }
    },
  },
  components: { RouterLink },
};
</script>
