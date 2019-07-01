import React, { useState } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { googleAuthProvider, githubAuthProvider } from "../firebase/firebase";
import LoginModal from "./LoginModal";
import LoginForm from "./LoginForm";

export const LoginPage = ({ startLogin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClickGoogle = () => startLogin(googleAuthProvider);
  const handleClickGithub = () => startLogin(githubAuthProvider);

  const openModal = () => setShowLoginModal(true);
  const closeModal = () => setShowLoginModal(false);

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button onClick={handleClickGoogle} provider="google" className="button">Login with Google</button>
        <button onClick={handleClickGithub} provider="github" className="button">Login with Github</button>
        <button onClick={openModal} provider="email" className="button">Login with E-mail</button>
      </div>
      <LoginModal
        onCloseModal={closeModal}
        showModal={showLoginModal}
        contentLabel="Loginform"
      >
        <LoginForm />
      </LoginModal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);