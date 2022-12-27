import { useState } from "react";
import "./App.css";

function App() {
  let [content, setContent] = useState([
    "남자코트추천",
    "여자코트추천",
    "엄마코트추천",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [input, setInput] = useState();
  return (
    <div className="App">
      {content.map((a, i) => {
        return (
          <div className="content" key={i}>
            <h1>
              {content[i]}

              <button
                onClick={() => {
                  let copy = [...good];
                  copy[i]++;
                  setGood(copy);
                }}
              >
                👍🏻
              </button>
              <span>{good[i]}</span>
            </h1>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input
        className="blank"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          let copy = [...content];
          copy.unshift(input);
          setContent(copy);
          let goodCopy = [...good];
          goodCopy.unshift(0);
          setGood(goodCopy);
        }}
      >
        글발행
      </button>
      {input.value == null ? <div>ss</div> : null}
    </div>
  );
}

export default App;
