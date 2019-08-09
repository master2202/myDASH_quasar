/*
export function someGetter (state) {
}
*/
export function people_search_icon(state) {
  if (state.people_search_focus) {
    return require("../../../../assets/icons/" +
      state.people_search_icon_active +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.people_search_icon +
    ".svg");
}

export function people_search_back_icon(state) {
  if (state.people_search_back_hover) {
    return require("../../../../assets/icons/" +
      state.people_search_back_icon_active +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.people_search_back_icon +
    ".svg");
}

export function people_search_focus(state) {
  return state.people_search_focus;
}
export function people_list(state) {
  return state.people_list;
}
export function people_data(state) {
  return state.people_data;
}
