import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Trial = () => {
    
    const { selectLogistic, setSelectLogistic } = useState("");
    const { co2, setCo2 } = useState();

    useEffect(()=>{
        axios.get(`/api/logistic`)
           .then((response) => {
                console.log(response.data)
                response.filter((name) => { name.productionLocation.includes(selectLogistic) 
                    // const co2evalue= name.logisticCO2e
                    setSelectLogistic(name)

                })
            })
            .then((response)=> {
                response.filter((name)=> {
                    name.logisticCO2e.includes()
                })
            })
           .catch((error)=>{
            console.log(error)
          })
      }, [selectLogistic]);


      const handleClick=(e) => {
        console.log('CLICKKK')
        setSelectLogistic(!selectLogistic) 
        };

    return(
        <div>
            <button value ={selectLogistic} onClick={handleClick}>{}</button>
            <button value ={selectLogistic} onClick={handleClick}>Bangladesh</button>
        </div>
    )
};

export default Trial