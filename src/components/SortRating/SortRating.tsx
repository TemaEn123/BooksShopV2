import React from "react";

import RangeRating from "../ui/RangeRating/RangeRating";

import styles from "./styles.module.scss";

interface Props {
  value: [number, number];
  handleChange: (type: "from" | "to", value: number) => void;
  setValue: React.Dispatch<React.SetStateAction<[number, number]>>;
  min: number;
  max: number;
}

const SortRating = ({ value, setValue, min, max, handleChange }: Props) => {
  return (
    <div className={styles.sortRating}>
      <RangeRating min={min} max={max} value={value} setValue={setValue} />
      <div className={styles.sortRating__inputs}>
        <div>
          <input
            min={min}
            max={max}
            onChange={(e) => setValue([Number(e.target.value), value[1]])}
            onBlur={(e) => handleChange("from", Number(e.target.value))}
            type="number"
            value={value[0].toString().replace(/^0+/, "")}
          />
        </div>
        <div>
          <input
            min={min}
            max={max}
            type="number"
            onBlur={(e) => handleChange("to", Number(e.target.value))}
            onChange={(e) => setValue([value[0], Number(e.target.value)])}
            value={value[1].toString().replace(/^0+/, "")}
          />
        </div>
      </div>
    </div>
  );
};

export default SortRating;
