// App init
export function run_myWelcome({ commit }) {
  console.log("");
  console.log("run_myWelcome:");
  console.log("commit(app/APP)");
  commit("APP");
}
export function run_myDash({ commit }) {
  // setTimeout(() => {
  console.log("");
  console.log("run_myDash:");
  console.log("commit(app/LOAD)");
  console.log("commit(app/APP)");
  commit("LOAD");
  commit("APP");
  // }, 1000);
}
