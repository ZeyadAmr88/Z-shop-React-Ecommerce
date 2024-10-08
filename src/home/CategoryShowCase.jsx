import React, { useState } from "react";
import Ratting from "../components/Ratting";
import { Link } from "react-router-dom";


// Import images
import img01 from "../assets/images/categoryTab/01.jpg";
import img02 from "../assets/images/categoryTab/02.jpg";
import img03 from "../assets/images/categoryTab/03.jpg";
import img04 from "../assets/images/categoryTab/04.jpg";
import img05 from "../assets/images/categoryTab/05.jpg";
import img06 from "../assets/images/categoryTab/06.jpg";
import img07 from "../assets/images/categoryTab/07.jpg";
import img08 from "../assets/images/categoryTab/08.jpg";

// Product data with paths to images in the public directory
const ProductData = [
  {
    imgUrl: img01,
    cate: "Shoes",
    title: "Nike Premier X",
    author: "/assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: img02,
    cate: "Bags",
    title: "Asthetic Bags",
    author: "/assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: img03,
    cate: "Phones",
    title: "iPhone 12",
    author: "/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: img04,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "/assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: img05,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "/assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: img06,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "/assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: img07,
    cate: "Bags",
    title: "Look Less Chanel Bag",
    author: "/assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: img08,
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "/assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

import shape1 from "../assets/images/shape-img/icon/01.png"
import shape2 from "../assets/images/shape-img/icon/02.png"

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src={shape1} alt="Shape 1" />
      </div>
      <div className="course-shape two">
        <img src={shape2} alt="Shape 2" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">Our Products</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt={product.title} />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-review">
                          <Ratting />
                        </div>
                      </div>
                    </div>
                    <div className="course-content">
                      <Link to={`/shop`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/shop" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
