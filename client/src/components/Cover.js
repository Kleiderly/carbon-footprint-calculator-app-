import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Cover.css';

function Cover() {
   const [choice, setChoice] = useState(null);

   const handleClick1 = () => {
      console.log('click1');
      setChoice('option-1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('option-2');
   };

   return (
      <div className="">
         <div>
            <div className="textContainer">
               <h1>INTRODUCTION </h1>
               <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <br />
               <p className="directionText">What will you calculate?</p>
               <br />
            </div>
            <div className="choiceContainer">
               <div>
                  <div
                     className={
                        choice === 'option-1' ? 'afterClick' : 'beforeClick'
                     }
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src="" alt="" />
                  </div>
                  <p className="directionText2">Calculate 1 item</p>
               </div>
               <div>
                  <div
                     className={
                        choice === 'option-2' ? 'afterClick2' : 'beforeClick2'
                     }
                     onClick={handleClick2}
                     value={choice}
                  >
                     <img src="" alt="" />
                  </div>
                  <p className="directionText2">Compare 2 Items</p>
               </div>
            </div>
            <Link to={`/${choice}`}>
               <button type="button">Begin!</button>
            </Link>
         </div>
      </div>
   );
}

export default Cover;
