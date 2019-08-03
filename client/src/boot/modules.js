import Vue from "vue";
import store from "../store/index";
import VueSweetalert2 from "vue-sweetalert2";
import VeeValidate from "vee-validate";
import VueSocketIO from "vue-socket.io";
Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
Vue.use(
  new VueSocketIO({
    debug: true,
    // connection: "https://mydash-server.herokuapp.com",
    connection: "http://localhost:3000",
    vuex: {
      store,
      actionPrefix: "socket_"
      // mutationPrefix: "SOCKET_"
    }
    //options: { path: "/my-app/" } //Optional options
  })
);
