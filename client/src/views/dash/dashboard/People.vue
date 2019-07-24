<template>
  <div class="container-fluid h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-1 h-100 padding-none">
        <div class="container-fluid">
          <div class="row">
            <router-link tag="div" :to="{ name: 'post' }" class="col-auto padding-none">
              <img
                :src="post_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
            <div class="w-100"></div>
            <router-link tag="div" :to="{ name: 'chat' }" class="col-auto padding-none">
              <img
                :src="chat_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
            <div class="w-100"></div>
            <router-link tag="div" :to="{ name: 'search' }" class="col-auto padding-none">
              <img
                :src="search_outline_icon"
                class="img-fluid cursor-pointer"
                alt="Responsive image"
                width="31"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-10 h-100 padding-none">
        <router-view />
      </div>
      <div class="col-1 h-100 padding-none"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("people_main", [
      "post_outline_icon",
      "chat_outline_icon",
      "search_outline_icon"
    ])
  }
};
</script>

<style></style>
