<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <header>
      <router-link to="/cart">See Your Booking</router-link>
    </header>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang-1280x720.webp" alt="Tour" />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <router-link
                      to="/Booking"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Book
                    </router-link>
                  </div>
                  <small class="text-muted">{{ price }}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="https://images.livemint.com/img/2022/07/31/1600x900/jk_1659286023577_1659286023928_1659286023928.jpg" alt="tour image" />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <router-link
                      to="/Booking"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Book
                    </router-link>
                  </div>
                  <small class="text-muted">{{ price }}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-74899951/74899951.jpg" alt="touerguide" />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <router-link
                      to="/Booking"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Book
                    </router-link>
                  </div>
                  <small class="text-muted">{{ price }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  methods: {},
};
</script>
