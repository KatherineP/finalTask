import { LOGIN_FROM_LOCAL_STORAGE, LOG_OUT } from './types';

const loginFromLocalStorage = (userInfo) => ({
  type: LOGIN_FROM_LOCAL_STORAGE,
  userInfo,
});

const logOut = () => {
  localStorage.removeItem('userInfo');
  return {
    type: LOG_OUT,
  };
};

export { loginFromLocalStorage, logOut };
