import { useState } from "react";

const SelectedOption = () => {
  const countries = [
    { value: "0", text: "Select" },
    { value: "1", text: "USA" },
    { value: "2", text: "Canada" },
    { value: "3", text: "Japan" },
    { value: "4", text: "Mexico" },
  ];
  const options = countries.map((option) => {
    return <option value={option.value}>{option.text}</option>;
  });
  const [countryValue, setCountryValue] = useState("");
  return (
    <div>
      <div>
        <label>Country: </label>
        <select
          value={countryValue}
          onChange={(e) => setCountryValue(e.target.value)}
        >
          {options}
        </select>
      </div>
      <div>
        <button onClick={() => setCountryValue("1")}>USA</button>
        <button onClick={() => setCountryValue("2")}>Canada</button>
        <button onClick={() => setCountryValue("3")}>Japan</button>
        <button onClick={() => setCountryValue("4")}>Mexico</button>
      </div>
    </div>
  );
};
export default SelectedOption;
