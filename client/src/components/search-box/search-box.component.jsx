import React from "react";

import "./search-box.styles.css";

//life cycle mtd and state no then use funct component

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange} //synthetic event
  />
);
