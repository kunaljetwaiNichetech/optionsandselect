import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import { data } from "./Data";
import SelectedOption from "./Optionssssssss";
import { useNavigate } from "react-router-dom";
export default function Options() {
  const location = useNavigate();
  // let [Data, setData] = useState([]);
  let [City, setCity] = useState("");
  let [Selectedcountry, setSelectedcountry] = useState("");
  let [capital, setcapital] = useState([]);
  useEffect(() => {
    let retrivval = JSON.parse(localStorage.getItem("dropdata"));
    console.log(retrivval);
    if (retrivval) {
      // setSelectedcountry(retrivval.statee);
      setcapital(retrivval.statee);
    }
    // setcapital(retrivval.statee);
  });
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
  const handelchangecity = (e) => {
    // let d = setCity(data.find((ctr) => ctr.citsies === e.target.value).citsies);
    let d = e.target.value;
    debugger;

    let disp = { city: d, statee: Selectedcountry };
    location("/display", { state: disp });
    localStorage.setItem("dropdata", JSON.stringify(disp));
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
      <select onChange={handelchangecity} value={City}>
        <option value="">select city</option>
        {capital &&
          capital.map((item, i) => (
            <>
              <option id={i} key={item} value={item}>
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
