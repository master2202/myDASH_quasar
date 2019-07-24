/*
export function someGetter (state) {
}
*/
export function profile_edit(state) {
  return state.profile_edit;
}
export function profile_edit_icon(state, getters, rootState) {
  if (!rootState.settings_main.profile_route) {
    state.profile_edit = false;
  }
  if (state.profile_edit) {
    return require("../../../../assets/icons/" +
      state.profile_edit_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" +
    state.profile_edit_icon +
    ".svg");
}

// profile_select
export function profile_select(state) {
  for (const key in state.profile_select) {
    if (state.profile_select[key] === true) {
      console.log(key);
      return key;
    }
  }
}

// profile_select_icon
export function profile_1_icon(state) {
  if (state.profile_select.profile_1) {
    return require("../../../../assets/icons/" +
      state.profile_1_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" + state.profile_1_icon + ".svg");
}
export function profile_2_icon(state) {
  if (state.profile_select.profile_2) {
    return require("../../../../assets/icons/" +
      state.profile_2_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" + state.profile_2_icon + ".svg");
}

export function profile_3_icon(state) {
  if (state.profile_select.profile_3) {
    return require("../../../../assets/icons/" +
      state.profile_3_active_icon +
      ".svg");
  }
  return require("../../../../assets/icons/" + state.profile_3_icon + ".svg");
}

// profile_banner_all
export function profile_banner(state) {
  if (state.profile_select.profile_1) {
    if (
      state.profile.profile_1 === undefined ||
      state.profile.profile_1.banner === null
    ) {
      return require("../../../../assets/main/profile_banner_blank.png");
    }
    return state.profile.profile_1.banner;
  }
  if (state.profile_select.profile_2) {
    if (
      state.profile.profile_2 === undefined ||
      state.profile.profile_2.banner === null
    ) {
      return require("../../../../assets/main/profile_banner_blank.png");
    }
    return state.profile.profile_2.banner;
  }
  if (state.profile_select.profile_3) {
    if (
      state.profile.profile_3 === undefined ||
      state.profile.profile_3.banner === null
    ) {
      return require("../../../../assets/main/profile_banner_blank.png");
    }
    return state.profile.profile_3.banner;
  }
}
// profile_avatar_all
export function profile_avatar(state) {
  if (state.profile_select.profile_1) {
    if (
      state.profile.profile_1 === undefined ||
      state.profile.profile_1.avatar === null
    ) {
      return require("../../../../assets/main/profile_avatar_blank.png");
    }
    return state.profile.profile_1.avatar;
  }
  if (state.profile_select.profile_2) {
    if (
      state.profile.profile_2 === undefined ||
      state.profile.profile_2.avatar === null
    ) {
      return require("../../../../assets/main/profile_avatar_blank.png");
    }
    return state.profile.profile_2.avatar;
  }
  if (state.profile_select.profile_3) {
    if (
      state.profile.profile_3 === undefined ||
      state.profile.profile_3.avatar === null
    ) {
      return require("../../../../assets/main/profile_avatar_blank.png");
    }
    return state.profile.profile_3.avatar;
  }
}

// profile_name_all
export function profile_name(state) {
  if (state.profile_select.profile_1) {
    if (
      state.profile.profile_1 === undefined ||
      state.profile.profile_1.name === null
    ) {
      return "Profile 1";
    }
    return state.profile.profile_1.name;
  }
  if (state.profile_select.profile_2) {
    if (
      state.profile.profile_2 === undefined ||
      state.profile.profile_2.name === null
    ) {
      return "Profile 2";
    }
    return state.profile.profile_2.name;
  }
  if (state.profile_select.profile_3) {
    if (
      state.profile.profile_3 === undefined ||
      state.profile.profile_3.name === null
    ) {
      return "Profile 3";
    }
    return state.profile.profile_3.name;
  }
}
