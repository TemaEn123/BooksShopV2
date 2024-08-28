import { memo, useEffect, useState } from "react";

import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useSearch } from "../../helpers/hooks/useSearch";

import SearchItem from "../ui/SearchItem/SearchItem";
import { CiSearch } from "react-icons/ci";
import { Circles } from "react-loader-spinner";

import styles from "./styles.module.scss";

interface Props {
  placeholder: string;
  type: string;
  handleSearch: (debouncedSearch: string | undefined) => void;
}

const Search = memo(({ placeholder, type, handleSearch }: Props) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (!debouncedSearch.length) {
      handleSearch(undefined);
    } else {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  const searchData = useSearch(type, debouncedSearch);

  document.addEventListener("click", (e: MouseEvent) => {
    if (document.querySelector(".search__result")) {
      if ((e.target as HTMLElement).closest(".search")) {
        document.querySelector(".search__result")!.classList.remove("none");
      } else {
        document.querySelector(".search__result")!.classList.add("none");
      }
    }
  });

  return (
    <div className={`${styles.search} search`}>
      <div className={styles.search__wrapper}>
        <CiSearch />
        {searchData?.isFetching && (
          <div className={styles.search__loading}>
            <Circles />
          </div>
        )}
        <input
          className={`${type === "author" ? styles.author : ""}`}
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {type === "books" && searchData?.data?.books.length ? (
        <div className={`${styles.search__result} search__result`}>
          {searchData.data.books.map((book) => (
            <SearchItem book={book[0]} key={book[0].id} />
          ))}
        </div>
      ) : null}
    </div>
  );
});

export default Search;
