import { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </>
  );
};

export default AddCategory;
