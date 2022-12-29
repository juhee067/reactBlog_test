import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // let [content, setContent] = useState([
  //   "남자코트추천",
  //   "여자코트추천",
  //   "엄마코트추천",
  // ]);
  // let [good, setGood] = useState([0, 0, 0]);
  let count = 0;
  let [content, setContent] = useState([
    { id: count, title: "남자코트추천", like: "0" },
    { id: count, title: "여자코트추천", like: "0" },
    { id: count, title: "엄마코트추천", like: "0" },
  ]);

  let [input, setInput] = useState("");
  const titleInputRef = useRef();

  // addContent

  const addContent = (index) => {
    if (input == "") {
      return titleInputRef.current.focus();
    }

    setInput("");
    let copy = [...content];
    copy.unshift({ id: count++, title: input, like: "0" });
    setContent(copy);
    console.log(content);
    // return input == "" ? titleInputRef.current.focus() : setInput("");
  };

  //  goodBtn

  const goodBtn = (index) => {
    let copy = [...content];
    copy[index].like++;
    setContent(copy);
  };
  // deleteContent
  const deleteContent = (index) => {
    let copy = [...content];
    copy.splice(index, 1);
    setContent(copy);
  };
  // changeContent
  const changeContent = (index) => {
    let copy = [...content];
    copy[index].title = "수정한 콘텐츠";
    setContent(copy);
  };

  return (
    <div className="App">
      {content.map((a, index) => {
        return (
          <div className="content" key={index}>
            <h1>{content[index].title}</h1>

            <button
              onClick={() => {
                goodBtn(index);
              }}
            >
              👍🏻
            </button>
            <span>{content[index].like}</span>

            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                deleteContent(index);
              }}
            >
              글 삭제
            </button>
            <button
              onClick={() => {
                changeContent(index);
              }}
            >
              글수정
            </button>
            <div className="subContent">
              <h5>{content[index].title}</h5>
              <p>상세내용</p>
            </div>
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
