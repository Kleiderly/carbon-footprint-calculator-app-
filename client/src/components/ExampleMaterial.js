import React, {useState, useEffect} from 'react'
import axios from 'axios'



const ExampleMaterial = () => {
const [ value, setValue] = useState([])
    useEffect(()=>{
        axios.get(`/api/logistic`)
            .then((response) => setValue(response.data))
           .catch((error)=>{
            console.log(error)
          })
      }, []);



    return(
        <div>
            {value.map(((item) => <button>{item.productionLocation}</button>))}
        </div>
    )
};

export default ExampleMaterial