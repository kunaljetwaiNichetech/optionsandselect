import React from "react";
import { useLocation } from "react-router-dom";

export default function Displaying() {
  const location = useLocation();
  const value = location.state;
  //   console.log("this is loactio state value", value);
  return (
    <div>
      <h1>displaying the details</h1>
      <h2>the state you selected: {value.statee}</h2>
      {/* <h2>the city you selected: {value.city}</h2> */}
    </div>
  );
}
