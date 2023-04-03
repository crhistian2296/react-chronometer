import React, { useEffect, useState } from "react";
import Chronometer from "./Chronometer.jsx";

const Home = () => {
  const [sec, setSec] = useState(0);
  const handleTimer = () => setSec((state) => state + 1);
  const [outputCifer, setOutputCifer] = useState("000000");

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTimer();
      setOutputCifer(sec.toString().padStart(6, "0"));
    }, 1000);

    return () => clearTimeout(timer);
  }, [sec]);

  return (
    <div>
      <Chronometer initialValue={outputCifer} />
    </div>
  );
};

export default Home;
