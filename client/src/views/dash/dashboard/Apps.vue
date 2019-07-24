<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-1 padding-none h-100">
        <div class="container-fluid">
          <div class="row">
            <router-link tag="div" :to="{ name: 'active' }" class="col-auto padding-none">
              <img
                :src="active_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
            <div class="w-100"></div>
            <router-link tag="div" :to="{ name: 'shop' }" class="col-auto padding-none">
              <img
                :src="shop_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-10 padding-none h-100">
        <router-view />
      </div>
      <div class="col-1 padding-none h-100"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("apps_main", ["active_outline_icon", "shop_outline_icon"])
  }
};
</script>

<style></style>
