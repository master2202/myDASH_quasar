/*
export function someGetter (state) {
}
*/
export function home_outline_icon(state) {
  if (state.landing_route) {
    return require("../../../../assets/icons/" +
      state.home_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.home_outline_icon +
    ".svg");
}
