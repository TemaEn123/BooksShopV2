import Select from "react-select";

import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import { selectOptions } from "../../constants/constants";

const Sorting = () => {
  const dispatch = useAppDispatch();

  const handleChangeOption = (
    value: string | undefined,
    sort: string | undefined
  ) => {
    dispatch(changeFilters({ key: "sort", value: value }));
    dispatch(changeFilters({ key: "sort-direction", value: sort }));
  };

  return (
    <Select
      onChange={(option) => handleChangeOption(option!.value, option!.sort)}
      defaultValue={selectOptions[0]}
      className="reactSelect"
      classNamePrefix="reactSelect"
      options={selectOptions}
    />
  );
};

export default Sorting;
