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
          {isVisible ? <img src={arrow2} alt="arrow" /> : <img src={arrow2} alt="arrow2" />}
        </span>
      </div>
      {isVisible && (
        <>
          <h3>Selected Categories:</h3>
          <div className="filter-categories">
            <h3>Categories:</h3>
            <label class="checkbox-container">
              <input type="checkbox" name="category" value="all" />
              <span class="checkmark"></span>
              All categories
            </label>

            <label class="checkbox-container">
              <input type="checkbox" name="category" value="gadgets" />
              <span class="checkmark"></span>
              Gadgets
            </label>
            
            <label class="checkbox-container">
              <input type="checkbox" name="category" value="electronics" />
              <span class="checkmark"></span>
              Electronics
            </label>
          </div>


          <div className="filter-brands">
            <h3>Brand:</h3>
            <input type="text" placeholder="Search" />

            <label class="checkbox-container">
              <input type="checkbox" name="category" value="electronics" />
              <span class="checkmark"></span>
              Apple
            </label>

            <label class="checkbox-container">
              <input type="checkbox" name="category" value="electronics" />
              <span class="checkmark"></span>
              Samsung
            </label>
            <label class="checkbox-container">
              <input type="checkbox" name="category" value="electronics" />
              <span class="checkmark"></span>
              Xiomi
            </label>

          </div>
        </>
      )}
    </div>
  );
};

export default Filter;