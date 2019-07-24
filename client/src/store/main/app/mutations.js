// Load Elements
export function LOAD(state) {
  state.sideDash.obj = document.getElementById("sideDash");
  state.menuBar.obj = document.getElementById("menuBar");
  state.dashBoard.obj = document.getElementById("dashBoard");
}

// App init
export function APP(state) {
  let onResize = () => {
    state.app.resize = true;
    state.app.width = window.innerWidth;
    state.app.height = window.innerHeight < 745 ? 745 : window.innerHeight;
    if (state.sideDash.obj != null) {
      state.sideDash.height = state.sideDash.obj.offsetHeight - 80;
      state.menuBar.height = state.menuBar.obj.offsetHeight - 10;
      state.dashBoard.height = state.dashBoard.obj.offsetHeight;
    }
  };
  requestAnimationFrame(onResize);
  window.addEventListener("resize", () => {
    requestAnimationFrame(onResize);
  });
}
