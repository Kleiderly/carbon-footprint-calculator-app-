import React, { useEffect, useContext } from "react";
import Context from "../contexts/ContextApi";
import { Link, useHistory } from "react-router-dom";
import ButtonShareModal from "./ButtonShareModal";
import "./css/Results.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ResultsOption1 = (props) => {
  const {
    itemTypeAdress1,
    materialCO2e1,
    fasteningCO2e1,
    countryCO2e1,
    totalCo2e1,
    setTotalCo2e1,
  } = useContext(Context);

  //  ANIMATION STATES
  const [opacity, setOpacity] = useState(0.5);
  const { width, height } = useWindowSize();

  //Calculation
  useEffect(() => {
    setTotalCo2e1(
      Number((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4))
    );
  }, [materialCO2e1, fasteningCO2e1, countryCO2e1]);
  console.log(totalCo2e1);
  //To Go Back
  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/logistics");
  };

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

  return (
    <div className="results-wrapper">
      <Confetti
        width={width}
        height={height}
        colors={["#F7EBE8", "#0E2823"]}
        opacity={opacity}
        gravity={0.05}
      />
      <p className="results-title">Result!</p>

      <div className="results-items-container">
        <div className="results-before-click">
          <img
            src={itemTypeAdress1}
            alt={itemTypeAdress1}
            className="results-img-cover1"
          />
          <div className="results-carbon-result">Total: {totalCo2e1}</div>
        </div>
      </div>

      <Link to="/calculate/percentages" className="results-details">
        SEE DETAILS
      </Link>
      <p className="results-explanation">Text explaining what this means.</p>

      <ButtonShareModal />

      <Link to="/">
        <button type="button">CALCULATE ANOTHER ITEM</button>
      </Link>
    </div>
  );
};

export default ResultsOption1;
