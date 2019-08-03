/*
export function someMutation (state) {
}
*/
export function ACCOUNT_EDIT(state) {
  state.account_edit
    ? (state.account_edit = false)
    : (state.account_edit = true);
}

export function ACC_RESET(state) {
  (state.accName = null), (state.accEmail = null), (state.accPass = null);
}
