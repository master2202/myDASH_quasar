/*
export function someMutation (state) {
}
*/
export function PEOPLE_CONNECT_UPDATE(state, payload) {
  state.connect_data.person_id = payload[0];
  state.connect_data.person_name = payload[1];
  state.connect_data.host_connect_profile = payload[2];
  state.connect_data.status = payload[3];
  console.log("");
  console.log("PEOPLE_CONNECT_UPDATE:");
  console.log(state.connect_data);
}

export function PEOPLE_CONNECT_SELECT(state, payload) {
  for (const key in state.people_connect) {
    if (state.people_connect[key] === true) {
      state.people_connect[key] = false;
    }
  }
  for (const key in state.people_connect) {
    if (key === payload) {
      state.people_connect[key] = true;
    }
  }
  console.log("");
  console.log("PEOPLE_CONNECT_SELECT:");
  console.log(payload);
}
