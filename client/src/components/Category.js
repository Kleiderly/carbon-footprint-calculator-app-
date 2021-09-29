import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Category.css";

<<<<<<< HEAD
import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

function Category({ browser, result, setResult }) {
   const [choice, setChoice] = useState('');
   const [selectType, setSelectType] = useState(false);
=======
function Category({ browser }) {
  console.log(browser);

  const [choice, setChoice] = useState("");

  const handleClick1 = () => {
    console.log("click1");
    setChoice("1");
  };
>>>>>>> 4eb471c7e6e049ca85720d47c115ed18bc8ccb84

  const handleClick2 = () => {
    console.log("click2");
    setChoice("2");
  };

<<<<<<< HEAD
   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };
   // const handleClick3 = () => {
   //    console.log('click3');
   // };
   // const setTypeOfClo1 = () => setResult(...result, itemTypeAdress1:'belt')

   return (
      <div className="choiceContainer">
         <div>
            {browser.match.params.choice === 'option-1' ? (
               <div>
                  <br />
                  <p className="directionText">Choose Your Item</p>
                  <br />
                  <div
                     // className="beforeClick"
                     className={choice === '1' ? 'afterClick' : 'beforeClick'}
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src="" alt="" />
                  </div>
               </div>
            ) : (
               <div>
                  <br />
                  <p className="directionText">Choose Your Items</p>
                  <br />
                  <div className="itemsContainer">
                     <div
                        className={
                           choice === '1' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick1}
                        value={choice}
                     >
                        <img src="" alt="" />
                     </div>
                     <div
                        className={
                           choice === '2' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick2}
                        value={choice}
                     >
                        <img src="" alt="" />
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div
            className="typeOfItemContainer"
            // onClick={setTypeOfClo1}
         >
            <p>{result.itemTypeAdress1}</p>
            {itemList.map((item) => (
               <CategoryItemBox
                  type={item.type}
                  adress={item.adress}
                  // onClick={setResult(
                  //    (result.first.itemTypeAdress = item.adress)
                  // )}
               />
            ))}
         </div>
         <div>
            {/* {choice === '1' ? (
               <Link to="/1/materials">
                  <button type="button">Compare</button>
               </Link>
            ) : (
               <Link to="/2/materials">
                  <button type="button">Compare</button>
               </Link>
            )} */}
            <Link to={`/${choice}`} className={choice ? null : 'disabled-link'}>
               <button type="button">Compare</button>
            </Link>
         </div>
=======
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
>>>>>>> 4eb471c7e6e049ca85720d47c115ed18bc8ccb84
      </div>
    </div>
  );
}

export default Category;
