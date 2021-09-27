import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonSelection from './ButtonSelection';

const Trial = () => {
    
    const [data, setData] = useState([]);
    const [co2, setCo2] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/logistic`)
        .then((res)=> {
        console.log(res.data);
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
            })}

            <button value ={selectLogistic} onClick={handleClick}>Vietnam</button>
            <button value ={selectLogistic} onClick={handleClick}>Bangladesh</button>

        </div>
    )
};

export default Trial