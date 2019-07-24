export function fullscreen_logic({ commit, state, rootState }) {
  console.log("commit(fullscreen/FULLSCREEN_LOGIC)");
  commit("FULLSCREEN_LOGIC");
  if (state.fullscreen === true) {
    rootState.app.app.resize = false;
  }
}
