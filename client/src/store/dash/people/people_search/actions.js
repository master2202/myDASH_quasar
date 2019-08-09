/*
export function someAction (context) {
}
*/
import Vue from "vue";
import ClientService from "../../../../services/ClientService";

export function People_Search_Focus({ commit }, payload) {
  commit("PEOPLE_SEARCH_FOCUS", payload);
}

export function People_Search_Back({ commit }) {
  commit("PEOPLE_SEARCH_BACK");
}

export function People_Search_Back_Hover({ commit }, payload) {
  commit("PEOPLE_SEARCH_BACK_HOVER", payload);
}

export async function People_Search_Connect({ commit, rootState }, payload) {
  const { value: fruit } = await Vue.swal.fire({
    title:
      "<div class='container'><div class='row'><div class='col-12'>connect with</div><div class='col-12'><strong>" +
      payload +
      "</strong></div><div class='col-12'>as:</div></div></div>",
    input: "radio",
    inputOptions: {
      html_1:
        "<div class='container padding-bottom-10 cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        rootState.settings_profile.profile.profile_1.avatar +
        "'/><div>" +
        rootState.settings_profile.profile.profile_1.name +
        "</div></div></div></div>",

      html_2:
        "<div class='container padding-bottom-10 cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        rootState.settings_profile.profile.profile_2.avatar +
        "'/><div>" +
        rootState.settings_profile.profile.profile_2.name +
        "</div></div></div></div>",

      html_3:
        "<div class='container cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        rootState.settings_profile.profile.profile_3.avatar +
        "'/><div>" +
        rootState.settings_profile.profile.profile_3.name +
        "</div></div></div></div>"
    },
    inputPlaceholder: "Select a fruit",
    showCancelButton: true,
    inputValidator: value => {
      return new Promise(resolve => {
        if (value === "oranges") {
          resolve();
        } else {
          resolve("You need to select oranges :)");
        }
      });
    }
  });

  if (fruit) {
    Vue.swal.fire("You selected: " + fruit);
  }
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
      setTimeout(() => {
        commit("app/LOAD_ON_FLY", payload, { root: true });
      }, 0);
    }
  } catch (error) {
    commit("auth/SET_ERROR", error, { root: true });
  }
}
