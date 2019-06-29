import React from "react";
import { connect } from "react-redux";
import { startLogin, startAnonLogin } from "../actions/auth";
import { googleAuthProvider, githubAuthProvider } from "../firebase/firebase";

export const LoginPage = ({ startLogin, startAnonLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button onClick={() => startLogin(googleAuthProvider)} provider="google" className="button">Login with Google</button>
      <button onClick={() => startLogin(githubAuthProvider)} provider="github" className="button">Login with Github</button>
      <button onClick={() => startAnonLogin()} provider="anon" className="button">Login anonymously</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: (provider) => dispatch(startLogin(provider)),
  startAnonLogin: () => dispatch(startAnonLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);