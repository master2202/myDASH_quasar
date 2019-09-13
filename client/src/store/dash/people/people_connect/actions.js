/*
export function someAction (context) {
}
*/
export function People_Connect({ commit }, payload) {
  // need to send data to connections
  commit("PEOPLE_CONNECT_SELECT", payload);
}
