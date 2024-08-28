import styles from "./style.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <p>Something went wrong, please refresh the page.</p>
    </div>
  );
};

export default Error;
