import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';

const FasteningsItemBox2 = ({ type, adress, name, co2e }) => {
   const [selectType, setSelectType] = useState(false);

   return (
      <div className="typeOfItemContainer">
         <div className="deselected">
            <p>{name}</p>
         </div>
      </div>
   );
};

export default FasteningsItemBox2;
