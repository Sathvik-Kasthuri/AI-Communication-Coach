import React from "react";
import signupimg from "../../assets/images/AI_Voice3.jpg";
import { Link } from "react-router-dom";
import "./SignUp.css";

import Navbar from "../../components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <main className="signup-page">
        <div className="signup-image">
          <img src={signupimg} alt="Communication" />
        </div>

        <div className="signup-content">
          <h1>Create Your Account</h1>

          <p>Start improving your communication skills with AI.</p>

          <form>
            <input type="text" placeholder="Enter Your FullName" />

            <input type="email" placeholder="Enter Your Email" />

            <input type="password" placeholder="Enter Your Password" />

            <button type="submit">SignUp</button>
          </form>

          <p className="signin-text">
            Already have an account?
            <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default SignUp;
