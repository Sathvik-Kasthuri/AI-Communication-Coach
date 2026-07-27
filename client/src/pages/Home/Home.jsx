import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h2>Practice. Improve. Speak With Confidence.</h2>

        <p>
          AI-powered platform for interview preparation and daily speaking
          practice.
        </p>

        <button>Start Practicing</button>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
