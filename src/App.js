import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  let [content, setContent] = useState([
    "남자코트추천",
    "여자코트추천",
    "엄마코트추천",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [input, setInput] = useState("");
  const titleInputRef = useRef();
  // useEffect(() => {

  // }, [input]);

  return (
    <div className="App">
      {content.map((a, i) => {
        const goodBtn = () => {
          let copy = [...good];
          copy[i]++;
          setGood(copy);
        };
        return (
          <div className="content" key={i}>
            <h1>
              {content[i]}

              <button
                onClick={() => {
                  goodBtn();
                }}
              >
                👍🏻
              </button>
              <span>{good[i]}</span>
            </h1>
            <p>2월 17일 발행</p>
            <button
              onClick={(i) => {
                let copy = [...content];
                copy.splice(i, 1);
                setContent(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}
      <input
        className="blank"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        ref={titleInputRef}
      ></input>
      <button
        onClick={(e) => {
          let copy = [...content];
          copy.unshift(input);
          setContent(copy);
          let goodCopy = [...good];
          goodCopy.unshift(0);
          setGood(goodCopy);

          return input == "" ? titleInputRef.current.focus() : setInput("");
        }}
      >
        글발행
      </button>
    </div>
  );
}

export default App;
