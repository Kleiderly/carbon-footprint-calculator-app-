import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonSelection from './ButtonSelection';

const Trial = () => {
    
    const { data, setData } = useState([]);
    const { co2, setCo2 } = useState();

    useEffect(()=>{
        axios.get(`/api/logistic`)
        .then((response) => {
            console.log(response.data);
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);


    const handleClick=(e) => {
        console.log('CLICK')
        setCo2(co2) 
    };


    return(
        <div>
            {data.map((info, key) => {
                return (
                    <ButtonSelection 
                    key={key} 
                    id={info._id}
                    name={info.selectLogistic}
                    handleClick={handleClick}
                    co2={info.logisticCO2e}
                    />
                )
            })}
        </div>
    )
};

export default Trial