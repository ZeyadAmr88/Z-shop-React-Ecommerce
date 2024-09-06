import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState("");
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    resetPassword(resetEmail)
      .then(() => {
        setResetStatus("Password reset email sent!");
        setResetEmail(""); // Clear the input field
      })
      .catch((error) => {
        setResetStatus("Error sending password reset email.");
        console.error(error);
      });
  };

  return (
    <div className="forget-password-section padding-tb section-bg" style={{height: "41rem"}}>
      <div className="container">
        <div
          className="account-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 className="title">Forgot Password</h3>
          <form onSubmit={handlePasswordReset}>
            <div className="form-group">
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter your email to reset password"
                required
              />
            </div>
            <button type="submit" className="d-block lab-btn" style={{color: "#ffffff", margin: "30px"}}>
              Send Password Reset Email
            </button>
          </form>
          {resetStatus && (
            <div
              className={`reset-status ${
                resetStatus.includes("sent") ? "text-success" : "text-danger"
              } mb-1`}
            >
              {resetStatus}
            </div>
          )}
          <div className="account-bottom">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
