<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-auto padding-none">
        <img
          :src="profile_edit_icon"
          @click="profile_edit()"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100 margin-vertical-8"></div>
      <div class="col-auto padding-none">
        <img
          :src="profile_1_icon"
          @click="profile_set_select('profile_1')"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100"></div>
      <div class="col-auto padding-none">
        <img
          :src="profile_2_icon"
          @click="profile_set_select('profile_2')"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100"></div>
      <div class="col-auto padding-none">
        <img
          :src="profile_3_icon"
          @click="profile_set_select('profile_3')"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("settings_profile", [
      "profile_edit_icon",
      "profile_1_icon",
      "profile_2_icon",
      "profile_3_icon"
    ])
  },
  methods: {
    ...mapActions("settings_profile", [
      "profile_edit",
      // "profile_1",
      // "profile_2",
      // "profile_3",
      "profile_set_select"
    ])
  }
};
</script>

<style></style>
