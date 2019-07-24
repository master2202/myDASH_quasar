<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div
          class="col-auto letter-spacing-2 font-size-14 color-5 letter-spacing-2 padding-top-10 cursor-pointer"
          @click="
            $store.state.lang.lang === 'en'
              ? ($store.state.lang.lang = 'sr')
              : ($store.state.lang.lang = 'en')
          "
        >{{ langBar.toUpperCase() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("lang", ["langBar"])
  }
};
</script>

<style></style>
