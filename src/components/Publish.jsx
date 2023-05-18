import React, { useState } from "react";

function Publish(props) {
  const { comment, setComment } = props;
  const handleChange = (e) => {
    setComment(e.target.value );
  };
  const handleSubmit = (e) => {
    e.prevventDefault();
    let [save, setSave] = ({
      content: "",
      complete: false,
    })
  };
  return (
    <div className="footer">
      <div className="publish">
        <textarea
          type="text"
          className="comment"
          placeholder="Input here..."
          onChange={handleChange}
        >
          alsja
        </textarea>
        <form className="main-publish" onSubmit={handleSubmit}>
          <div>200left</div>
          <button className="content">
              Publish<i class="fa-sharp fa-solid fa-arrow-up"></i>
          </button>
          {/* <i className="fa-solid fa-trash"></i> */}
        </form>
      </div>
    </div>
  );
}

export default Publish;
