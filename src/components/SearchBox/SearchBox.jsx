import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ text, onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  return (
    <div className={s.container}>
      <label className={s.label} htmlFor='search'>
        {text}
      </label>
      <input
        className={s.input}
        id='search'
        type='text'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;