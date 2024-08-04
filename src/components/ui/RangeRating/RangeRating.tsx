import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  value: [number, number];
  setValue: React.Dispatch<React.SetStateAction<[number, number]>>;
  min: number;
  max: number;
}

const RangeRating = ({ value, setValue, min, max }: Props) => {
  return <RangeSlider min={min} max={max} value={value} onInput={setValue} />;
};

export default RangeRating;
