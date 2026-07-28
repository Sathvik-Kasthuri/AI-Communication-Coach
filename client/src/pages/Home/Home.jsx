import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <main>
        <section className="hero">
          <h1>Practice. Improve. Speak With Confidence.</h1>

          <p>
            Improve your English communication and interview skills with instant
            AI feedback and personalized practice.
          </p>

          <div className="hero-btns">
            <button className="primary-btn">Start Practicing</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
