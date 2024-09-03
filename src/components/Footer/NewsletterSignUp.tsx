import { useDispatch, useSelector } from "react-redux";
import styles from "./footer.module.css";
import { authActions } from "../../state/Auth/authSlice";
import { RootState } from "../../state/store";

function NewsletterSignUp() {
  const isSubscribed = useSelector((state: RootState) => state.auth.isSubscribed);
  const dispatch = useDispatch();

  const handleSubClick = () => {
    dispatch(authActions.subscribe());
  };

  return (
    <div className={styles["newsletter-wrapper"]}>
      <h4 className={`heading ${styles["newsletter-heading"]}`}>Sign Up for our Newsletter</h4>
      <p>Get notified on latest updates and features</p>
      <button
        className="btn"
        data-type="accent"
        data-disabled={isSubscribed}
        onClick={handleSubClick}>
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

export default NewsletterSignUp;
