import { CiSearch } from "react-icons/ci";

import styles from "./styles.module.scss";
import { useState } from "react";

interface Props {
  placeholder: string;
  type: string;
}

const Search = ({ placeholder, type }: Props) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.search}>
      <CiSearch />
      <input
        className={`${type === "author" ? styles.author : ""}`}
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
