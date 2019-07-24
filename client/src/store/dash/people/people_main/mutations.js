/*
export function someMutation (state) {
}
*/
export function POST_ROUTE(state, payload) {
  state.post_route = payload;
}
export function CHAT_ROUTE(state, payload) {
  state.chat_route = payload;
}
export function SEARCH_ROUTE(state, payload) {
  state.search_route = payload;
}
