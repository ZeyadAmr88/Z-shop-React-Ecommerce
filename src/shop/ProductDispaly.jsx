import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState('');
  const [size, setSize] = useState('Select Size');
  const [color, setColor] = useState('Select Color');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id,
      img,
      name,
      price,
      quantity: prequantity,
      size,
      color,
      coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex((cartItem) => cartItem.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    setQuantity(1);
    setSize('Select Size');
    setColor('Select Color');
    setCoupon('');
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} review </span>
        </p>
        <h4>$ {price}</h4>
        <h6>{seller}</h6>
      </div>
      {/* CART COMPONENT */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product size">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
              <option>Red</option>
              <option>Ash</option>
              <option>Pink</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="cart-plus-minus">
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input
              className='cart-plus-minus-box'
              type="number"
              name="qtybutton"
              id='qtybutton'
              value={prequantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            />
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder='Enter Discount Code'
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <button type='submit' className='lab-btn'>
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className='lab-btn' style={{ backgroundColor: "#a6c9a9" }}>
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    seller: PropTypes.string,
    ratingsCount: PropTypes.number,
    quantity: PropTypes.number,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDisplay;
