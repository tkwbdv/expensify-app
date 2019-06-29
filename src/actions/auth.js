import { firebase } from "../firebase/firebase";

const login = (uid) => ({
  type: "LOGIN",
  uid
});

const logout = () => ({
  type: "LOGOUT"
});

const startLogin = (provider) => {
  return () => {
    return firebase.auth().signInWithPopup(provider)
      .catch(error => new Error(error.message));
  };
};

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { startLogin, startLogout, login, logout };