import styles from "./home.module.css";

function SAboutUs() {
  return (
    <section className={`section ${styles["about-us"]}`} id="about">
      <div className="main-inline-mw even-columns">
        <div className={styles["about-content"]}>
          <h2 className="heading">Creating Memories with the People You Love</h2>
          <ul className={styles["about-list"]}>
            <li className={styles["about-list-item"]}>
              <div className={styles["about-list-circle"]}></div>
              <p>
                Brudda is an event planner web app that allows like-minded individuals to host and
                attend events both locally and online. With our platform, you can easily connect
                with others who share your interests and passions.
              </p>
            </li>
            <li className={styles["about-list-item"]}>
              <div className={styles["about-list-circle"]}></div>
              <p>
                Whether you're looking to organize a meetup, attend a workshop, or join a virtual
                conference, Brudda has got you covered. Sign up today and start creating
                unforgettable experiences!
              </p>
            </li>
          </ul>
        </div>
        <div className={styles["about-gallery"]}>
          <div className={styles["gallery-img-wrapper"]}>
            <div className={styles["gallery-img"]}></div>
          </div>
          <div className={styles["gallery-img-wrapper"]}>
            <div className={styles["gallery-img"]}></div>
          </div>
          <div className={styles["gallery-img-wrapper"]}>
            <div className={styles["gallery-img"]}></div>
          </div>
          <div className={styles["gallery-img-wrapper"]}>
            <div className={styles["gallery-img"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SAboutUs;
