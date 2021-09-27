import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Materials from './Materials';
import Logistics1 from './Logistics1';
import Logistics2 from './Logistics2';
import Fastenings from './Fastenings';
import ButtonSelection from './ButtonSelection';


function CategorySingle() {
    
    const [data, setData] = useState([]);
    const [co2, setCo2] = useState();

    useEffect(()=>{
        axios.get(`/api/logistic`)
        .then((res)=> {
        setData(res.data)
        })
        .catch((err)=> console.log(err))
    }, []);

    const handleClick=(e) => {
        e.preventDefault()
        console.log('CLICK')
        setCo2(this.value) 
    };

    return(
        <div>
            progress bar
            <br />
            material/logistics1-2/fastenings/result/percentages/details

            <Router>
                <ProgressBar />
                <Switch>
                    <div>
                        <Route exact path="/category/:choice/materials" component={Materials} />
                        <Route exact path="/category/:choice/logistics1" component={Logistics1} />
                        <Route exact path="/category/:choice/logistics2" component={Logistics2} />
                        <Route exact path="/category/:choice/fastenings" component={Fastenings} />

                        {data.map((info, key) => {
                            return (
                                <ButtonSelection 
                                key={key} 
                                id={info._id}
                                name={info.productionLocation}
                                handleClick={handleClick}
                                co2={info.logisticCO2e}
                                />
                            )
                        })};

                        <Link to={"back"}>
                            PREVIOUS QUESTION
                        </Link>
                    </div>
                </Switch>
            </Router>
        </div>
    )
};

export default CategorySingle;