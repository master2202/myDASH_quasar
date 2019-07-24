export function FULLSCREEN_LOGIC(state) {
  state.fullscreen === true
    ? (state.fullscreen = false)
    : (state.fullscreen = true);
}
