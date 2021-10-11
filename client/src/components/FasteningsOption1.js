import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import FasteningsForm from "./FasteningsForm";
import axios from "axios";
import Context from "../contexts/ContextApi";


const FasteningsOption1 = (props) => {
  const {itemTypeAdress1, setFasteningCO2e1} = useContext(Context)



  const [fastenings, setFastenings] = useState([]);

  const [selectFastening1, setSelectFastening1] = useState({
    plasticButton1: 0,
    metalButton1: 0,
    zip1: 0,
  });
  // const [plastic1, setPlastic1] = useState(0);
  // const [metal1, setMetal1] = useState(0);
  // const [zipper1, setZipper1] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSelectFastening1({
  //     ...selectFastening1,
  //     plasticButton1: Number(plastic1),
  //     metalButton1: Number(metal1),
  //     zip1: Number(zipper1),
  //   });
  // };

  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push('/calculate/materials');
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/fastening`)
      .then((response) => setFastenings(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="choiceContainer">
      <div>
        <br />
        <p className="directionText">How Many Fanstenings Are there?</p>
        <br />
        <div className="beforeClick">
          <img
            src={itemTypeAdress1}
            alt="firstBoxImage"
            className="imgCover"
          />
        </div>
      </div>
      {fastenings.map((item) => {
         return (
            <FasteningsForm name={item.name} selectFastening1={selectFastening1} setSelectFastening1={setSelectFastening1}/>  
         )
      })}
      
      <button type="button" onClick={handleClickPreviousSection}>
        Go Back
      </button>
      {/* <div>
            <Link to="calculate/fastenings">
               <button type="button">Calculate</button>
            </Link>
         </div> */}
    </div>
  );
};

export default FasteningsOption1;
