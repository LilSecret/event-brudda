import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="section">
          <h2>Discover and Attend Exciting Events</h2>
          <div className="events-navigation">
            <div className="left-hand">
              <div className="btn"></div>
            </div>
            <div className="right-hand">
              <div className="btn" data-type="primary">
                All Events
              </div>
              <div className="btn" data-type="outline">
                Outline{"asdf"}
              </div>
            </div>
          </div>
        </section>
        <section className="section text-center"></section>
      </main>
      <Footer />
    </>
  );
}
