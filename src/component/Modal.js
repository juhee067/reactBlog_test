import React from "react";

const Modal = (props) => {
  return (
    <div className="subContent">
      <h5>{props.content}</h5>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
