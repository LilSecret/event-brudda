import Testimonial from "../../components/Testimonial/Testimonial";
import styles from "./home.module.css";

function STestimonial() {
  return (
    <section className={`section ${styles["testimonial-section"]}`}>
      <header>
        <h2 className="heading">Hear From Our Satisfied Customers</h2>
        <p>Discover how we've made a difference for our clients.</p>
      </header>
      <div className="main-inline-mw even-columns">
        <div className={styles["testimonials"]}>
          <div className={styles["testimonial-column"]}>
            <Testimonial
              picture="/Home/t-marvin.jpg"
              name="Marvin Price"
              username="Louie"
              message="I've been using Brudda for my corporate events and it has saved me so much time and stress. I will definitely be using this app for all future events."
            />
            <Testimonial
              picture="/Home/t-brooke.jpg"
              name="Brooke Spencer"
              username="cutiebae"
              message="I recently used Brudda for my wedding planning and I couldn't be happier with the results. The app made it so easy to stay organized. Highly recommend!"
            />
          </div>
          <div className={styles["testimonial-column"]}>
            <Testimonial
              picture="/Home/t-talor.jpg"
              name="Talor Montgomery"
              username="basic-pressure"
              message="I was hesitant to use an event planning app at first, but Brudda totally exceeded my expectations. The design is clean and user-friendly, and it made it easier to get more audience. If you looking for somewhere to host your events, look no further my friend."
            />
            <Testimonial
              picture="/Home/t-ethan.jpg"
              name="Ethan Pearson"
              username="silversnake"
              message="As a non-profit organization, we often host fundraising events, and this platform has been a game-changer for us. I highly recommend this website to anyone looking to elevate their event hosting experience!"
            />
          </div>
          <div className={styles["testimonial-column"]}>
            <Testimonial
              picture="/Home/t-hailey.jpg"
              name="Hailey Wells"
              username="pink-hearts"
              message="I can't thank this event hosting website enough for their exceptional service during our charity gala. It was very easy to setup."
            />
            <Testimonial
              picture="/Home/t-honey.jpg"
              name="Effie Ross"
              username="peachie"
              message="Planning our corporate retreat was simple thanks to Event Brudda. I recommend using them for anyone looking to host their events!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default STestimonial;
