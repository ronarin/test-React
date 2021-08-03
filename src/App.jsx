/* eslint  react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowflg, setFaceShowflg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowflg = () => {
    setFaceShowflg(!faceShowflg);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowflg || setFaceShowflg(true);
    } else {
      faceShowflg && setFaceShowflg(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowflg}>on/off</button>
      <p>{num}</p>
      {faceShowflg && <p>(￣▽￣)</p>}
    </>
  );
};

export default App;
