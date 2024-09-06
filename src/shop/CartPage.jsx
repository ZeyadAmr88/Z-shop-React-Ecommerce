import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";
import { Alert } from "react-bootstrap";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State for order confirmation

  useEffect(() => {
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCartItem);
  }, []);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItem([...cartItem]);

    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItem([...cartItem]);

      localStorage.setItem("cart", JSON.stringify(cartItem));
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItem.filter((carItem) => carItem.id !== item.id);

    setCartItem(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubtotal = cartItem.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Your Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">

            {/* Order Confirmation Alert */}
            {orderConfirmed && (
              <Alert variant="success">
                Your Order is placed successfully
              </Alert>
            )}

            {/* CART TOP */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody>
                  {cartItem.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                            className="cart-plus-minus-box"
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code ...."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage setOrderConfirmed={setOrderConfirmed} /> {/* Pass the setOrderConfirmed prop */}
                  </div>
                </form>
              </div>

              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="eg">Egypt</option>
                          <option value="sa">Saudi Arabia</option>
                          <option value="uae">United Arab Emirates</option>
                          <option value="pls">Palestine</option>
                          <option value="qtr">Qatar</option>
                        </select>

                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="ca">Cairo</option>
                          <option value="gi">Giza</option>
                          <option value="alx">Alexandria</option>
                          <option value="ri">Riyad</option>
                          <option value="qa">Qassem</option>
                          <option value="dh">Abu dhabi</option>
                          <option value="du">Dubai</option>
                          <option value="qu">Quds</option>
                          <option value="do">Doha</option>
                        </select>

                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <input type="text" className="cart-page-input-text invisible" />

                      <button type="submit">Update Adress</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
