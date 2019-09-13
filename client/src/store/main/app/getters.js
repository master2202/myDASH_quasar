//app_Height
export function app_Height(state) {
  console.log("");
  console.log("app_Height:");
  console.log(state.app.height);
  return state.app.height;
}

//h_100
export function h_100(state) {
  if (state.app.width <= 1200) {
    return "h-100";
  }
  return "";
}
export function h_45_60vh(state, getters, rootState) {
  if (rootState.fullscreen.fullscreen) {
    return 100 + "%";
  } else {
    if (state.app.width > 1200) {
      return 60 + "%";
    }
    return 45 + "%";
  }
}
export function dashboard_grid(state, getters, rootState) {
  if (rootState.fullscreen.fullscreen) {
    return "col-12";
  } else {
    if (state.app.width > 1200) {
      return "col-12 col-lg-6 col-xl-6";
    }
    return "col-12 col-lg-6 col-xl-6";
  }
}
export function h_45_50vh(state) {
  if (state.app.width > 1200) {
    // return "height-50vh";
    return 50 + "%";
  }
  //return "height-45vh";
  return 45 + "%";
}
export function h_80(state) {
  return state.sideDash.height + "px";
}
export function h_bar(state) {
  return state.menuBar.height;
}
export function h_dash(state, getters, rootState) {
  if (rootState.fullscreen.fullscreen) {
    return state.app.height - 58 + "px";
  }
  return state.dashBoard.height - 58 + "px";
}
export function h_dashboard(state, getters, rootState) {
  if (rootState.fullscreen.fullscreen) {
    return state.app.height - 58;
  }
  return state.dashBoard.height - 58;
}
export function w_dashboard(state) {
  return state.dashBoard.width;
}
export function w_personCard(state) {
  return state.personCard.width;
}
export function h_36_41vh(state) {
  if (state.app.width > 1200) {
    return "height-41vh";
  }
  return "height-36vh";
}
