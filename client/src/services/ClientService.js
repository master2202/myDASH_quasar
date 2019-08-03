import Api from "./Api";

export default {
  //REQUESTS from CLIENT

  registerUser(params) {
    return Api().post("welcome/signup/", params);
  },
  loginUser(params) {
    return Api().post("welcome/signin/", params);
  },
  verifyUser(params) {
    return Api().post("mydash/account/verify", params);
  },
  updateAccount(params) {
    return Api().post("mydash/account/update", params);
  },
  friendsList(params) {
    return Api().post("mydash/friends", params);
  },
  peopleData(params) {
    return Api().post("mydash/people", params);
  },
  profileData(params) {
    return Api().post("mydash/profile", params);
  },
  profile_update(params) {
    return Api().put("mydash/profile/update", params);
  }
};
