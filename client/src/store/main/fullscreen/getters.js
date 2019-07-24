export function fullscreen(state, getters, rootState) {
  if (rootState.app.app.resize) {
    state.fullscreen = false;
  }
  return state.fullscreen;
}
export function fullscreen_outline_icon(state) {
  if (state.fullscreen) {
    return require("../../../assets/icons/" +
      state.fullscreen_outline_exit_icon +
      ".svg");
  }
  return require("../../../assets/icons/" +
    state.fullscreen_outline_icon +
    ".svg");
}
