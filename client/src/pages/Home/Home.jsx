import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

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

        <section className="features">
          <h2>Everything You Need to Improve Your Communication</h2>

          <p>
            Practice with AI, prepare for interviews, and track your
            communication progress.
          </p>

          <div className="features-container">
            <div className="feature-card">
              <h3>🎤 Daily Speaking Practice</h3>
              <p>Practice speaking with AI conversations every day.</p>
            </div>
            <div className="feature-card">
              <h3>💼 Interview Practice</h3>
              <p>Practice real interview questions with AI-powered feedback.</p>
            </div>
            <div className="feature-card">
              <h3>🤖 AI Feedback</h3>
              <p>
                Get instant feedback on your grammar, fluency, and
                pronunciation.
              </p>
            </div>
            <div className="feature-card">
              <h3>📈 Progress Tracking</h3>
              <p>
                Track your communication progress and identify areas to improve.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
