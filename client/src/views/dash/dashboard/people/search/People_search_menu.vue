<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-auto padding-none">
        <img
          :src="people_search_back_icon"
          @click="People_Search_Back()"
          @mouseenter="People_Search_Back_Hover(true)"
          @mouseleave="People_Search_Back_Hover(false)"
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
    ...mapGetters("people_search", ["people_search_back_icon"])
  },
  methods: {
    ...mapActions("people_search", [
      "People_Search_Back",
      "People_Search_Back_Hover"
    ])
  }
};
</script>

<style></style>