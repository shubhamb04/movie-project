import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    props.search(searchValue);
  };

  // const resetInputFiled = () => {
  //   setSearchValue("");
  // };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   props.search(searchValue);
  //   resetInputFiled();
  // };

  return (
    <div className="col col-sm-4">
      <input
        type="text"
        placeholder="Movie name..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
