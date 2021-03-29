import React from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { placeOrder } from '../../store/middleware';
import { clearCart } from '../../store/actionCreators';

const Cart = () => {
  const booksInTheCart = useSelector((state) => state.booksInTheCart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(booksInTheCart);
  const allBooksIds = booksInTheCart.reduce((acc, book) => {
    if (book.count === 1) {
      acc += `${book.id},`;
    } else {
      for (let i = 0; i < book.count; i++) {
        acc += `${book.id},`;
      }
    }
    return acc;
  }, '');
  const stringOfIds = allBooksIds.slice(0, -1);

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  if (booksInTheCart.length === 0) {
    return (
      <div className="shopping-cart-page">
        <i className="fas fa-shopping-cart" />
        <p className="empty-cart">Cart empty...</p>
      </div>
    );
  }
  return (
    <div className="full-cart">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-info me-md-2 purchase"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => dispatch(placeOrder(user.token, stringOfIds))}
        >
          Purchase
        </button>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="staticBackdropLabel">
                You successfully placed an order!
              </h6>
            </div>
            <div className="modal-body">
              <CartTable booksInTheCart={booksInTheCart} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => dispatch(clearCart())}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartTable booksInTheCart={booksInTheCart} />
    </div>
  );
};

const CartTable = ({ booksInTheCart }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {booksInTheCart.map((book) => (
            <tr key={book.id}>
              <th scope="row" className="book-title">
                {book.name}
              </th>
              <td>{book.count}</td>
              <td>{book.price}</td>
              <td>{book.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        Total price:&nbsp;
        {booksInTheCart
          .reduce((acc, book) => {
            return (acc += +book.total);
          }, 0)
          .toFixed(2)}
        &nbsp; $
      </div>
    </>
  );
};

export { Cart, CartTable };
