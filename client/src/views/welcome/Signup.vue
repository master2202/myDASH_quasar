<template>
  <div class="container-fluid h-100 width-350">
    <div class="row h-100 justify-content-center align-items-center">
      <langbar />
      <div class="col-12 text-left letter-spacing-2 padding-top-44">
        <form id="signup" @submit.prevent="validateBeforeSubmit" spellcheck="false">
          <div class="form-group font-size-14 min-height-85" :class="focusUsername">
            <label for="username" class="margin-bottom-0">
              {{
              lang_main.local[lang_main.lang].t1
              }}
            </label>
            <input
              id="username"
              class="font-size-12 backgroundColor-none border-none padding-none font-italic letter-spacing-2 height-20"
              :class="formControlUsername"
              :placeholder="placeholderUsername"
              @focus="auth_main.focusUsername = true"
              @blur="auth_main.focusUsername = false"
              v-model="username"
              v-validate="'required|alpha_spaces'"
              type="username"
              name="username"
            />
            <hr class="margin-vertical-0" :class="hrUsernameColor" />
            <span class="font-size-12" v-if="errors.has('username')">
              {{
              errors.first("username")
              }}
            </span>
          </div>
          <div class="form-group font-size-14 min-height-85" :class="focusEmail">
            <label for="email" class="margin-bottom-0">{{ lang_main.local[lang_main.lang].t2 }}</label>
            <input
              id="email"
              class="font-size-12 backgroundColor-none border-none padding-none font-italic letter-spacing-2 height-20"
              :class="formControlEmail"
              :placeholder="placeholderEmail"
              @focus="auth_main.focusEmail = true"
              @blur="auth_main.focusEmail = false"
              v-model="email"
              v-validate="'required|email'"
              type="email"
              name="email"
            />
            <hr class="margin-vertical-0" :class="hrEmailColor" />
            <span class="font-size-12" v-if="errors.has('email')">
              {{
              errors.first("email")
              }}
            </span>
          </div>
          <div class="form-group font-size-14 min-height-105" :class="focusPassword">
            <label for="password" class="margin-bottom-0">
              {{
              lang_main.local[lang_main.lang].t3
              }}
            </label>
            <div class="container-fluid">
              <div class="row">
                <div class="col-10 padding-none">
                  <input
                    id="password"
                    class="font-size-12 backgroundColor-none border-none padding-none font-italic letter-spacing-2 height-20"
                    :class="formControlPassword"
                    :placeholder="placeholderPassword"
                    @focus="auth_main.focusPassword = true"
                    @blur="auth_main.focusPassword = false"
                    v-model="password"
                    v-validate="'required|min:5'"
                    :type="passwordType"
                    name="password"
                  />
                </div>
                <div class="col-2 padding-none text-right">
                  <span
                    class="color-5 cursor-pointer"
                    @click="auth_main.passwordShow = !auth_main.passwordShow"
                  >{{ passwordShow }}</span>
                </div>
              </div>
            </div>
            <hr class="margin-vertical-0" :class="hrPasswordColor" />
            <span class="font-size-12" v-if="errors.has('password')">
              {{
              errors.first("password")
              }}
            </span>
          </div>
          <button
            id="signupButton"
            type="submit"
            class="btn btn-block font-size-14 backgroundColor-1 color-4 text-center height-40 border-radius-15 border-1 letter-spacing-2"
          >{{ lang_main.local[lang_main.lang].t7 }}</button>
        </form>
      </div>
      <div class="col-12 font-size-12 letter-spacing-2 padding-top-15 padding-bottom-10 color-5">
        {{ lang_main.local[lang_main.lang].t8 }}
        <router-link
          tag="span"
          :to="{ name: 'signin' }"
          class="font-size-14 color-1 margin-left-8 text-decor-underline cursor-pointer"
        >{{ lang_main.local[lang_main.lang].t6 }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Langbar from "./components/Langbar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Langbar
  },
  data() {
    return {
      lang_main: this.$store.state.lang,
      auth_main: this.$store.state.auth
    };
  },
  computed: {
    ...mapGetters("auth", [
      "formControlUsername",
      "formControlEmail",
      "formControlPassword",

      "focusUsername",
      "focusEmail",
      "focusPassword",

      "placeholderUsername",
      "placeholderEmail",
      "placeholderPassword",

      "hrUsernameColor",
      "hrEmailColor",
      "hrPasswordColor",

      "passwordType",
      "passwordShow"
    ]),
    username: {
      get() {
        return this.auth_main.username;
      },
      set(val) {
        this.$store.commit("auth/USERNAME", val);
      }
    },
    email: {
      get() {
        return this.auth_main.email;
      },
      set(val) {
        this.$store.commit("auth/EMAIL", val.toLowerCase());
      }
    },
    password: {
      get() {
        return this.auth_main.password;
      },
      set(val) {
        this.$store.commit("auth/PASSWORD", val);
      }
    }
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.registerUser();
        } else {
          this.$swal("message", "Your input is not valid!", "warning");
        }
      });
    }
  },
  updated() {
    this.auth_main.usernameError = this.$validator.errors.has("username");
    this.auth_main.emailError = this.$validator.errors.has("email");
    this.auth_main.passwordError = this.$validator.errors.has("password");
  }
};
</script>

<style></style>
