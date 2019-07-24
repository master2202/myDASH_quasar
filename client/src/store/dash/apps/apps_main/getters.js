/*
export function someGetter (state) {
}
*/
export function active_outline_icon(state) {
  if (state.active_route) {
    return require("../../../../assets/icons/" +
      state.active_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.active_outline_icon +
    ".svg");
}
export function shop_outline_icon(state) {
  if (state.shop_route) {
    return require("../../../../assets/icons/" +
      state.shop_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.shop_outline_icon +
    ".svg");
}
