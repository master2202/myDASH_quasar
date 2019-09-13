/*
export function someGetter (state) {
}
*/
export function post_outline_icon(state) {
  if (state.post_route) {
    return require("../../../../assets/icons/" +
      state.post_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.post_outline_icon +
    ".svg");
}
export function chat_outline_icon(state) {
  if (state.chat_route) {
    return require("../../../../assets/icons/" +
      state.chat_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.chat_outline_icon +
    ".svg");
}
export function search_outline_icon(state) {
  if (state.search_route) {
    return require("../../../../assets/icons/" +
      state.search_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.search_outline_icon +
    ".svg");
}
export function connect_outline_icon(state) {
  if (state.connect_route) {
    return require("../../../../assets/icons/" +
      state.connect_outline_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.connect_outline_icon +
    ".svg");
}
