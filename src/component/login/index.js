import React, { useState, useEffect } from 'react';
import './login.css';
import logo from './login.png';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/middleware';
import { loginFromLocalStorage } from '../../store/actionCreators';
import { ErrorIndicator } from '../index';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);
  const [usernameValue, setUsernameValue] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [inputClasses, setInputClasses] = useState('username-input');

  const handleChangeUsername = (e) => {
    let name = e.target.value;
    setUsernameValue(name.trim());
    if (3 < name.length && name.length < 17) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameError || !usernameValue) {
      setInputClasses('username-input incorrect-username');
    } else {
      setInputClasses('username-input');
      dispatch(login(usernameValue));
    }
  };

  if (user.token) {
    return <Redirect to="/catalog" />;
  }

  return (
    <div className="login-container">
      <p className="login-title" align="center">
        JS Band Store
      </p>
      <div>
        <img className="login-image" src={logo} alt="login" />
      </div>
      {error ? (
        <ErrorIndicator />
      ) : (
        <LoginForm
          inputClasses={inputClasses}
          usernameValue={usernameValue}
          handleChangeUsername={handleChangeUsername}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
};

const LoginForm = ({
  inputClasses,
  usernameValue,
  handleChangeUsername,
  handleLogin,
}) => {
  return (
    <form className="login-form">
      <input
        className={inputClasses}
        type="text"
        align="center"
        placeholder="Username"
        value={usernameValue}
        onChange={handleChangeUsername}
      />
      <p className="help-text">
        &#9889; Your username must be 4-16 characters long.
      </p>
      <a className="submit" align="center" href="/" onClick={handleLogin}>
        Log in
      </a>
    </form>
  );
};

export { Login };
