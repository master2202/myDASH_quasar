export default {
  // return user info from jwt
  userValue: null,

  // return 'true' if enter protected route
  isAuth: false,
  isRestricted: false,

  // auth data
  username: null,
  email: null,
  password: null,

  // define validation style
  focusUsername: false,
  focusEmail: false,
  focusPassword: false,
  usernameError: false,
  emailError: false,
  passwordError: false,

  // define password style
  passwordShow: false
};
