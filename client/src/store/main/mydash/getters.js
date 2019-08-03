// myDash_Background
export function myDash_Background(state) {
  state.myDash_Background = Math.floor(Math.random() * 60);
  state.myDash_Background = 60;
  return require("../../../assets/backgrounds/" +
    state.myDash_Background +
    ".jpg");
}
// myDash_logo
export function myDash_logo_text(state) {
  return require("../../../assets/main/" + state.myDash_logo_text + ".svg");
}
export function myDash_logo(state) {
  return require("../../../assets/main/" + state.myDash_logo + ".svg");
}
export function logout_icon(state) {
  return require("../../../assets/icons/" + state.logout_icon + ".svg");
}
export function people_icon(state) {
  if (state.people_route) {
    return require("../../../assets/icons/" +
      state.people_active_icon +
      ".svg");
  }
  return require("../../../assets/icons/" + state.people_icon + ".svg");
}
export function app_icon(state) {
  if (state.apps_route) {
    return require("../../../assets/icons/" + state.app_active_icon + ".svg");
  }
  return require("../../../assets/icons/" + state.app_icon + ".svg");
}
export function settings_icon(state) {
  if (state.settings_route) {
    return require("../../../assets/icons/" +
      state.settings_active_icon +
      ".svg");
  }
  return require("../../../assets/icons/" + state.settings_icon + ".svg");
}
export function home_icon(state) {
  if (state.home_route) {
    return require("../../../assets/icons/" + state.home_active_icon + ".svg");
  }
  return require("../../../assets/icons/" + state.home_icon + ".svg");
}
