/*
export function someGetter (state) {
}
*/
export function profile_outline_icon(state) {
  if (state.profile_route) {
    return require("../../../../assets/icons/" +
      state.profile_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.profile_outline_icon +
    ".svg");
}
export function account_outline_icon(state) {
  if (state.account_route) {
    return require("../../../../assets/icons/" +
      state.account_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.account_outline_icon +
    ".svg");
}
