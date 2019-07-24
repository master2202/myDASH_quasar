/*
export function someGetter (state) {
}
*/
export function account_edit(state) {
  return state.account_edit;
}
export function account_edit_icon(state, getters, rootState) {
  if (!rootState.settings_main.account_route) {
    state.account_edit = false;
  }
  if (state.account_edit) {
    return require("../../../../assets/icons/" +
      state.account_edit_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.account_edit_icon +
    ".svg");
}
