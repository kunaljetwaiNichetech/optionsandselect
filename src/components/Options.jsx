import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import { data } from "./Data";
import SelectedOption from "./Optionssssssss";
export default function Options() {
  // let [Data, setData] = useState([]);
  let [City, setCity] = useState("");
  let [Selectedcountry, setSelectedcountry] = useState("");
  let [capital, setcapital] = useState("");
  const handelchange = (e) => {
    const Selectedcountry = e.target.value;
    setSelectedcountry(Selectedcountry);
    setCity("");
    setcapital(data.find((ctr) => ctr.name === e.target.value)?.citsies || []);
    // if (e.target.value) {
    //   setcapital(data.find((ctr) => ctr.name === e.target.value).citsies);
    // } else {
    //   setcapital("");
    // }
    // console.log("this is e.tareget value", !e.target.value);
  };

  console.log(City);
  console.log(capital);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => console.log(res));
  });

  return (
    <div>
      {/* <div

        style={{ background: { color }, width: 300 + "px", height: 50 + "px" }}
      >
        {color}
      </div> */}
      <select onChange={handelchange} value={Selectedcountry}>
        <option value="">select state</option>
        {data &&
          data.map((item, i) => (
            <>
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            </>
          ))}
      </select>
      <br />
      <select onChange={(e) => setCity(e.target.value)} value={City}>
        <option value="">select city</option>
        {capital &&
          capital.map((item, i) => (
            <>
              <option key={item} value={item}>
                {item}
              </option>
            </>
          ))}
      </select>
    </div>
    // <div>
    //   <SelectedOption />
    // </div>
  );
}
