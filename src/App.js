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
  const addContent = () => {
    let goodCopy = [...good];
    goodCopy.unshift(0);
    setGood(goodCopy);
    if (input == "") {
      return titleInputRef.current.focus();
    } else {
      setInput("");
    }
    let copy = [...content];
    copy.unshift(input);
    setContent(copy);
    // return input == "" ? titleInputRef.current.focus() : setInput("");
  };

  // let number = 10
  // add(number) === 11 ? start() : remove()

  const goodBtn = (i) => {
    let copy = [...good];
    copy[i]++;
    setGood(copy);
  };
  const deleteContent = (i) => {
    let copy = [...content];
    copy.splice(i, 1);
    setContent(copy);
  };
  return (
    <div className="App">
      {content.map((a, i) => {
        return (
          <div className="content" key={i}>
            <h1>
              {content[i]}

              <button
                onClick={() => {
                  goodBtn(i);
                }}
              >
                👍🏻
              </button>
              <span>{good[i]}</span>
            </h1>
            <p>2월 17일 발행</p>
            <button
              onClick={(i) => {
                deleteContent(i);
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
        onClick={() => {
          addContent();
        }}
      >
        글발행
      </button>
    </div>
  );
}

export default App;
