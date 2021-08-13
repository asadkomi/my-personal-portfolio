import Main from "../components/home/Main.jsx";
import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);
  return (
    <div>
      <Main />
    </div>
  );
}
