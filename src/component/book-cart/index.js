import './book-cart.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToCart } from '../../store/actionCreators';

const BookCart = ({ bookDetails }) => {
  const dispatch = useDispatch();
  const booksInTheCart = useSelector((state) => state.booksInTheCart);
  const { price, count, id, title } = bookDetails;
  const [countValue, setCountValue] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedBook, setAddedBook] = useState({
    name: title,
    id: id,
    price: price,
    count: null,
    total: null,
  });

  const handleChangeCount = (e) => {
    let value = e.target.value;
    setCountValue(value);
    setTotalPrice((value * price).toFixed(2));
    setAddedBook({
      ...addedBook,
      count: value,
      total: (value * price).toFixed(2),
    });
  };

  const addToCart = () => {
    if (countValue) {
      dispatch(addBookToCart(addedBook));
    }
  };

  return (
    <div className="card book-cart">
      <div className="card-body">
        <div className="price d-flex">
          <p className="card-text">Price, $</p>
          <p>{price}</p>
        </div>
        <div className="d-flex count">
          <p className="card-text">Count</p>
          <input
            className="count-input"
            type="number"
            value={countValue}
            onChange={handleChangeCount}
            min="1"
            max={count}
          ></input>
        </div>
        <div className="d-flex total">
          <p className="card-text">Total Price, $</p>
          <p className="card-text">{totalPrice}</p>
        </div>
        <button className="btn btn-info add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export { BookCart };
