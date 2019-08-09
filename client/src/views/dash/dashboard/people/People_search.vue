<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center" :style="{height:50 + 'px'}">
      <div v-if="people_list" class="col-12">
        <div class="font-size-28 font-Expletus color-16">
          search result for:
          <span
            class="color-17 backgroundColor-14 letter-spacing-2 border-radius-15 padding-horizontal-10 padding-vertical-5"
          >{{person_input}}</span>
        </div>
      </div>
    </div>
    <div
      class="row justify-content-center align-items-center overflow-overlay"
      :style="{height: h_dashboard - 60 + 'px'}"
    >
      <div v-if="!people_list" class="col-auto" :style="{width:400 + 'px'}">
        <div class="row justify-content-center">
          <div class="col-10 padding-vertical-5 letter-spacing-2">
            <div class="row align-items-center padding-none">
              <div class="col-10 padding-none">
                <input
                  v-on:keyup.enter="People_Find(person_input)"
                  v-model="person_input"
                  @focus="People_Search_Focus('input-in')"
                  @blur="People_Search_Focus('input-out')"
                  class="my-search-input letter-spacing-2"
                  type="text"
                  placeholder="enter person name"
                  spellcheck="false"
                />
              </div>
              <div class="col-2 padding-none">
                <img
                  @click="People_Find(person_input)"
                  @mouseenter="People_Search_Focus(true)"
                  @mouseleave="People_Search_Focus(false)"
                  :src="people_search_icon"
                  class="img-fluid cursor-pointer"
                  alt="Responsive image"
                  width="31"
                />
              </div>
              <div class="col-12">
                <hr
                  class="margin-vertical-0"
                  :style="{backgroundColor:people_search_focus ? '#009688' : 'snow'}"
                />
              </div>
            </div>
          </div>
          <div class="col-12 padding-vertical-25">
            <div class="font-size-35 font-Expletus letter-spacing-2">SEARCH PEOPLE</div>
            <div>
              <img :src="myDash_logo" class="img-fluid" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="col-12">
        <div class="row justify-content-center">
          <div class="col-11">
            <div class="row justify-content-center padding-none">
              <div
                :id="'personCard-' + index"
                class="col-12 col-lg-6 col-xl-4 personCard"
                v-for="(item, index) in people_data"
                :key="index"
              >
                <div class="row margin-horizontal-5 margin-vertical-15">
                  <div
                    :style="{
                      borderRadius: 17 + 'px',
                      backgroundImage: w_personCard > 330 ? people_data[index].profile_1.banner === null ? 'url(http://localhost:8080/assets/main/profile_banner_blank.png)' : 'url(' + people_data[index].profile_1.banner + ')' : people_data[index].profile_1.avatar === null ? 'url(http://localhost:8080/assets/main/profile_avatar_blank.png)' : 'url(' + people_data[index].profile_1.avatar + ')', 
                      height: 250 + 'px', 
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }"
                    @click="People_Search_Connect(people_data[index].profile_1.name)"
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
                            :src="people_data[index].profile_1.avatar === null ? '../../../../assets/main/profile_avatar_blank.png' : people_data[index].profile_1.avatar"
                            class="border-radius-100 border-dark-5 img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                        <div v-else class="col-12 padding-none" :style="{height: 170 + 'px'}"></div>
                        <div class="container-fluid">
                          <div class="row justify-content-center" :style="{height: 80 + 'px'}">
                            <div
                              class="col-12 padding-vertical-5 letter-spacing-1 color-5 backgroundColor-14"
                            >{{people_data[index].profile_1.name === null ? 'anon' : people_data[index].profile_1.name}}</div>
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
    ...mapGetters("mydash", ["myDash_logo"]),
    ...mapGetters("people_search", [
      "people_search_icon",
      "people_search_focus",
      "people_list",
      "people_data"
    ]),
    person_input: {
      get() {
        return this.$store.state.people_search.person_input;
      },
      set(val) {
        this.$store.commit("people_search/PERSON_INPUT", val);
      }
    }
  },
  methods: {
    ...mapActions("people_main", ["search_route"]),
    ...mapActions("people_search", [
      "People_Search_Focus",
      "People_Search_Connect",
      "People_Find"
    ])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.search_route(true);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.search_route(false);
    next();
  }
};
</script>

<style lang="scss">
.profile_connect {
  max-width: 100%;
  max-height: 100px;
}
.swal2-radio {
  display: grid !important;
}
.my-search {
  border: 1px solid snow !important;
}
.my-search-input {
  color: snow;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 35px;
  padding-left: 15px;
  padding-right: 15px;
}
input[placeholder="enter person name"]::-moz-placeholder {
  text-align: center;
  padding-left: 45px;
}
input[placeholder="enter person name"]::-ms-input-placeholder {
  text-align: center;
  padding-left: 45px;
}
input[placeholder="enter person name"]::-webkit-input-placeholder {
  text-align: center;
  padding-left: 45px;
}
</style>

