import { ChangeEvent } from "react";
import "./search-box.styles.css";

type ISeacrBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ onChangeHandler }: ISeacrBoxProps) => {
  return (
    <>
      <input
        className="search-box"
        type="search"
        name="character"
        placeholder="Search character by name"
        onChange={onChangeHandler}
      />
    </>
  );
};
export default SearchBox;
