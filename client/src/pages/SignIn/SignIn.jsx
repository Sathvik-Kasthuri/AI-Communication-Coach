import React from "react";
import signimg from "../../assets/images/AI_Voice2.jpg";
import { Link } from "react-router-dom";
import "./SignIn.css";

import Navbar from "../../components/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <main className="signin-page">
        <div className="signin-image">
          <img src={signimg} alt="Communication practice" />
        </div>

        <div className="signin-content">
          <h1>Welcome Back</h1>

          <p>Login to continue your communication practice.</p>

          <form>
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
          </form>
          <p className="signup-text">
            Don't have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default SignIn;
