import styles from "./form.module.css";

type TProps = { message: undefined | string; onShow: boolean };

function FormError({ message, onShow }: TProps) {
  return (
    <>
      {onShow && (
        <div className={styles["form-error"]}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default FormError;
