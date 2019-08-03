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
export function account_name(state) {
  return state.accName;
  //return "account name";
}
export function account_email(state) {
  return state.accEmail;
  //return "account email";
}
export function account_password(state) {
  return state.accPass;
  // return "account password";
}
