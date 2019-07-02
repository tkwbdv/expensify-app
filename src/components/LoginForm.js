import React, { useState } from "react";
import { connect } from "react-redux";
import { startLogin, startSignup } from "../actions/auth";

const LoginForm = ({ startLoginDispatch, startSignupDispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleClickSignup = (e) => {
    e.preventDefault();
    startSignup(email, password)()
      .then(res => typeof res === "string" ? setError(res) : startSignupDispatch(email, password));
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    startLogin(undefined, email, password)()
      .then(res => typeof res === "string" ? setError(res) : startLoginDispatch(undefined, email, password));
  };

  return (
    <div>
      <h3 className="modal__title">Login via E-Mail</h3>
      <div className="modal__button-container">
      </div>
      <form className="form">
        E-Mail: <input type="text" autoFocus value={email} onChange={onEmailChange} />
        Password: <input type="password" value={password} onChange={onPasswordChange} />
        {error && <p>{error}</p>}
        <div className="modal__button-container">
          <button type="submit" className="button button--confirm" onClick={handleClickLogin}>Login</button>
          <button className="button button--confirm button--secondary" onClick={handleClickSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
};

const MapDispatchToProps = (dispatch) => ({
  startLoginDispatch: (provider, email, password) => dispatch(startLogin(provider, email, password)),
  startSignupDispatch: (email, password) => dispatch(startSignup(email, password))
});

export default connect(undefined, MapDispatchToProps)(LoginForm)