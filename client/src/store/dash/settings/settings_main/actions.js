/*
export function someAction (context) {
}
*/
export function profile_route({ commit, rootState }, payload) {
  rootState.mydash.settings_route = payload;
  commit("PROFILE_ROUTE", payload);
}
export function account_route({ commit, rootState }, payload) {
  rootState.mydash.settings_route = payload;
  commit("ACCOUNT_ROUTE", payload);
}
