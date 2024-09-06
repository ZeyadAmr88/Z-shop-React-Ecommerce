// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title = "Login";
const btnText = "Login Now";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Please provide a valid email & password");
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Error during Gmail sign up");
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              {errorMessage && (
                <div className="error-message text-danger mb-1">
                  {errorMessage}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <Link to="/forgetpass">Forget Password?</Link>
              </div>
            </div>
            <div className="form-group">
              <button className="d-block lab-btn" type="submit">
                <span>{btnText}</span>
              </button>
            </div>
          </form>
          <div className="account-bottom">
            <span className="d-block cate pt10">
              Do not Have an Account? <Link to="/sign-up">Sign Up</Link>
            </span>
            <span
              className="or"
              style={{ width: "100px", borderRadius: "5px" }}
            >
              <span onClick={handleRegister} style={{ cursor: "pointer" }}>
                {" "}
                or Gmail{" "}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
