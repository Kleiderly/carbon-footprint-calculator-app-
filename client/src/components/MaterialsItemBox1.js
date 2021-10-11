import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';
import './css/Materials.css';

const MaterialsItemBox = ({ selected, index, name }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log(`${name} Clicked`);
      setSelectType(name);
   };

   return (
      <div>
         <button
            className={selected === index ? 'selectedMaterial' : 'deselectedMaterial'}
         >
            <p>{name}</p>
         </button>
      </div>
   );
};

export default MaterialsItemBox;
