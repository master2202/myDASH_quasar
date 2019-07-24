/*
export function someMutation (state) {
}
*/
export function PROFILE_EDIT(state) {
  state.profile_edit
    ? (state.profile_edit = false)
    : (state.profile_edit = true);
}
// profile select
export function PROFILE_SET_SELECT(state, payload) {
  for (const key in state.profile_select) {
    if (state.profile_select[key] === true) {
      state.profile_select[key] = false;
    }
  }
  for (const key in state.profile_select) {
    if (key === payload) {
      state.profile_select[key] = true;
    }
  }
}
