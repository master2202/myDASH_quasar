<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100 padding-top-50">
      <div class="col-12 border-black-1 h-100 backgroundColor-12">
        <div class="container-fluid h-100 padding-none">
          <div class="row h-100 align-items-center overflow-auto">
            <div class="col-12">
              <div class="container-fluid">
                <div class="row justify-content-center margin-vertical-15">
                  <div class="col-12 font-size-22">Account Name</div>
                  <div
                    class="col-auto font-size-25 letter-spacing-2 color-snow b-color-dark-transparent"
                  >Zoran Velickovic</div>
                  <!-- <div class="col-12 padding-vertical-5">
                    <div class="container-fluid">
                      <div class="row justify-content-center">
                        <div class="col-auto update-button padding-vertical-5">
                          UPDATE NAME
                        </div>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="container-fluid">
                <div class="row justify-content-center margin-vertical-15">
                  <div class="col-12 font-size-22">Email</div>
                  <div
                    class="col-auto font-size-25 letter-spacing-2 color-snow b-color-dark-transparent overflow-auto"
                  >master2202@live.com</div>
                  <!-- <div class="col-12 padding-vertical-5">
                    <div class="container-fluid">
                      <div class="row justify-content-center">
                        <div class="col-auto update-button padding-vertical-5">
                          UPDATE EMAIL
                        </div>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="col-12 min-height-150">
              <div class="container-fluid">
                <div class="row justify-content-center margin-vertical-15">
                  <div class="col-12 font-size-22">Password</div>
                  <div
                    class="col-auto font-size-25 letter-spacing-2 color-snow b-color-dark-transparent"
                  >master2202</div>
                  <div
                    v-if="account_edit"
                    @click="account_update('password')"
                    class="col-12 padding-vertical-5"
                  >
                    <div class="container-fluid">
                      <div class="row justify-content-center">
                        <div class="col-auto update-button padding-vertical-5">UPDATE PASSWORD</div>
                      </div>
                    </div>
                  </div>
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
    ...mapGetters("settings_account", ["account_edit"])
  },
  methods: {
    ...mapActions("settings_main", ["account_route"]),
    ...mapActions("settings_account", ["account_update"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.account_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.account_route(false);
    next();
  }
};
</script>

<style></style>
