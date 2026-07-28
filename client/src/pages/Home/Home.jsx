import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <h1>Practice. Improve. Speak With Confidence.</h1>

          <p>
            AI-powered platform for interview preparation and daily speaking
            practice.
          </p>

          <button>Start Practicing</button>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
