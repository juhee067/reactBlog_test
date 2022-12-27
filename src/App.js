import { useState } from "react";
import "./App.css";

function App() {
  let [content, setTitle] = useState([
    "남자코트추천",
    "여자코트추천",
    "엄마코트추천",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
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
    </div>
  );
}

export default App;
