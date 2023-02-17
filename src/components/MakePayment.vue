<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold" for="">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card p-3">
          <p class="mb-0 fw-bold h4">Payment Methods</p>
        </div>
      </div>
      <div class="col-12">
        <div class="card p-3">
          <div class="card-body border p-0">
            <p>
              <a
                class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <span class="fw-bold">PayPal</span>
                <span class="fab fa-cc-paypal"> </span>
              </a>
            </p>
            <div class="collapse p-3 pt-0" id="collapseExample">
              <div class="row">
                <div class="col-8">
                  <p class="h4 mb-0">Summary</p>
                  <p class="mb-0">
                    <span class="fw-bold">Product:</span
                    ><span class="c-green">: Name of product</span>
                  </p>
                  <p class="mb-0">
                    <span class="fw-bold">Price:</span
                    ><span class="c-green">:$452.90</span>
                  </p>
                  <p class="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque nihil neque quisquam aut repellendus, dicta vero?
                    Animi dicta cupiditate, facilis provident quibusdam ab quis,
                    iste harum ipsum hic, nemo qui!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border p-0">
            <p>
              <a
                class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <span class="fw-bold">Credit Card</span>
                <span class="">
                  <span class="fab fa-cc-amex"></span>
                  <span class="fab fa-cc-mastercard"></span>
                  <span class="fab fa-cc-discover"></span>
                </span>
              </a>
            </p>
            <div class="collapse show p-3 pt-0" id="collapseExample">
              <div class="row">
                <div class="col-lg-5 mb-lg-0 mb-3">
                  <p class="h4 mb-0">Summary</p>
                  <p class="mb-0">
                    <span class="fw-bold">Product:</span
                    ><span class="c-green">: Name of product</span>
                  </p>
                  <p class="mb-0">
                    <span class="fw-bold">Price:</span>
                    <span class="c-green">:$452.90</span>
                  </p>
                  <p class="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque nihil neque quisquam aut repellendus, dicta vero?
                    Animi dicta cupiditate, facilis provident quibusdam ab quis,
                    iste harum ipsum hic, nemo qui!
                  </p>
                </div>
                <div>
                  <ul v-if="errorList.length">
                    <strong>Please Correct the following error</strong>
                    <li v-for="(error, index) in this.errorList" :key="index">
                      {{ error }}
                    </li>
                  </ul>
                </div>
                <div class="col-lg-7">
                  <form action="" class="form">
                    <div class="row">
                      <div class="col-12">
                        <div class="form__div">
                          <input
                            v-model="Payments.cardnumber"
                            type="number"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label">Card Number</label>
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="form__div">
                          <input
                            v-model="Payments.expire"
                            type="text"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label">yyyy-MM-dd</label>
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="form__div">
                          <input
                            v-model="Payments.cvv"
                            type="password"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label">cvv code</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form__div">
                          <input
                            v-model="Payments.username"
                            type="text"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label"
                            >name on the card</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="btn btn-primary w-100" @click="Payment">Sumbit</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="btn btn-primary payment">Make Payment</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      errorList: [],
      Payments: {
        cardnumber: "",
        expire: "",
        cvv: "",
        username: "",
      },
    };
  },
  methods:{
    async Payment() {
      if (
        this.Payments.cardnumber &&
        this.Payments.expire &&
        this.Payments.cvv&&
        this.Payments.username
      ) {
        console.log(this.Payments.date);
        await axios.post("http://127.0.0.1:3333/Payments/store", this.Payments)
          .then((res) => {
            alert("Data SucessFully Added");
            this.Payments = {
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
        !this.Payments.cardnumber ||
        !this.Payments.expire ||
        !this.Payments.cvv ||
        !this.Payments.username
      ) {
        this.errorList = [];
        this.errorList.push("Please Insert Into Required list");
      }
    },
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  margin: 30px auto;
}

.container .card {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  border-radius: 0px;
}

body {
  background: #eee;
}

.btn.btn-primary {
  background-color: #ddd;
  color: black;
  box-shadow: none;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 100%;
}

.btn.btn-primary:focus {
  box-shadow: none;
}

.container .card .img-box {
  width: 80px;
  height: 50px;
}

.container .card img {
  width: 100%;
  object-fit: fill;
}

.container .card .number {
  font-size: 24px;
}

.container .card-body .btn.btn-primary .fab.fa-cc-paypal {
  font-size: 32px;
  color: #3333f7;
}

.fab.fa-cc-amex {
  color: #1c6acf;
  font-size: 32px;
}

.fab.fa-cc-mastercard {
  font-size: 32px;
  color: red;
}

.fab.fa-cc-discover {
  font-size: 32px;
  color: orange;
}

.c-green {
  color: green;
}

.box {
  height: 40px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
}

.btn.btn-primary.payment {
  background-color: #1c6acf;
  color: white;
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.form__div {
  height: 50px;
  position: relative;
  margin-bottom: 24px;
}

.form-control {
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid #dadce0;
  border-radius: 0;
  outline: none;
  padding: 2px;
  background: none;
  z-index: 1;
  box-shadow: none;
}

.form__label {
  position: absolute;
  left: 16px;
  top: 10px;
  background-color: #fff;
  color: #80868b;
  font-size: 16px;
  transition: 0.3s;
  text-transform: uppercase;
}

.form-control:focus + .form__label {
  top: -8px;
  left: 12px;
  color: #1a73e8;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:not(:placeholder-shown).form-control:not(:focus) + .form__label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:focus {
  border: 1.5px solid #1a73e8;
  box-shadow: none;
}
</style>
