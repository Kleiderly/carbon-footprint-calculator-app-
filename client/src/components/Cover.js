import React, { useState } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Link,
   useHistory,
} from 'react-router-dom';
import Category from './Category';
import CategoryDual from './CategoryDual';
import Results from './Results';
import Percentages from './Percentages';
import Details from './Details';
import './CSS/Cover.css';

const Cover = () => {
   const history = useHistory();
   const [choice1, setChoice1] = useState('');
   const [choice2, setChoice2] = useState('');

   const handleClick1 = () => {
      console.log('click1');
      //   setChoice1();
      history.push('http://localhost:5000/admin');
   };
   const handleClick2 = () => {
      console.log('click2');
      setChoice2();
   };

   return (
      <div className="">
         <Router>
            <Switch>
               <div>
                  INTRO
                  <br />
                  What do you want to calculate?
                  <br />
                  {/* <button className={choice === "single_choice" ? "chosen" : "black"} onClick={handleClick("single_choice")}>ONE CHOICE PIC</button>
                        <br />
                        <button className={choice === "dual_choice" ? "chosen" : "black"} onClick={handleClick("dual_choice")}>TWO CHOICES PIC</button>
                        <br />
                        <Link to={`/item_choice/${choice}`}>BEGIN!</Link> */}
                  <div className="choiceContainer">
                     <div>
                        <div
                           className="choice1"
                           onClick={handleClick1}
                           //    value={choice}
                        >
                           <img src="" alt="" />
                        </div>
                        <p>Calculate 1 item</p>
                     </div>
                     <div>
                        <div
                           className="choice2"
                           onClick={handleClick2}
                           //    value={choice}
                        >
                           <img src="" alt="" />
                        </div>
                        <p>Compare 2 Items</p>
                     </div>
                  </div>
                  <Link to="/">
                     <button type="button">Begin!</button>
                  </Link>
                  <Route
                     exact
                     path="/category/category_single"
                     component={Category}
                  />
                  <Route
                     exact
                     path="/category/category_dual"
                     component={CategoryDual}
                  />
                  <Route exact path="/results/:choice" component={Results} />
                  <Route
                     exact
                     path="/percentages/:choice"
                     component={Percentages}
                  />
                  <Route exact path="/details/:choice" component={Details} />
               </div>
            </Switch>
         </Router>
      </div>
   );
};

export default Cover;
