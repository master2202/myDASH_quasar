/*
export function someMutation (state) {
}
*/
export function PEOPLE_SEARCH_FOCUS(state, payload) {
  if (payload === "input-in") {
    state.person_input_in = true;
    state.people_search_focus = true;
  } else if (payload === "input-out") {
    state.person_input_in = false;
    state.people_search_focus = false;
  } else if (state.person_input_in !== true) {
    state.people_search_focus = payload;
  } else {
    return;
  }
}
export function PERSON_INPUT(state, payload) {
  state.person_input = payload;
}
export function PEOPLE_LIST(state, payload) {
  console.log(payload);
  state.people_data = payload;
  state.people_list = true;
}
