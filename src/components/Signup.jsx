import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register Now";
const btnText = "Signup";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const erroeMsg = error.message;
        setErrorMessage("Please provide a valid email & password");
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    // console.log(email, password, confirm_password);

    if(password !== confirm_password){
        setErrorMessage("Password doesn't match! Please, provide a correct password")
    }
    else{
        setErrorMessage("")
        createUser(email, password).then((userCredential) => {
            const user = userCredential.user
            alert("Account created successfully")
            navigate(from,{replace:true})
        }).catch((error) => {
            console.log(error.message);
            alert(`${error.message}`)
            
        })
    }
    
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Showing message  */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger mb-1">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="form-group">
              <button className="d-block lab-btn" type="submit">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className="d-block cate pt10">
              Have an Account? <Link to="/login">Login</Link>
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

export default Signup;
