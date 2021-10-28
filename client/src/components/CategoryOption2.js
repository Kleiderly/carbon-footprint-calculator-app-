import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import ProgressBar from './ProgressBar';
import CategoryItemBox2 from './CategoryItemBox2';
import { itemList } from './data';
import Context from '../contexts/ContextApi';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './css/vivify.min.css';

const CategoryOption2 = (props) => {
  const { setItemTypeAdress1, setItemTypeAdress2 } = useContext(Context);

  const [choice, setChoice] = useState(true);
  const [classChanger, setClassChanger] = useState();
  const [classChanger2, setClassChanger2] = useState();
  const [selectType1, setSelectType1] = useState(null);
  const [selectType2, setSelectType2] = useState(null);
  const [toggle, setToggle] = useState(true);

  //To Go Back
  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/");
  };

  const handleClick1 = () => {
    console.log("click2");
    setChoice(true);
    setToggle(true);
  };

  const handleClick2 = () => {
    console.log("click2");
    setChoice(false);
    setToggle(false);
  };

  const handleClick3 = () => {
    setItemTypeAdress1(selectType1);
    setItemTypeAdress2(selectType2);
  };

  console.log(selectType1);
  console.log(selectType2);

  const handleClickTypes = (item, i) => {
    setChoice(!choice);
    setToggle(!toggle);
    toggle ? setSelectType1(item.adress) : setSelectType2(item.adress);
    toggle ? setClassChanger(i) : setClassChanger2(i);
    
  };
  console.log(classChanger, classChanger2);
  return (
    <div className="category-wrapper">
      <div className="swoopInTop vivify delay-100">
        <ProgressBar stage={0} previous="Start" next="Material" />
      </div>
      <div>
        <div>
          <p className="category-title">Choose your items</p>
          <div className="category-items-container fadeIn vivify">
            <div
              className={
                choice
                  ? "category-after-click light-tone-bg"
                  : "category-before-click"
              } onClick={handleClick1} value={choice} >
              <img src={selectType1} alt={selectType1} />
              <span className="category-img-text light-accent-text">1st Item</span>
            </div>
            <div
              className={
                !choice
                  ? "category-after-click light-tone-bg"
                  : "category-before-click"
              } onClick={handleClick2} value={choice} >
              <img src={selectType2} alt={selectType2} />
              <span className="category-img-text light-accent-text">2nd Item</span>
            </div>
          </div>
        </div>
        
        <div className="category-type-of-item-container">
          {itemList.map((item, i) => (
            <div onClick={() => handleClickTypes(item, i)} key={item.id}>
              <CategoryItemBox2
                index={i}
                classChanger={classChanger}
                classChanger2={classChanger2}
                type={item.type}
                adress={item.adress}
              />
            </div>
           ))}
        </div>
        <div className="category-container">
            <div className="category-back-next-buttons">
               <button className="back-button" type="button" onClick={handleClickPreviousSection} >
                  BACK
               </button>
               {selectType1 && selectType2 ? (
                  <Link to="/compare/materials">
                     <button className="next-button" type="button" onClick={handleClick3} >
                        NEXT
                     </button>
                  </Link>
               ) : (
                  <Popup trigger={<button className="next-button"> NEXT</button>}>
                     <div>Please make a selection.</div>
                  </Popup>
               )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CategoryOption2;
