/*
export function someAction (context) {
}
*/
export function home_route({ commit, rootState }, payload) {
  rootState.mydash.home_route = payload;
  commit("HOME_ROUTE", payload);
}
