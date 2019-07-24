import Vue from "vue";
// v-models
export function USERNAME(state, payload) {
  state.username = payload;
}
export function EMAIL(state, payload) {
  state.email = payload;
}
export function PASSWORD(state, payload) {
  state.password = payload;
}
// error handle
export function SET_ERROR(state, error) {
  console.log(error);
  if (error.response) {
    Vue.swal("Oops!", error.response.data.error + "", "error");
  } else {
    //router.push("signin");
    Vue.swal("Oops!", error + "", "error");
  }

  console.log("SWAL error");
  // }
}
// info handle
export function SET_INFO(state, message) {
  Vue.swal({
    type: "info",
    text: message,
    allowOutsideClick: false,
    preConfirm: () => {
      this.$router.push("signin");
    }
  });
}

// token handle
export function SET_TOKEN(state, token) {
  if (token) {
    localStorage.setItem("token", token);
    state.userValue = decodeToken(token);
  } else {
    localStorage.removeItem("token");
    state.userValue = null;
  }
}

// get info from token
let decodeToken = token => {
  let base64Url = token.split(".")[1];
  return JSON.parse(window.atob(base64Url));
};
