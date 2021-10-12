import React, { useState, useEffect, useContext } from "react";
import Context from "../contexts/ContextApi";
import { Link, useHistory } from "react-router-dom";
import ItemBox from "./ItemBox";
import axios from "axios";
// import Tips from './Tips';

const LogisticsOption1 = (props) => {
  const { itemTypeAdress1, setCountryCO2e1 } = useContext(Context);

  //For data from database
  const [countriesFrom, setCountriesFrom] = useState([]);

  //For selection by user through button click
  const [selectCountry1, setSelectCountry1] = useState(null);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/logistic`)
      .then((response) => setCountriesFrom(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //To Go Back
  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/fastenings");
  };

  const handleClick = () => {
    setCountryCO2e1(selectCountry1);
    //   setCountryCO2e2(selectCountry2);
  };

  const mapOnItemClickImageClassHandler = (item, i) => {
    setSelectCountry1(item.co2e);
    setSelected(i);
  };

  return (
    <div className="choiceContainer">
      <div>
        <div>
          <br />
          <p className="directionText">Where Is Your Product From?</p>
          <br />
          <div className="itemsContainer">
            <div className="beforeClickCategory">
              <img src={itemTypeAdress1} alt={itemTypeAdress1} />
            </div>
          </div>
        </div>
      </div>
      <div className="materialBigContainer">
        <div className="materialContainer">
          {countriesFrom.map((item, i) => (
            <div
              onClick={() => mapOnItemClickImageClassHandler(item, i)}
              key={item._id}
            >
              <ItemBox
                name={item.productionLocation}
                index={i}
                selected={selected}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={handleClickPreviousSection}>
        Go Back
      </button>
      <Link to="/calculate/results">
        <button type="button" onClick={handleClick}>
          Calculate
        </button>
      </Link>
    </div>
  );
};

export default LogisticsOption1;
