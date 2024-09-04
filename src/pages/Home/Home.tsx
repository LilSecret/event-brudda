import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Event from "../../components/Event/Event";
import { useEffect, useState } from "react";
import { TEvent } from "../../types";
import { API_EVENTS } from "../../API";
import styles from "./home.module.css";
import AboutUs from "./AboutUs";

export default function HomePage() {
  const [events, setEvents] = useState<TEvent[]>([]);

  useEffect(() => {
    API_EVENTS.getAllEvents().then((res) => {
      setEvents(res);
    });
  }, []);

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
        <section className="section text-center">
          {events.map((event) => {
            return <Event event={event} />;
          })}
        </section>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
