import './book-list-item.css';
import React from 'react';

const BookListItem = ({ book }) => {
  const { title, author, price, cover } = book;

  return (
    <div className="card">
      <img src={cover} className="card-text card-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <div className="d-flex footer-card-section">
          <p className="card-text">{price} $</p>
          <a href="/#" className="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export { BookListItem };
