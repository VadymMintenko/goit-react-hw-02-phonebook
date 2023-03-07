import React from 'react';
export const Filter = ({ filter, searchContact }) => {
  return (
    <div>
      <label>
        Search
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={searchContact}
        ></input>
      </label>
    </div>
  );
};
