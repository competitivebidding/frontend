import React, { useState } from "react";
import "./Filter.scss";

import arrow from "../../assets/imgAuctions/arrow.svg"
import arrow2 from "../../assets/imgAuctions/arrow2.svg"

const Filter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>Filtering</h2>
        <span className="hide-filter" onClick={handleToggleVisibility}>
          {isVisible ? <img src={arrow2} alt="arrow"/> : <img src={arrow2} alt="arrow2"/>}
        </span>
      </div>
      {isVisible && (
        <>
          <div className="filter-categories">
            <h3>Selected Categories:</h3>
            
            <label>
              <input type="checkbox" name="category" value="all" checked />
              All categories
            </label>
            <label>
              <input type="checkbox" name="category" value="gadgets" />
              Gadgets
            </label>
            <label>
              <input type="checkbox" name="category" value="electronics" />
              Electronics
            </label>
          </div>
          <div className="filter-brands">
            <h3>Brand:</h3>
            <input type="text" placeholder="Поиск" />
            <label>
              <input type="checkbox" name="brand" value="apple" />
              Apple
            </label>
            <label>
              <input type="checkbox" name="brand" value="samsung" />
              Samsung
            </label>
            <label>
              <input type="checkbox" name="brand" value="xiaomi" />
              Xiomi
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;