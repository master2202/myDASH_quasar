/*
export function someAction (context) {
}
*/
//
import Vue from "vue";
import ClientService from "../../../../services/ClientService";
export function profile_edit({ commit }) {
  commit("PROFILE_EDIT");
}

// profile all
export function profile_set_select({ commit }, payload) {
  commit("PROFILE_SET_SELECT", payload);
}

// send token to server, if success return profile_data
export async function profile_data({ state, commit }) {
  try {
    //state.loader = true;
    const res = await ClientService.profileData({
      token: localStorage.getItem("token")
    });
    //state.loader = false;
    state.profile = res.data.profile;
    commit("PROFILE_SET_SELECT", res.data.profile.main);
    console.log(state.profile);
  } catch (error) {
    //state.loader = false;
    commit("auth/SET_ERROR", error, { root: true });
  }
}

// send token and data to server, if success update and return profile_data
export function profile_update({ state, commit }, payload) {
  try {
    let placeHolder = "";
    let outSideClick = true;
    if (payload[1] === "banner") {
      placeHolder = "https://www.your.banner/banner.jpg";
    } else if (payload[1] === "avatar") {
      placeHolder = "https://www.your.avatar/avatar.jpg";
    } else if (payload[1] === "name") {
      placeHolder = "Your Name";
    }

    Vue.swal({
      title: "update " + payload[1].toUpperCase(),
      input: "text",
      inputPlaceholder: placeHolder,
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "UPDATE",
      cancelButtonText: "CANCLE",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => outSideClick,
      preConfirm: async link => {
        try {
          outSideClick = false;
          const res = await ClientService.profile_update({
            token: localStorage.getItem("token"),
            update: payload,
            data: link
          });
          state.profile = res.data.profile;
          outSideClick = true;
        } catch (error) {
          setTimeout(() => {
            commit("auth/SET_ERROR", error, { root: true });
          }, 0);
        }
      }
    });
    //state.loader = true;
  } catch (error) {
    //state.loader = false;
    commit("auth/SET_ERROR", error, { root: true });
  }
}
