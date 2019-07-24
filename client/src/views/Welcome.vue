<template>
  <div
    id="welcome"
    class="container-fluid"
    :style="{
      backgroundImage: 'url(' + welcome_Background + ')',
      height: app_Height + 'px'
    }"
  >
    <div
      class="row justify-content-center align-items-center color-dark text-align-center font-Expletus h-100"
    >
      <div class="col-12 h-md-100 col-md-11 max-width-1300 height-60vh">
        <div class="row h-md-100 height-60vh">
          <div
            id="welcomeIn"
            class="col"
            :style="{
              backgroundImage: 'url(' + welcome_BackgroundIn + ')'
            }"
          >
            <div class="row h-100 b-color-snow-transparent justify-content-center align-items-end">
              <div class="col-12">
                <div>
                  <img :src="myDash_logo_text" class="img-fluid" alt="Responsive image" />
                </div>
                <div>
                  <img :src="myDash_logo" class="img-fluid" alt="Responsive image" />
                </div>
              </div>
              <div class="col-12 color-snow font-size-12 letter-spacing-2 text-left">Alpha v0.6</div>
            </div>
          </div>
          <div class="col-12 col-sm-auto backgroundColor-2 width-384">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("welcome", ["welcome_Background", "welcome_BackgroundIn"]),
    ...mapGetters("app", ["app_Height"]),
    ...mapGetters("mydash", ["myDash_logo", "myDash_logo_text"])
  }
};
</script>

<style lang="scss">
#welcome {
  background-size: cover;
  background-repeat: no-repeat;
}
#welcomeIn {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
