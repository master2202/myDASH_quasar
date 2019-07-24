/*
export function someAction (context) {
}
*/
export function active_route({ commit, rootState }, payload) {
  rootState.mydash.apps_route = payload;
  commit("ACTIVE_ROUTE", payload);
}
export function shop_route({ commit, rootState }, payload) {
  rootState.mydash.apps_route = payload;
  commit("SHOP_ROUTE", payload);
}
