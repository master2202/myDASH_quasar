/*
export function someAction (context) {
}
*/
export function post_route({ commit, rootState }, payload) {
  rootState.mydash.people_route = payload;
  commit("POST_ROUTE", payload);
}
export function chat_route({ commit, rootState }, payload) {
  rootState.mydash.people_route = payload;
  commit("CHAT_ROUTE", payload);
}
export function search_route({ commit, rootState }, payload) {
  rootState.mydash.people_route = payload;
  commit("SEARCH_ROUTE", payload);
}
export function connect_route({ commit, rootState }, payload) {
  rootState.mydash.people_route = payload;
  commit("CONNECT_ROUTE", payload);
}
