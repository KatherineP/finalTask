import React from 'react';
import './price-filter.css';
import { useDispatch } from 'react-redux';
import { getFilterPriceValue } from '../../store/actionCreators';

const PriceFilter = () => {
  const dispatch = useDispatch();
  return (
    <select
      className="custom-select price-filter"
      onChange={(e) => {
        dispatch(getFilterPriceValue(e.target.value));
      }}
    >
      <option value="Price">Price</option>
      <option value="< 25">{`price < 25`}</option>
      <option value="< 50">{`25 < price < 50`}</option>
      <option value="> 50">{`price > 50`}</option>
    </select>
  );
};

export { PriceFilter };
