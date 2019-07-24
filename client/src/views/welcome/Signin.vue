<template>
  <div class="container-fluid h-100 width-350">
    <div class="row h-100 justify-content-center align-items-center">
      <langbar />
      <div class="col-12 text-left letter-spacing-2 padding-top-44">
        <form id="signin" @submit.prevent="validateBeforeSubmit" spellcheck="false">
          <div class="form-group font-size-14 min-height-85" :class="focusEmail">
            <label for="email" class="margin-bottom-0">{{ lang.local[lang.lang].t2 }}</label>
            <input
              id="email"
              class="font-size-12 backgroundColor-none border-none padding-none font-italic letter-spacing-2 height-20"
              :class="formControlEmail"
              :placeholder="placeholderEmail"
              @focus="auth.focusEmail = true"
              @blur="auth.focusEmail = false"
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
          <div class="form-group font-size-14 min-height-85" :class="focusPassword">
            <label for="password" class="margin-bottom-0">{{ lang.local[lang.lang].t3 }}</label>
            <input
              id="password"
              class="font-size-12 backgroundColor-none border-none padding-none font-italic letter-spacing-2 height-20"
              :class="formControlPassword"
              :placeholder="placeholderPassword"
              @focus="auth.focusPassword = true"
              @blur="auth.focusPassword = false"
              v-model="password"
              v-validate="'required|min:5'"
              type="password"
              name="password"
            />
            <hr class="margin-vertical-0" :class="hrPasswordColor" />
            <span class="font-size-12" v-if="errors.has('password')">{{ errors.first("password") }}</span>
          </div>
          <div class="min-height-121"></div>
          <button
            id="signinButton"
            type="submit"
            class="btn btn-block font-size-14 backgroundColor-1 color-4 text-center height-40 border-radius-15 border-1 letter-spacing-2"
          >{{ lang.local[lang.lang].t6 }}</button>
        </form>
      </div>
      <div class="col-12 font-size-12 letter-spacing-2 padding-top-15 padding-bottom-10 color-5">
        {{ lang.local[lang.lang].t9 }}
        <router-link
          tag="span"
          :to="{ name: 'signup' }"
          class="font-size-14 color-1 margin-left-8 text-decor-underline cursor-pointer"
        >{{ lang.local[lang.lang].t7 }}</router-link>
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
      lang: this.$store.state.lang,
      auth: this.$store.state.auth
    };
  },
  computed: {
    ...mapGetters("auth", [
      "formControlEmail",
      "formControlPassword",

      "focusEmail",
      "focusPassword",

      "placeholderEmail",
      "placeholderPassword",

      "hrEmailColor",
      "hrPasswordColor"
    ]),
    email: {
      get() {
        return this.auth.email;
      },
      set(val) {
        this.$store.commit("auth/EMAIL", val);
      }
    },
    password: {
      get() {
        return this.auth.password;
      },
      set(val) {
        this.$store.commit("auth/PASSWORD", val);
      }
    }
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loginUser();
        } else {
          this.$swal("message", "Your input is not valid!", "warning");
        }
      });
    }
  },
  updated() {
    this.auth.emailError = this.$validator.errors.has("email");
    this.auth.passwordError = this.$validator.errors.has("password");
  }
};
</script>

<style></style>
