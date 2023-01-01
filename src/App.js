import { useEffect, useState, useRef } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  // let [content, setContent] = useState([
  //   "남자코트추천",
  //   "여자코트추천",
  //   "엄마코트추천",
  // ]);
  // let [good, setGood] = useState([0, 0, 0]);
  const newId = useRef(3);
  let [content, setContent] = useState([
    { id: 2, title: "남자코트추천", like: "0" },
    { id: 1, title: "여자코트추천", like: "0" },
    { id: 0, title: "엄마코트추천", like: "0" },
  ]);

  let [input, setInput] = useState("");
  let [checkModal, setCheckModal] = useState(false);
  let [checkID, setCheckID] = useState("");

  // let [modal, setModal] = useState(false);
  const titleInputRef = useRef();

  // addContent

  const addContent = (index) => {
    if (input == "") {
      return titleInputRef.current.focus();
    }
    setInput("");
    let copy = [...content];
    copy.unshift({ id: newId.current++, title: input, like: "0" });
    // ++ : 후연산자
    copy.sort((a, b) => b.id - a.id);
    setContent(copy);
    // 가장 큰 id 값 가진 게시물 찾기
    // content.sort((a, b) => b.id - a.id);
    // console.log(content[0]);

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
  // modal
  // console.log(checkModal, index, checkID, content[index].id);
  const AddModal = (index) => {
    // if (checkModal === true && checkID === content[index].id) {
    //   return setCheckModal(false);
    // }

    setCheckModal(true);
    setCheckID(content[index].id);
    console.log(checkModal);
  };
  // 가나다 정렬
  const arrayContent = () => {
    let copy = [...content];
    copy.sort((a, b) => b.title - a.title);
    setContent(copy);
  };

  return (
    <div className="App">
      {content.map((a, index) => {
        return (
          <div className="content" key={index}>
            <h1
              onClick={() => {
                AddModal(index);
              }}
            >
              {content[index].title}
            </h1>

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
            {checkModal == true && checkID == content[index].id ? (
              <Modal content={content[index].title} />
            ) : null}
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
          // onKeyUp={() => {
          //   if (window.event.keyCode === 13) {
          //     addContent();
          //   }
          // }}
        }}
      >
        글발행
      </button>
      <button
        onClick={() => {
          arrayContent();
        }}
      >
        가나다정렬
      </button>
    </div>
  );
}

export default App;
