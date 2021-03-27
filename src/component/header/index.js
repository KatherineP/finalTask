import React from 'react';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actionCreators';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (!user.token) return null;
  return (
    <header>
      <div className="sign-out">
        {user.username}
        <i className="fas fa-sign-out-alt" onClick={() => dispatch(logOut())} />
      </div>
      <div className="header d-flex justify-content-between">
        <h1 className="header-title">JS Band Store</h1>
        <div className="shopping-cart">
          <i className="fas fa-shopping-cart" />
          Cart (3)
        </div>
      </div>
    </header>
  );
};

export { Header };
