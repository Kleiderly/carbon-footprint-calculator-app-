import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Category.css";

import { itemList } from './data';
import CategoryItemBox from './CategoryItemBox';

function Category({ browser, result, saverAdress01}) {
  console.log(browser);

  const [choice, setChoice] = useState("");

  const handleClick1 = () => {
    console.log("click1");
    setChoice("1");
  };

  const handleClick2 = () => {
    console.log("click2");
    setChoice("2");
  };

  const saverPowerSave = (() => {
    saverAdress01(result.itemTypeAdress1 = "I got it")
    console.log(result)
  })
  return (
    <div className="choiceContainer">
      <div>
        {browser.match.params.choice === "1" ? (
          <div>
            <div
              className="beforeClick"
              //   className={choice === "1" ? "afterClick" : "beforeClick"}
              //   onClick={handleClick1}
              value={choice}
            >
              <img src="" alt="" />
            </div>
          </div>
        ) : (
          <div className="itemsContainer">
            <div
              className={choice === "1" ? "afterClick" : "beforeClick"}
              onClick={handleClick1}
              value={choice}
            >
              <img src="" alt="" />
            </div>
            <div
              className={choice === "2" ? "afterClick" : "beforeClick"}
              onClick={handleClick1}
              value={choice}
            >
              <img src="" alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="typeOfItemContainer">
        <div className="typeOfItemContainerRow">
          <div className="typeOfItem" onClick={handleClick1}>
            <img src="" alt="" />
          </div>
        </div>
        <div className="typeOfItem" onClick={handleClick1}>
          <img src="" alt="" />
        </div>
        <div className="typeOfItem" onClick={handleClick1}>
          <img src="" alt="" />
        </div>

        <div className="typeOfItemContainerRow">
          <div className="typeOfItem" onClick={handleClick1}>
            <img src="" alt="" />
          </div>
        </div>
        <div className="typeOfItem" onClick={handleClick1}>
          <img src="" alt="" />
        </div>
        <div className="typeOfItem" onClick={handleClick1}>
          <img src="" alt="" />
        </div>
      </div>
      <p onClick={saverPowerSave}>click</p>
      <div>
        {choice === "1" ? (
          <Link to="/1/materials">
            <button type="button">Compare</button>
          </Link>
        ) : (
          <Link to="/2/materials">
            <button type="button">Compare</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Category;
