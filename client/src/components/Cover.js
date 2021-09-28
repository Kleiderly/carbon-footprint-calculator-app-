import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Cover.css";

function Cover() {
  const [choice, setChoice] = useState("");

  const handleClick1 = () => {
    console.log("click1");
    setChoice("1");
  };

  const handleClick2 = () => {
    console.log("click2");
    setChoice("2");
  };

  return (
    <div className="">
      <div>
        INTRO
        <br />
        What will you calculate?
        <br />
        <div className="choiceContainer">
          <div>
            <div
              className={choice === "1" ? "afterClick" : "beforeClick"}
              onClick={handleClick1}
              value={choice}
            >
              <img src="" alt="" />
            </div>
            <p>Calculate 1 item</p>
          </div>
          <div>
            <div
              className={choice === "2" ? "afterClick" : "beforeClick"}
              onClick={handleClick2}
              value={choice}
            >
              <img src="" alt="" />
            </div>
            <p>Compare 2 Items</p>
          </div>
        </div>
        {choice === "1" ? (
          <Link to="/1">
            <button type="button">Begin!</button>
          </Link>
        ) : (
          <Link to="/2">
            <button type="button">Begin!</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cover;
