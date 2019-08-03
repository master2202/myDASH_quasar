/*
export function someAction (context) {
}
*/
import Vue from "vue";
import ClientService from "../../../../services/ClientService";

export function People_Search_Focus({ commit }, payload) {
  commit("PEOPLE_SEARCH_FOCUS", payload);
}

// send token to server, if success return profile_data
export async function People_Find({ commit }, payload) {
  try {
    Vue.swal({ title: "searching...", allowOutsideClick: false });
    Vue.swal.showLoading();
    const res = await ClientService.peopleData({
      token: localStorage.getItem("token"),
      person: payload
    });
    if (res.data.people.length === 0) {
      Vue.swal({ title: "Person not found!" });
      Vue.swal.hideLoading();
    } else {
      Vue.swal.close();
      commit("PEOPLE_LIST", res.data.people);
    }
  } catch (error) {
    commit("auth/SET_ERROR", error, { root: true });
  }
}
