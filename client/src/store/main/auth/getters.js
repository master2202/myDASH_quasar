// password type
export function passwordType(state) {
  if (state.passwordShow) {
    return "text";
  }
  return "password";
}

// password button text
export function passwordShow(state, getters, rootState) {
  if (state.passwordShow) {
    return rootState.lang.local[rootState.lang.lang].t5;
  }
  return rootState.lang.local[rootState.lang.lang].t4;
}

// validations and errors style (css classes)
export function formControlUsername(state) {
  if (!state.usernameError) {
    return "form-control";
  }
  return "form-control-error";
}
export function focusUsername(state) {
  if (state.focusUsername && !state.usernameError) {
    return "color-1";
  } else if (state.usernameError) {
    return "color-6";
  } else {
    return "color-5";
  }
}
export function placeholderUsername(state) {
  if (state.focusUsername) {
    return "";
  }
  return "John Doe";
}
export function hrUsernameColor(state) {
  if (state.focusUsername && !state.usernameError) {
    return "backgroundColor-1";
  } else if (state.usernameError) {
    return "backgroundColor-6";
  } else {
    return "backgroundColor-5";
  }
}
export function formControlEmail(state) {
  if (!state.emailError) {
    return "form-control";
  }
  return "form-control-error";
}
export function focusEmail(state) {
  if (state.focusEmail && !state.emailError) {
    return "color-1";
  } else if (state.emailError) {
    return "color-6";
  } else {
    return "color-5";
  }
}
export function placeholderEmail(state) {
  if (state.focusEmail) {
    return "";
  }
  return "email@example.com";
}
export function hrEmailColor(state) {
  if (state.focusEmail && !state.emailError) {
    return "backgroundColor-1";
  } else if (state.emailError) {
    return "backgroundColor-6";
  } else {
    return "backgroundColor-5";
  }
}
export function formControlPassword(state) {
  if (!state.passwordError) {
    return "form-control";
  }
  return "form-control-error";
}
export function focusPassword(state) {
  if (state.focusPassword && !state.passwordError) {
    return "color-1";
  } else if (state.passwordError) {
    return "color-6";
  } else {
    return "color-5";
  }
}
export function placeholderPassword(state) {
  if (state.focusPassword) {
    return "";
  }
  return "5+ characters";
}
export function hrPasswordColor(state) {
  if (state.focusPassword && !state.passwordError) {
    return "backgroundColor-1";
  } else if (state.passwordError) {
    return "backgroundColor-6";
  } else {
    return "backgroundColor-5";
  }
}
