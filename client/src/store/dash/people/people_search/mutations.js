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
  console.log("");
  console.log("PEOPLE_LIST:");
  console.log(payload);
  state.people_data = payload;
  state.people_list = true;
}

export function PEOPLE_SEARCH_BACK(state) {
  state.people_data = [];
  state.people_list = false;
  state.people_search_back_hover = false;
}

export function PEOPLE_SEARCH_BACK_HOVER(state, payload) {
  state.people_search_back_hover = payload;
}
