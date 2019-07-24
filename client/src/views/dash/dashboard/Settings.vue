<template>
  <div class="container-fluid h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-1 h-100 padding-none">
        <div class="container-fluid">
          <div class="row">
            <router-link tag="div" :to="{ name: 'profile' }" class="col-auto padding-none">
              <img
                :src="profile_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
            <div class="w-100"></div>
            <router-link tag="div" :to="{ name: 'account' }" class="col-auto padding-none">
              <img
                :src="account_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
            <div class="w-100"></div>
          </div>
        </div>
      </div>
      <div class="col-10 h-100 padding-none">
        <router-view />
      </div>
      <div class="col-1 h-100 padding-none">
        <profile-menu v-if="$route.name === 'profile'" />
        <account-menu v-if="$route.name === 'account'" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "./settings/profile/Settings_profile_menu";
import AccountMenu from "./settings/account/Settings_account_menu";
import { mapGetters } from "vuex";
export default {
  components: {
    ProfileMenu,
    AccountMenu
  },
  computed: {
    ...mapGetters("settings_main", [
      "profile_outline_icon",
      "account_outline_icon"
    ])
  }
};
</script>

<style></style>
