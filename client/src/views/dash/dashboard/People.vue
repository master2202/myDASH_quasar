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
            <div class="w-100"></div>
            <router-link tag="div" :to="{ name: 'connect' }" class="col-auto padding-none">
              <img
                :src="connect_outline_icon"
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
      <div class="col-1 h-100 padding-none">
        <people-search-menu v-if="$route.name === 'search' && people_list" />
        <people-connect-menu v-if="$route.name === 'connect'" />
      </div>
    </div>
  </div>
</template>

<script>
import PeopleSearchMenu from "./people/search/People_search_menu";
import PeopleConnectMenu from "./people/connect/People_connect_menu";
import { mapGetters } from "vuex";
export default {
  components: {
    PeopleSearchMenu,
    PeopleConnectMenu
  },
  computed: {
    ...mapGetters("people_main", [
      "post_outline_icon",
      "chat_outline_icon",
      "search_outline_icon",
      "connect_outline_icon"
    ]),
    ...mapGetters("people_search", ["people_list"])
  }
};
</script>

<style></style>
