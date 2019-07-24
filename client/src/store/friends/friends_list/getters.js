export function friendsList(state) {
  if (state.friends !== undefined) {
    state.friends.forEach((item, index, arr) => {
      if (arr[index].avatar === null) {
        arr[index].avatar = require("../../../assets/main/avatar.svg");
      }
    });
    return state.friends;
  }
  return [
    {
      name: "No friends added",
      avatar: require("../../../assets/main/avatar.svg")
    }
  ];
}
