<template>
  <div
    id="welcome"
    class="container-fluid"
    :style="{
      backgroundImage: 'url(' + myDash_Background + ')',
      height: app_Height + 'px'
    }"
  >
    <div class="row justify-content-around align-items-center h-100">
      <div
        v-show="!fullscreen"
        id="menuBar"
        class="col-12 order-1 order-lg-1 align-self-end"
        :style="{ height: 5 + '%' }"
      >
        <div
          class="row justify-content-center align-items-center color-dark text-align-center font-Expletus color-snow h-100"
        >
          <div class="col-auto color-snow font-Expletus h-100">
            <div class="container-fluid h-100 b-color-dark-transparent b-color-dark-transparent">
              <div class="row h-100 justify-content-center align-items-center">
                <router-link
                  tag="div"
                  :to="{ name: 'profile' }"
                  class="col-auto padding-none margin-horizontal-10"
                >
                  <img
                    :style="{ height: h_bar + 'px' }"
                    :src="settings_icon"
                    class="img-fluid cursor-pointer"
                    alt="Responsive image"
                  />
                </router-link>
                <router-link
                  tag="div"
                  :to="{ name: 'active' }"
                  class="col-auto padding-none margin-horizontal-10"
                >
                  <img
                    :style="{ height: h_bar + 'px' }"
                    :src="app_icon"
                    class="img-fluid cursor-pointer"
                    alt="Responsive image"
                  />
                </router-link>
                <router-link
                  tag="div"
                  :to="{ name: 'home' }"
                  class="col-auto padding-none margin-horizontal-10"
                >
                  <img
                    :style="{ height: h_bar + 'px' }"
                    :src="home_icon"
                    class="img-fluid cursor-pointer"
                    alt="Responsive image"
                  />
                </router-link>
                <router-link
                  tag="div"
                  :to="{ name: 'post' }"
                  class="col-auto padding-none margin-horizontal-10"
                >
                  <img
                    :style="{ height: h_bar + 'px' }"
                    :src="people_icon"
                    class="img-fluid cursor-pointer"
                    alt="Responsive image"
                  />
                </router-link>
                <router-link
                  tag="div"
                  :to="{ name: 'signin' }"
                  class="col-auto padding-none margin-horizontal-10"
                >
                  <img
                    :style="{ height: h_bar + 'px' }"
                    :src="logout_icon"
                    class="img-fluid cursor-pointer"
                    alt="Responsive image"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-show="!fullscreen"
        id="sideDash"
        class="col-6 col-lg-3 col-xl-2 order-5 order-lg-2 color-snow font-Expletus text-align-center b-color-dark-transparent padding-horizontal-10"
        :style="{ height: h_45_50vh }"
      >
        <div class="container-fluid h-100">
          <div class="row">
            <div
              class="col-12 letter-spacing-1 margin-vertical-15 padding-vertical-5 border-radius-20 backgroundColor-10 color-snow"
            >myAPPs</div>
          </div>
          <div class="row b-color-snow" :style="{ height: h_80 }">
            <applications />
          </div>
        </div>
      </div>
      <div
        id="dashBoard"
        class="order-2 order-lg-3 color-snow font-Expletus text-align-center b-color-dark-transparent border-black-1 padding-none"
        :class="dashboard_grid"
        :style="{ height: h_45_60vh }"
      >
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col-12 padding-none" :style="{ height: h_dash }">
              <router-view />
            </div>

            <div class="col-12 padding-none align-self-end">
              <div class="container-fluid">
                <div class="row justify-content-end">
                  <div class="col-auto padding-none" @click="fullscreen_logic()">
                    <img
                      :src="fullscreen_outline_icon"
                      class="img-fluid cursor-pointer"
                      alt="Responsive image"
                      width="31"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="!fullscreen"
        class="col-6 col-lg-3 col-xl-2 order-6 order-lg-4 color-snow font-Expletus text-align-center b-color-dark-transparent padding-horizontal-10"
        :style="{ height: h_45_50vh }"
      >
        <div class="container-fluid h-100">
          <div class="row">
            <div
              class="col-12 letter-spacing-1 margin-vertical-15 padding-vertical-5 border-radius-20 backgroundColor-10 color-snow"
            >myFRIENDs</div>
          </div>
          <div class="row b-color-snow color-dark" :style="{ height: h_80 }">
            <friends />
          </div>
        </div>
      </div>
      <div v-show="!fullscreen" class="col-12 order-3 order-lg-5"></div>
      <div
        v-show="!fullscreen"
        class="col-12 col-lg-auto b-color-dark-transparent order-4 order-lg-6 align-self-start padding-none"
        :style="{ height: 5 + '%' }"
      >
        <div class="container-fluid h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div
              class="col-12 letter-spacing-1 color-snow text-center"
              :style="{
                fontSize: h_bar > 20 ? 20 + 'px' : h_bar + 'px'
              }"
            >myDASH</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Friends from "./dash/Friends";
import Applications from "./dash/Applications";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Friends,
    Applications
  },
  computed: {
    ...mapGetters("mydash", [
      "myDash_Background",
      "home_icon",
      "settings_icon",
      "app_icon",
      "logout_icon",
      "people_icon"
    ]),
    ...mapGetters("fullscreen", ["fullscreen", "fullscreen_outline_icon"]),
    ...mapGetters("app", [
      "app_Height",
      "dashboard_grid",
      "h_dashboard",
      "h_45_60vh",
      "h_45_50vh",
      "h_80",
      "h_bar",
      "h_dash"
    ])
  },
  methods: {
    ...mapActions("app", ["run_myDash"]),
    ...mapActions("fullscreen", ["fullscreen_logic"]),
    ...mapActions("friends_list", ["friends_list"]),
    ...mapActions("settings_profile", ["profile_data"])
  },
  mounted() {
    // this.$nextTick(() => {
    console.log("myDash Mounted!");
    this.run_myDash();
    this.profile_data();
    this.friends_list();
    // });
  }
  // created() {
  //   window.addEventListener(
  //     "beforeunload",
  //     () => {
  //       localStorage.removeItem("token");
  //     },
  //     false
  //   );
  // }
};
</script>

<style></style>
