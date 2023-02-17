<template>
    <div class="APIView">
      <h1>Booking Detail</h1>
      <!-- <button @click="AddDynamicRouter">Dynamic</button> -->
      <!-- <RouterLink to="/AddEmploye">AddEmploye</RouterLink> -->
      <!-- <router-link to="/addEmployes">AD</router-link> -->
      <table>
        <thead>
          <tr>
            <th>TourName</th>
            <th>BookingDate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(users, index) in users" :key="index">
            <td>{{ users.name}}</td>
            <td>{{ users.created_at}}</td>
            <td>Active</td>
            <td>
              <button class="btn btn__danger" @click="deleteUser(users.id)">
                CancelYourBooking
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  import axios from "axios";
  //import { mapGetters } from "vuex";
  // import { RouterLink } from "vue-router";
  import { HTTP } from "../common";
  export default {
    name: "ApiView",
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      // console.log("I am here");
      this.getEmployes();
    },
    computed: {
      
    },
    methods: {
      async getEmployes() {
        await HTTP.get("Users/display").then((res) => {
          this.users = res.data;
          console.log(this.employes);
        });
      },
      async deleteUser(usersId) {
        if (confirm("Are you sure you want to delete ?")) {
          console.log(usersId);
          await HTTP.delete(`/Users/delete/${usersId}`);
        }
      },
      AddDynamicRouter() {
        this.$router.addRoute({
          name: "addEmployes",
          path: "/addEmployes",
          //component: () => import("./AddEmploye.vue"),
        });
      },
    },
  };
  </script>
<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
</style>
  