import React, { useEffect, useContext, useState } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import { itemListBlack } from './data';
import './css/Results.css';
import ButtonShareModal from './ButtonShareModal';
import './css/vivify.min.css';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ResultsOption2 = (props) => {
  const {
    itemTypeAdress1,
    itemTypeAdress2,
    materialCO2e1,
    materialCO2e2,
    fasteningCO2e1,
    fasteningCO2e2,
    countryCO2e1,
    countryCO2e2,
    totalCo2e1,
    setTotalCo2e1,
    totalCo2e2,
    setTotalCo2e2,
    percentage,
    setPercentage,
  } = useContext(Context);

  // Switch image to black
  const imgName1 = itemTypeAdress1.substring(20,23)
  const itemTypeAdress1Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName1
    })
    .map((name)=> {
      return name.adress
  })
  const imgName2 = itemTypeAdress2.substring(20,23)
  const itemTypeAdress2Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName2
    })
    .map((name)=> {
      return name.adress
  })

  //  ANIMATION STATES
  const [opacity, setOpacity] = useState(0.5);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setTotalCo2e1(
      Number((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(3))
    );
    setTotalCo2e2(
      Number((materialCO2e2 + fasteningCO2e2 + countryCO2e2).toFixed(3))
    );

    setPercentage(
      totalCo2e1 > totalCo2e2
        ? ((1 - totalCo2e2 / totalCo2e1) * 100).toFixed(2)
        : ((1 - totalCo2e1 / totalCo2e2) * 100).toFixed(2)
    );
  }, [
    materialCO2e1,
    fasteningCO2e1,
    countryCO2e1,
    materialCO2e2,
    fasteningCO2e2,
    countryCO2e2,
    totalCo2e2,
    totalCo2e1,
  ]);

  // ANIMATION useEffect
  useEffect(() => {
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 5000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 7000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 9000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 11000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 13000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 13500);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 14000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 14500);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 15000);
  }, []);
  //To Go Back
  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/logistics");
  };

  const messageUneven =
      <span className="results-message light-accent-bg vivify popIn delay-1000">
         The <b>{totalCo2e1 < totalCo2e2 ? 'first item' : 'second item'} </b> 
         is <b>{percentage}%</b> more eco-responsible than the
         <b> {totalCo2e1 > totalCo2e2 ? 'first Item' : 'second item'}</b>.
      </span>;

   const messageEven = 
      <span className="results-message light-accent-bg vivify popIn delay-1000">
         It's a tie!
      </span>;


return (
   <div className="results-wrapper vivify popIn delay-500">
      <Confetti
        width={width}
        height={height}
        colors={["#F7EBE8", "#0E2823"]}
        opacity={opacity}
        gravity={0.05}
      />

      <p className="results-title">Results!</p>
      <div className="results-main-container">

         <div className="results-item-group">
            <div className={totalCo2e1 > totalCo2e2 ? "results-before-click" : "results-after-click light-accent-bg"}>
               <img src={totalCo2e1 > totalCo2e2 ? itemTypeAdress1 : itemTypeAdress1Black} alt={itemTypeAdress1} className="results-img-cover" />
               <div className={totalCo2e1 > totalCo2e2 ? "results-img-text light-accent-text" : "light-accent-bg"}>
                  First item
                  <p className={totalCo2e1 > totalCo2e2 ? "results-carbon-result vivify popIn delay-1000 light-accent-text" : "results-carbon-result vivify popIn delay-1000"}>Co2e: {totalCo2e1}</p>
               </div>
            </div>
         </div>

         <div className="results-item-group">
            <div className={totalCo2e1 < totalCo2e2 ? "results-before-click" : "results-after-click light-accent-bg"}>
               <img src={totalCo2e1 < totalCo2e2 ? itemTypeAdress2 : itemTypeAdress2Black} alt={itemTypeAdress2} className="results-img-cover" />
               <div className={totalCo2e1 < totalCo2e2 ? "results-img-text light-accent-text" : "light-accent-bg"}>
                  Second item
                  <p className={totalCo2e1 < totalCo2e2 ? "results-carbon-result vivify popIn delay-1000 light-accent-text" : "results-carbon-result vivify popIn delay-1000"}>Co2e: {totalCo2e2}</p>
               </div>
            </div>
          </div>
        </div>

      {totalCo2e1 === totalCo2e2 ? messageEven : messageUneven}

      <div className="results-explanation">
          <span className="results-thanks-text">
              Thank you for being a conscious consumer.
          </span>
          <p>
              Taking the time to calculate your 
              fashion footprint is an important step.
          </p>
          <p>
              Want to reduce your impact? Read our 
              tips <b><a href="https://kleiderly.com/blogs/kleiderly-magazine" target="new">here</a></b>.
          </p>
      </div>

      <Link to="/compare/percentages" className="results-details">
        SEE DETAILS
      </Link>
      
      <ButtonShareModal />

      <Link to="/">
        <button type="button">COMPARE NEW ITEMS</button>
      </Link>
    </div>
  );
};

export default ResultsOption2;
