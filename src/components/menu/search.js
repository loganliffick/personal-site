import React, { useState, useEffect } from 'react';

const SearchBar = (props, { data }) => {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    // const newFilter = data.filter((value) => {
    //   return value.includes(searchWord);
    // });
    // setFilteredData(newFilter);
  };

  return (
    <input
      autoComplete="false"
      className="search"
      onChange={handleFilter}
      placeholder="Type a command or search..."
      ref={props.innerRef}
      tabIndex={0}
      type="text"
    />
  );
};

export default SearchBar;
