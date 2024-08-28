import Menu from "../Menu/Menu";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__content} container`}>
        <div className={styles.footer__year}>
          {new Date().getFullYear()} MYBOOK
        </div>
        <Menu isHover={false} />
      </div>
    </footer>
  );
};

export default Footer;
