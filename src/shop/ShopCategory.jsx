import React from "react";
import PropTypes from "prop-types";
import Data from "../products.json";

const ShopCategory = ({
  setProducts,
  selectedCategory,
  menuItems,
  setSelectedCategory,
  filterItem,
  setcurrentPage,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => {
            setProducts(Data);
            setSelectedCategory("All");
            setcurrentPage(1);
          }}
          className={`m-2 ${selectedCategory === "All" ? "my-bg-success" : ""}`}
        >
          All
        </button>
        {menuItems.map((Val, id) => (
          <button
            className={`m-2 ${selectedCategory === Val ? "my-bg-success" : ""}`}
            key={id}
            onClick={() => {
              filterItem(Val);
              setcurrentPage(1);
            }}
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

ShopCategory.propTypes = {
  setProducts: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  filterItem: PropTypes.func.isRequired,
  setcurrentPage: PropTypes.func.isRequired,
};

export default ShopCategory;
