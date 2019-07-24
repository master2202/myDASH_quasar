/*
export function someAction (context) {
}
*/
import Vue from "vue";
import ClientService from "../../../../services/ClientService";
// edit account
export function account_edit({ commit }) {
  commit("ACCOUNT_EDIT");
}

// send token and data to server, if success update and return account_data
export async function account_update({ commit }, payload) {
  try {
    let outSideClick = true;
    await Vue.swal({
      title: "<strong>update " + payload.toUpperCase() + "</strong>",
      html:
        '<input type="password" placeholder="new password" id="swal-input1" class="swal2-input">' +
        '<input type="password" placeholder="new password again" id="swal-input2" class="swal2-input">',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => outSideClick,
      preConfirm: async () => {
        try {
          if (document.getElementById("swal-input1").value.length >= 5) {
            if (
              document.getElementById("swal-input1").value ===
              document.getElementById("swal-input2").value
            ) {
              let data = document.getElementById("swal-input1").value;
              outSideClick = false;
              const res = await ClientService.updateAccount({
                token: localStorage.getItem("token"),
                update: payload,
                data: data
              });
              setTimeout(() => {
                console.log(res);
                commit("auth/SET_INFO", res.data.message, {
                  root: true
                });
              }, 0);
            } else {
              setTimeout(() => {
                commit("auth/SET_ERROR", "Passwords do not match!", {
                  root: true
                });
              }, 0);
            }
          } else {
            setTimeout(() => {
              commit(
                "auth/SET_ERROR",
                "Passwords must be at least 5 characters!",
                {
                  root: true
                }
              );
            }, 0);
          }
        } catch (error) {
          setTimeout(() => {
            commit("auth/SET_ERROR", error, { root: true });
          }, 0);
        }
      }
    });
  } catch (error) {
    setTimeout(() => {
      commit("auth/SET_ERROR", error, { root: true });
    }, 0);
  }
}

// verify account
export async function acc_verify({ state, commit }) {
  state.accVerify = false;
  try {
    let outSideClick = true;
    await Vue.swal({
      title: "<strong>verify ACCOUNT</strong>",
      html:
        '<input type="text" placeholder="Email" id="swal-input1" class="swal2-input">' +
        '<input type="password" placeholder="Password" id="swal-input2" class="swal2-input">',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => outSideClick,
      preConfirm: async () => {
        try {
          outSideClick = false;
          const res = await ClientService.verifyUser({
            email: document.getElementById("swal-input1").value,
            password: document.getElementById("swal-input2").value,
            token: localStorage.getItem("token")
          });
          console.log(res);
          commit("auth/SET_TOKEN", res.data.token, { root: true });
          state.accVerify = true;
          outSideClick = true;
        } catch (error) {
          setTimeout(() => {
            commit("auth/SET_ERROR", error, { root: true });
          }, 0);
        }
      }
    });
  } catch (error) {
    setTimeout(() => {
      commit("auth/SET_ERROR", error, { root: true });
    }, 0);
  }
}
