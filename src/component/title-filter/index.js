import React from 'react';
import './title-filter.css';
import { useDispatch } from 'react-redux';
import { getFilterTitleValue } from '../../store/actionCreators';

const TitleSearch = () => {
  const dispatch = useDispatch();
  return (
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control"
        placeholder="type to search"
        onChange={(e) => {
          dispatch(getFilterTitleValue(e.target.value));
        }}
      />
    </div>
  );
};

export { TitleSearch };
