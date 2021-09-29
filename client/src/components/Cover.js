import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Cover.css';

function Cover() {
   const [choice, setChoice] = useState(null);

   const handleClick1 = () => {
      console.log('click1');
      setChoice('1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };

   return (
      <div className="">
         <div>
            <h1>INTRODUCTION </h1>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1500s, when an unknown printer took a galley of
               type and scrambled it to make a type specimen book. It has
               survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged. It was
               popularised in the 1960s with the release of Letraset sheets
               containing Lorem Ipsum passages, and more recently with desktop
               publishing software like Aldus PageMaker including versions of
               Lorem Ipsum.
            </p>
            <br />
            <h3>What will you calculate?</h3>
            <br />
            <div className="choiceContainer">
               <div>
                  <div
                     className={choice === '1' ? 'afterClick' : 'beforeClick'}
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src="" alt="" />
                  </div>
                  <p>Calculate 1 item</p>
               </div>
               <div>
                  <div
                     className={choice === '2' ? 'afterClick' : 'beforeClick'}
                     onClick={handleClick2}
                     value={choice}
                  >
                     <img src="" alt="" />
                  </div>
                  <p>Compare 2 Items</p>
               </div>
            </div>
            <Link to={`/${choice}`} className={choice ? null : 'disabled-link'}>
               <button type="button">Begin!</button>
            </Link>
         </div>
      </div>
   );
}

export default Cover;
