import React from 'react';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actionCreators';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const booksInTheCart = useSelector((state) => state.booksInTheCart);
  if (!user.token) return null;
  return (
    <header>
      <div className="sign-out">
        {user.username}
        <i className="fas fa-sign-out-alt" onClick={() => dispatch(logOut())} />
      </div>
      <div className="header d-flex justify-content-between">
        <h1 className="header-title">JS Band Store</h1>
        <Link
          to="/cart"
          className="shopping-cart"
          style={{ textDecoration: 'none' }}
        >
          <i className="fas fa-shopping-cart" />
          {`Cart(${booksInTheCart.length})`}
        </Link>
      </div>
    </header>
  );
};

export { Header };
