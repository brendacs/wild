export function login(user) {
  return {
    type: "LOG_IN",
    payload: {
      isLoggedIn: true,
      user: user
    }
  }
}

export function logout(user) {
  return {
    type: "LOG_OUT",
    payload: {
      isLoggedIn: false,
      user: user
    }
  }
}
