/*
export function someGetter (state) {
}
*/
export function people_connect_data(state) {
  console.log(" ")
  console.log("people_connect_data:");
  console.log(state.people_connect_data);
  return state.people_connect_data;
}
export function people_connect_list_icon(state) {
  if (state.people_connect.list) {
    return require("../../../../assets/icons/" +
      state.list_icon_active +
      ".svg");
  }
  return require("../../../../assets/icons/" + state.list_icon + ".svg");
}
export function people_connect_queue_icon(state) {
  if (state.people_connect.queue) {
    return require("../../../../assets/icons/" +
      state.que_icon_active +
      ".svg");
  }
  return require("../../../../assets/icons/" + state.que_icon + ".svg");
}
export function people_connect_request_icon(state) {
  if (state.people_connect.request) {
    return require("../../../../assets/icons/" + state.re_icon_active + ".svg");
  }
  return require("../../../../assets/icons/" + state.re_icon + ".svg");
}
