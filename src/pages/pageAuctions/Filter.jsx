import React, { useState } from "react";
import "./Filter.scss";

import arrowAfter2 from "../../assets/imgAuctions/arrow.svg"
import arrowBefore from "../../assets/imgAuctions/arrow2.svg"
import arrowAfter from "../../assets/imgAuctions/arrowAfter2.svg"
import arrowBefore2 from "../../assets/imgAuctions/arrowAfter.svg"

const Filter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(true);
  const [isBrandVisible, setIsBrandVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleToggleCategoriesVisibility = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  const handleToggleBrandVisibility = () => {
    setIsBrandVisible(!isBrandVisible);
  };

  return (
    <div className="filter">
      <div className="filter__header">
        <h2 className="filter__title">Filtering</h2>
        <span className="filter__hide" onClick={handleToggleVisibility}>
          {isVisible ? <img src={arrowBefore} alt="arrow" /> : <img src={arrowAfter} alt="arrow2" />}
        </span>

      </div>
      {isVisible && (
        <>
          <div>
          <h3 className="filter__selected filter__title2">Selected Categories:</h3>
          </div>

          <div className="categories">

          <h3 className="categories__title filter__title2">Categories:</h3>
          <span className="categories__arrow"  onClick={handleToggleCategoriesVisibility} >
            {isCategoriesVisible ? <img src={arrowBefore2} alt="arrow" /> : <img src={arrowAfter2} alt="arrow" />}
            </span>
          </div>

          <div className="filter__categories" style={{ display: isCategoriesVisible ? "block" : "none" }}>

            <label className="checkbox__container">
              <input type="checkbox" name="category" value="all" />
              <span className="checkmark"></span>
              All categories
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="category" value="gadgets" />
              <span className="checkmark"></span>
              Gadgets
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="category" value="electronics" />
              <span className="checkmark"></span>
              Electronics
            </label>
          </div>


          <div className="brand">

            <h3 className="brand__title filter__title2">Brand</h3>
            <span className="brand__arrow"  onClick={handleToggleBrandVisibility} >
            {isBrandVisible ? <img src={arrowBefore2} alt="arrow" /> : <img src={arrowAfter2} alt="arrow" />}
            </span>
            </div>

          <div className="filter__brands" style={{ display: isBrandVisible ? "block" : "none" }}>

            <input type="text" placeholder="Search" />

            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="apple" />
              <span className="checkmark"></span>
              Apple
            </label>

            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="samsung" />
              <span className="checkmark"></span>
              Samsung
            </label>
            <label className="checkbox__container">
              <input type="checkbox" name="brand" value="Xiaomi" />
              <span className="checkmark"></span>
              Xiaomi
            </label>

          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
