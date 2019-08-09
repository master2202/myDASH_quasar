export function fullscreen_logic({ commit, state, rootState }, payload) {
  console.log("commit(fullscreen/FULLSCREEN_LOGIC)");
  commit("FULLSCREEN_LOGIC");
  setTimeout(() => {
    if (rootState.people_search.people_list) {
      rootState.app.personCard.width = rootState.app.personCard.obj.offsetWidth;
    }
  }, 0);

  if (state.fullscreen === true) {
    rootState.app.app.resize = false;
  }
}
