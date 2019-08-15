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
  // if (rootState.settings_profile.profile._id === payload[0]) {
  //   return alert("Can not connect with yourself!");
  // }
  let person_profile_name = payload[1] !== null ? payload[1] : "Anonymous";
  let name_1 =
    rootState.settings_profile.profile.profile_1.name !== null
      ? rootState.settings_profile.profile.profile_1.name
      : "Profile 1";
  let avatar_1 =
    rootState.settings_profile.profile.profile_1.avatar !== null
      ? rootState.settings_profile.profile.profile_1.avatar
      : "../../../../assets/main/profile_anon.jpg";
  let name_2 =
    rootState.settings_profile.profile.profile_2.name !== null
      ? rootState.settings_profile.profile.profile_2.name
      : "Profile 2";
  let avatar_2 =
    rootState.settings_profile.profile.profile_2.avatar !== null
      ? rootState.settings_profile.profile.profile_2.avatar
      : "../../../../assets/main/profile_anon.jpg";
  let name_3 =
    rootState.settings_profile.profile.profile_3.name !== null
      ? rootState.settings_profile.profile.profile_3.name
      : "Profile 3";
  let avatar_3 =
    rootState.settings_profile.profile.profile_3.avatar !== null
      ? rootState.settings_profile.profile.profile_3.avatar
      : "../../../../assets/main/profile_anon.jpg";

  const { value: fruit } = await Vue.swal.fire({
    title:
      "<div class='container'><div class='row'><div class='col-12'>connect with</div><div class='col-12'><strong>" +
      person_profile_name +
      "</strong></div><div class='col-12'><strong>( " +
      payload[2] +
      " )</strong></div><div class='col-12'>as:</div></div></div>",
    input: "radio",
    inputOptions: {
      html_1:
        "<div class='container padding-bottom-10 cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        avatar_1 +
        "'/><div>" +
        name_1 +
        "</div></div></div></div>",

      html_2:
        "<div class='container padding-bottom-10 cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        avatar_2 +
        "'/><div>" +
        name_2 +
        "</div></div></div></div>",

      html_3:
        "<div class='container cursor-pointer'><div class='row'><div class='col-12'><img class='border-radius-100 border-dark-5 img-fluid profile_connect margin-horizontal-10' src='" +
        avatar_3 +
        "'/><div>" +
        name_3 +
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
      person: payload.toLowerCase()
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
