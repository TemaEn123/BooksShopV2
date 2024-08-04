import styles from "./styles.module.scss";

interface Props {
  title: string;
}

const FiltersTitle = ({ title }: Props) => {
  return <h4 className={styles.title}>{title}</h4>;
};

export default FiltersTitle;
