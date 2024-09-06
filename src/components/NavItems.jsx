import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const { user, loading, logOut } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {user ? (
              <span
                className="lab-btn me-3 bg-danger text-white p-2 small"
                onClick={handleLogout}
              >
                Logout
              </span>
            ) : (
              <>
                <Link to="/sign-up" className="lab-btn me-3">
                  <span>Create Account</span>
                </Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo pq">Z-Shop</div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/" onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={() => setMenuToggle(!menuToggle)}>Shop</Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuToggle(!menuToggle)}>About</Link>
                  </li>
                  <li>
                    <Link to="/cart-page" onClick={() => setMenuToggle(!menuToggle)}>Cart</Link>
                  </li>
                </ul>
              </div>

              {user ? (
                <span
                  className="lab-btn me-3 d-none d-md-block bg-danger text-white p-2 small"
                  onClick={handleLogout}
                >
                  Logout
                </span>
              ) : (
                <>
                  <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                    Create Account
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Login
                  </Link>
                </>
              )}

              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
