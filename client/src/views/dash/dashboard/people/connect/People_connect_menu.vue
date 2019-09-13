<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <!-- <div class="col-auto padding-none">
        <img
          :src="people_connect_list_icon"
          @click="People_Connect()"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>-->
      <div class="w-100 padding-top-40"></div>
      <div class="col-auto padding-none">
        <img
          :src="people_connect_list_icon"
          @click="People_Connect('list')"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100"></div>
      <div class="col-auto padding-none">
        <img
          :src="people_connect_request_icon"
          @click="People_Connect('request')"
          class="img-fluid cursor-pointer"
          alt="Responsive image"
          width="31"
        />
      </div>
      <div class="w-100"></div>
      <div class="col-auto padding-none">
        <img
          :src="people_connect_queue_icon"
          @click="People_Connect('queue')"
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
    ...mapGetters("people_connect", [
      "people_connect_list_icon",
      "people_connect_queue_icon",
      "people_connect_request_icon"
    ])
  },
  methods: {
    ...mapActions("people_connect", ["People_Connect"])
  }
};
</script>

<style></style>