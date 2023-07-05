import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>Countup</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p> {num}</p>
      {faceShowFlag && <p>((+_+))</p>}
    </>
  );
};

export default App;
