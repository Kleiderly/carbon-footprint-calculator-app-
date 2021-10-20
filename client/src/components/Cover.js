import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonNext from './ButtonNext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './css/Cover.css';

function Cover() {
   const [choice, setChoice] = useState(null);

   const handleClick1 = () => {
      console.log('calculate');
      setChoice('calculate');
   };

   const handleClick2 = () => {
      console.log('compare');
      setChoice('compare');
   };

   return (
      <div className="cover-wrapper">
         <div>
            <div className="cover-text-container">
               <h1 className="cover-title">INTRODUCTION</h1>
               <p className="cover-paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
               </p>
            </div>
            <p className="cover-direction-text">What will you calculate?</p>
            <div className="cover-choice-container">
               <div className="cover-item-container">
                  <div
                     className={
                        choice === 'calculate'
                           ? 'cover-after-click'
                           : 'cover-before-click'
                     } onClick={handleClick1} value={choice}>
                     <img
                        className="cover-img-cover"
                        src="../img/items-images/t-shirtW.png"
                        alt="T-shirt"/>
                  </div>
                  <p className="cover-direction-text2">Calculate one item</p>
               </div>
               <div className="cover-item-container">
                  <div
                     className={
                        choice === 'compare'
                           ? 'cover-after-click2'
                           : 'cover-before-click2'
                     } onClick={handleClick2} value={choice}>
                     <img
                        className="cover-img-cover"
                        src="../img/items-images/t-shirtW.png"
                        alt="T-shirt"
                     /> VS 
                     <img
                        className="cover-img-cover"
                        src="../img/items-images/skirtW.png"
                        alt="T-shirt"
                     />
                  </div>
                  <p className="cover-direction-text2">Compare two items</p>
               </div>
            </div>
            {choice ? (
               <Link to={`/${choice}/category`}>
                  <button className="buttonnext-button">BEGIN!</button>
               </Link>
            ) : (
               <Popup
                  trigger={
                     <button className="buttonnext-button">BEGIN!</button>
                  }
                  position="top center"
               >
                  <div>Please make a selection.</div>
               </Popup>
            )}
         </div>
      </div>
   );
}

export default Cover;
