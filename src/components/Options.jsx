import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import { data } from "./Data";
export default function Options() {
  // let [Data, setData] = useState([]);
  let [City, setCity] = useState("");
  let [capital, setcapital] = useState("");
  const handelchange = (e) => {
    setCity(e.target.value);

    setcapital(data.find((ctr) => ctr.name === e.target.value).citsies);
    // if (City === "Albania") {
    //   console.log("this is albania");
    // } else if (City === "Afghanistan") {
    //   debugger;
    //   console.log("this is Afghanistan");
  };
  const handelchangecity = (e) => {
    console.log("working");
  };

  console.log(City);
  console.log(capital);

  // const capitals = Data.map((item) => {
  //   return item.capital;
  // });
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((res) => res.json())
      .then((res) => console.log(res));
  });

  // console.log(capitals);

  return (
    <div>
      {/* <div

        style={{ background: { color }, width: 300 + "px", height: 50 + "px" }}
      >
        {color}
      </div> */}
      <select onChange={handelchange}>
        <option value="">select state</option>
        {data &&
          data.map((item, i) => (
            <>
              {/* <option value="">select state</option> */}
              <option value={item.name}>{item.name}</option>
              {/* <option value="default">chose an option</option> */}
            </>
          ))}
      </select>
      <br />
      <select onChange={handelchangecity}>
        {capital &&
          capital.map((item, i) => (
            <>
              <option value={item}>{item}</option>
              {/* <option value="default">chose an option</option> */}
            </>
          ))}
      </select>
    </div>
  );
}
