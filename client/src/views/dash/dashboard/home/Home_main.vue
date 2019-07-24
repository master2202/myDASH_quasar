<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="font-size-35 font-Expletus letter-spacing-2">HOME</div>
        <div>
          <img :src="myDash_logo" class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("mydash", ["myDash_logo"])
  },
  methods: {
    ...mapActions("home_main", ["home_route"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.home_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.home_route(false);
    next();
  }
};
</script>

<style></style>
