<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100 padding-top-50">
      <div
        class="col-12 border-black-1 h-100"
        :style="{
          backgroundImage: 'url(' + profile_banner + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }"
      >
        <div class="container-fluid h-100">
          <div class="container-fluid">
            <div class="row" :style="{ height: h_dashboard / 3.5 + 'px' }">
              <div
                v-if="profile_edit"
                class="col-auto align-self-start update-button"
                @click="profile_update([profile_select, 'banner'])"
                :style="{
                  fontSize:
                    Math.round(h_dashboard / 35) > 20
                      ? 20 + 'px'
                      : Math.round(h_dashboard / 35) + 'px',
                  paddingTop:
                    Math.round(h_dashboard / 35) > 7
                      ? 7 + 'px'
                      : Math.round(h_dashboard / 35) + 'px',
                  paddingBottom:
                    Math.round(h_dashboard / 35) > 7
                      ? 7 + 'px'
                      : Math.round(h_dashboard / 35) + 'px'
                }"
              >UPDATE BANNER</div>
              <div class="col-12 align-self-end">
                <div class="row justify-content-center padding-bottom-10">
                  <div
                    v-if="profile_edit"
                    class="col-auto update-button"
                    @click="profile_update([profile_select, 'avatar'])"
                    :style="{
                      fontSize:
                        Math.round(h_dashboard / 35) > 20
                          ? 20 + 'px'
                          : Math.round(h_dashboard / 35) + 'px',
                      paddingTop:
                        Math.round(h_dashboard / 35) > 7
                          ? 7 + 'px'
                          : Math.round(h_dashboard / 35) + 'px',
                      paddingBottom:
                        Math.round(h_dashboard / 35) > 7
                          ? 7 + 'px'
                          : Math.round(h_dashboard / 35) + 'px'
                    }"
                  >UPDATE AVATAR</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-12">
              <img
                :style="{
                  height: h_dashboard / 4 + 'px',
                  maxHeight: 200 + 'px'
                }"
                :src="profile_avatar"
                class="border-radius-100 border-dark-4"
                alt="Responsive image"
              />
            </div>
          </div>
          <div class="container-fluid">
            <div class="row justify-content-center padding-top-15">
              <div
                class="col-auto letter-spacing-2 color-snow b-color-dark-transparent"
                :style="{
                  fontSize:
                    h_dashboard / 30 > 25 ? 25 + 'px' : h_dashboard / 30 + 'px',
                  borderRadius: h_dashboard / 10 + 'px'
                }"
              >{{ profile_name }}</div>
              <div class="col-12 align-self-end">
                <div class="row justify-content-center padding-top-10">
                  <div
                    v-if="profile_edit"
                    class="col-auto update-button"
                    @click="profile_update([profile_select, 'name'])"
                    :style="{
                      fontSize:
                        Math.round(h_dashboard / 35) > 20
                          ? 20 + 'px'
                          : Math.round(h_dashboard / 35) + 'px',
                      paddingTop:
                        Math.round(h_dashboard / 35) > 7
                          ? 7 + 'px'
                          : Math.round(h_dashboard / 35) + 'px',
                      paddingBottom:
                        Math.round(h_dashboard / 35) > 7
                          ? 7 + 'px'
                          : Math.round(h_dashboard / 35) + 'px'
                    }"
                  >UPDATE NAME</div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("settings_profile", [
      "profile_edit",
      "profile_select",
      "profile_banner",
      "profile_avatar",
      "profile_name"
    ]),
    ...mapGetters("app", ["h_dashboard"])
  },
  methods: {
    ...mapActions("settings_profile", ["profile_update"]),
    ...mapActions("settings_main", ["profile_route"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.profile_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.profile_route(false);
    next();
  }
};
</script>

<style lang="scss">
.update-button {
  background-color: rgb(255, 255, 0);
  color: rgba($color: #000000, $alpha: 0.7);
  letter-spacing: 1px;
  border: 3px solid rgba($color: #000000, $alpha: 0.7);
  border-radius: 7px;
}
.update-button:hover {
  cursor: pointer;
  color: rgb(255, 0, 0);
  border: 3px solid rgb(255, 0, 0);
}
.edit-button {
  background-color: rgb(255, 255, 0);
  color: rgba($color: #000000, $alpha: 0.7);
  letter-spacing: 1px;
  border: 3px solid rgba($color: #000000, $alpha: 0.7);
  border-radius: 7px;
}
.edit-button:hover {
  cursor: pointer;
  color: rgb(0, 132, 255);
  border: 3px solid rgb(0, 132, 255);
}
</style>
