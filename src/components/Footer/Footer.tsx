import Menu from "../Menu/Menu";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__content} container`}>
        <div className={styles.footer__year}>2020 MYBOOK</div>
        <Menu isHover={false} />
      </div>
    </footer>
  );
};

export default Footer;
