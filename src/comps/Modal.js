import React from "react";

function Modal({ selectedImg }) {
  console.log(selectedImg);
  // backdrop
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="Enlarged Pic" />
    </div>
  );
}

export default Modal;
