// App init
export function run_myWelcome({ commit }) {
  console.log("commit(app/APP)");
  commit("APP");
}
export function run_myDash({ commit }) {
  // setTimeout(() => {
  console.log("commit(app/LOAD)");
  console.log("commit(app/APP)");
  commit("LOAD");
  commit("APP");
  // }, 1000);
}
