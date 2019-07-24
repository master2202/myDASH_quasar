import Vue from "vue";
import ClientService from "../../../services/ClientService";

// send user input to server, if success token return
export async function loginUser({ state, commit, rootState }) {
  try {
    //state.loader = true;
    const res = await ClientService.loginUser({
      email: state.email,
      password: state.password
    });
    //state.loader = false;
    console.log("commit(auth/SET_TOKEN)");
    commit("SET_TOKEN", res.data.token);
    rootState.friends_list.friends = res.data.friends;
    this.$router.push({ name: "home" });
  } catch (error) {
    //state.loader = false;
    console.log("commit(auth/SET_ERROR)");
    commit("SET_ERROR", error);
  }
}

// send user input to server and validate same
export async function registerUser({ state, commit, rootState }) {
  try {
    //state.loader = true;
    const res = await ClientService.registerUser({
      name: state.username,
      email: state.email,
      password: state.password,
      lang: rootState.lang.lang,
      created: new Date().toLocaleString()
    });
    //state.loader = false;
    this.$router.push("signin");
    Vue.swal(res.data.message + "", "You can login now", "success");
  } catch (error) {
    //state.loader = false;
    console.log("commit(auth/SET_ERROR)");
    commit("SET_ERROR", error);
  }
}
