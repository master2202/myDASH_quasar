<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12"></div>
      <div class="col-12"></div>
      <hr />
    </div>
    <div class="row" v-for="(item, index) in friendsList" :key="item + index">
      <div class="col-12">
        <div>
          <!-- <img :src="friendsList[index].avatar" class="img-fluid" alt="Responsive image" /> -->
        </div>
      </div>
      <div class="col-12">{{ friendsList[index].profile_1.name }}</div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //friends: this.$store.state.friends_list.friends
    };
  },
  computed: {
    ...mapGetters("friends_list", ["friendsList"])
  }
};
</script>

<style></style>
