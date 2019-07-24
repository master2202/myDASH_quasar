<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="font-size-35 font-Expletus letetter-spacing-2">SHOP</div>
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
    ...mapActions("apps_main", ["shop_route"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.shop_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.shop_route(false);
    next();
  }
};
</script>

<style></style>
