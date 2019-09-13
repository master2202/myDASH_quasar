<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center" :style="{height:50 + 'px'}">
      <div>CONNECT</div>
    </div>
    <div
      class="row justify-content-center align-items-center overflow-overlay"
      :style="{height: h_dashboard - 60 + 'px'}"
    >
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-11">
            <div class="row justify-content-center padding-none">
              <div
                :id="'personCard-' + index"
                class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 personCard"
                v-for="(item, index) in people_connect_data"
                :key="index"
              >
                <div class="row margin-horizontal-5 margin-vertical-15">
                  <div
                    :style="{
                      borderRadius: 17 + 'px',
                      backgroundImage: w_personCard > 330 ? people_connect_data[index].profile_1.banner === null ? 'url(http://localhost:8080/assets/main/profile_anon.jpg)' : 'url(' + people_connect_data[index].profile_1.banner + ')' : people_connect_data[index].profile_1.avatar === null ? 'url(http://localhost:8080/assets/main/profile_anon.jpg)' : 'url(' + people_connect_data[index].profile_1.avatar + ')', 
                      height: 250 + 'px', 
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }"
                    @click="People_Search_Connect([people_connect_data[index]._id, people_connect_data[index].profile_1.name, index + 1])"
                    class="col-12 padding-none cursor-pointer"
                  >
                    <div
                      class="container h-100 overflow-hidden"
                      :style="{borderRadius: 15 + 'px', backgroundColor: w_personCard > 330 ? '#6f8498b3' : 'transparent'}"
                    >
                      <div class="row">
                        <div
                          v-if="w_personCard > 330"
                          class="col-12 padding-vertical-5"
                          :style="{height: 170 + 'px'}"
                        >
                          <img
                            :style="{
                              width: 'auto',
                              height: 100 + '%'
                            }"
                            :src="people_connect_data[index].profile_1.avatar === null ? '../../../../assets/main/profile_anon.jpg' : people_connect_data[index].profile_1.avatar"
                            class="border-radius-100 border-dark-5 img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                        <div v-else class="col-12 padding-none" :style="{height: 170 + 'px'}"></div>
                        <div
                          class="container-fluid letter-spacing-1 color-5 backgroundColor-14"
                          :style="{height: 80 + 'px'}"
                        >
                          <div class="row justify-content-center">
                            <div
                              class="col-12 padding-vertical-5 overflow-hidden"
                              :style="{height: 55 + 'px'}"
                            >{{people_connect_data[index].profile_1.name === null ? 'Anonymous' : people_connect_data[index].profile_1.name}}</div>
                            <div class="col-12 text-right padding-right-8">{{index + 1}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("app", ["h_dashboard", "w_dashboard", "w_personCard"]),
    // ...mapGetters("mydash", ["myDash_logo"]),
    ...mapGetters("people_connect", [
      //   "people_search_icon",
      //   "people_search_focus",
      //   "people_list",
      "people_connect_data"
    ])
    // person_input: {
    //   get() {
    //     return this.$store.state.people_search.person_input;
    //   },
    //   set(val) {
    //     this.$store.commit("people_search/PERSON_INPUT", val);
    //   }
    // }
  },
  methods: {
    ...mapActions("people_main", ["connect_route"])
    // ...mapActions("people_search", [
    //   "People_Search_Focus",
    //   "People_Search_Back",
    //   "People_Search_Connect",
    //   "People_Find"
    // ])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.connect_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.connect_route(false);
    next();
  }
};
</script>

<style>
</style>