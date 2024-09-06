/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Ratting from "./../components/Ratting";

const ProductCards = ({ GridList, products }) => {
  // console.log(products);
  return (
    <div>
      <div
        className={`shop-product-wrap row justify-content-center ${
          GridList ? "grid" : "list"
        }`}
      >
        {products.map((product, i) => (
          <div key={1} className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
              {/* PRODUCT IMAGE   */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>

                {/* PRODUCT ACTION LINKS   */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    {" "}
                    <i className="icofont-eye"></i>{" "}
                  </Link>
                </div>
              </div>

              {/* PRODUCT CONTENT   */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className="productRating">
                  <Ratting />
                </p>
                <h6>$ {product.price}</h6>
              </div>
            </div>

            {/* LIST STYLE     */}
            <div className="product-list-item" >
              {/* PRODUCT IMAGE   */}
              <div className="product-thumb" >
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>

                {/* PRODUCT ACTION LINKS   */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    {" "}
                    <i className="icofont-eye"></i>{" "}
                  </Link>
                </div>
              </div>

              {/* PRODUCT CONTENT   */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p className="productRating">
                  <Ratting />
                </p>
                <h6>$ {product.price}</h6>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
