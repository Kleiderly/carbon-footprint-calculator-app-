import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CategorySingle from './CategorySingle';
import CategoryDual from './CategoryDual';
import Results from './Results';
import Percentages from './Percentages';
import Details from './Details';

const Cover =()=> {
    
    const [choice, setChoice] = useState("");
    // const handleClick=(c) => {
    //     setChoice(c)
    // };

    return (
        <div className="">
            <Router>
                <Switch>
                    <div>
                        INTRO
                        <br />
                        What will you calculate?
                        <br />
                        {/* <button className={choice === "single_choice" ? "chosen" : "black"} onClick={handleClick("single_choice")}>ONE CHOICE PIC</button>
                        <br />
                        <button className={choice === "dual_choice" ? "chosen" : "black"} onClick={handleClick("dual_choice")}>TWO CHOICES PIC</button>
                        <br />
                        <Link to={`/item_choice/${choice}`}>BEGIN!</Link> */}
                        <Route exact path="/category/category_single" component={CategorySingle} />
                        <Route exact path="/category/category_dual" component={CategoryDual} />
                        <Route exact path="/results/:choice" component={Results} />
                        <Route exact path="/percentages/:choice" component={Percentages} />
                        <Route exact path="/details/:choice" component={Details} />
                    </div>
                </Switch>
            </Router>
        </div>
    )
};

export default Cover;