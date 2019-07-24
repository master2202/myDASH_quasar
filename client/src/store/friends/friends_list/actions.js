import ClientService from "../../../services/ClientService";

// send token to server, if success return friend_list
export async function friends_list({ state, commit }) {
  try {
    //state.loader = true;
    const res = await ClientService.friendsList({
      token: localStorage.getItem("token")
    });
    //state.loader = false;
    state.friends = res.data.friends;
    console.log(state.friends);
  } catch (error) {
    //state.loader = false;
    commit("auth/SET_ERROR", error, { root: true });
  }
}
