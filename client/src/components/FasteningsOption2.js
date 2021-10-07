import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';

import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

const FasteningsOption2 = () => {
   const [choice, setChoice] = useState('');
   const [selectFastening1, setSelectFastening1] = useState(null);
   const [selectFastening2, setSelectFastening2] = useState(null);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/option-2');
   };

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };

   return <div className="choiceContainer"></div>;
};

export default FasteningsOption2;
