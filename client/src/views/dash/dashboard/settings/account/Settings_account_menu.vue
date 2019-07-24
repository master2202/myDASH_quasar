<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-auto padding-none">
        <img
          :src="account_edit_icon"
          @click="account_edit()"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100 margin-vertical-8"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("settings_account", ["account_edit_icon"])
  },
  methods: {
    ...mapActions("settings_account", ["account_edit"])
  }
};
</script>

<style></style>
