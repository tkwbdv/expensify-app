import { firebase } from "../firebase/firebase";

const login = (uid) => ({
  type: "LOGIN",
  uid
});

const logout = () => ({
  type: "LOGOUT"
});

const startLogin = (provider, email, password) => {
  return () => {
    if (provider) {
      return firebase.auth().signInWithPopup(provider)
        .catch(error => error.message);
    } else {
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => error.message)
    }
  };
};

const startSignup = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => error.message);
  };
}

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { startLogin, startLogout, startSignup, login, logout };