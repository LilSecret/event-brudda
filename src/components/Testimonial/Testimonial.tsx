import styles from "./testimonial.module.css";

type TProps = {
  picture: string;
  name: string;
  username: string;
  message: string;
};

function Testimonial({ picture, name, username, message }: TProps) {
  return (
    <div className={styles["testimonial"]}>
      <header>
        <img className={styles["testimonial-img"]} src={picture} alt="Testimonial Profile" />
        <div className={styles["testimonial-subheading"]}>
          <h3 className="heading">{name}</h3>
          <p>@{username}</p>
        </div>
      </header>
      <div className={styles["testimonial-message"]}>
        <p>{message}</p>
      </div>
      <div className={styles["testimonial-rating"]}>
        <img src="/public/five-star-rating.png" alt="5 star rating" />
      </div>
    </div>
  );
}

export default Testimonial;
