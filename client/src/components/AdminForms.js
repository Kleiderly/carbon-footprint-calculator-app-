import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./CSS/Admin.css";

function AdminForms() {

    const [material, setMaterial] = useState([]);
    const [logistic, setLogistic] = useState([]);
    const [fastening, setFastening] = useState([]);
    const [modName, setModName] = useState("");
    const [modCo2e, setModCo2e] = useState("");
    const [modId, setModId] = useState("");

    const materialAPI = axios.get(`/api/material`);
    const logisticAPI = axios.get(`/api/fastening`);
    const fasteningAPI = axios.get(`/api/logistic`);

    useEffect(()=>{
        axios.all([materialAPI, logisticAPI, fasteningAPI])
        .then(axios.spread((...res) => {
            console.log(res[0].data, res[1].data, res[2].data);
            setMaterial(res[0].data);
            setLogistic(res[1].data);
            setFastening(res[2].data);
        }))
        .catch((err)=> console.log(err))
    }, []);

    const clearForm = () => {
        const inputs = document.querySelectorAll("input,textarea");
        inputs.forEach((item) => (item.value = ""));
        };

    const handleAdd = (e)=>{
        e.preventDefault();
        console.log("Add")
        };

    const handleModify = (e)=>{
        e.preventDefault();
        console.log("Modify")
        };

    const handleDelete = (e)=>{
        e.preventDefault();
        console.log("Delete")
        };

    const inputCo2e1 = 
        <div className="form-input">
        Co2e per item: <br />
        <input 
        className="light-pink"
        type="text"
        name="co2e"
        onChange={(e) => setModCo2e(e.target.value)}
        ></input>
        </div>

    const inputCo2e2 = 
        <input
        type="text"
        name="co2e"
        className="light-pink"
        placeholder={modCo2e}
        onChange={(e) => setModCo2e(e.target.value)}
        value={modCo2e}
        ></input>

        
    return (
        <div className="forms-wrapper">

            <div className="form-section">
                <h2>Add item to database</h2>

                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="material"
                        onChange={(e) => {
                          setModName(e.target.value);
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>


                <h4 className="fastenings">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="prodLocation"
                        onChange={(e) => {
                          setModName(e.target.value);
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Consumer Location: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="consLocation"
                        onChange={(e) => {
                          setModName(e.target.value);
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>

            <h4 className="fastenings">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="consLocation"
                        onChange={(e) => {
                          setModName(e.target.value);
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>

                <div className="form-input center-align">
                    <button onClick={handleAdd() && clearForm()}>ADD</button>
                    <button onClick={clearForm()}>CLEAR FORM</button>
                </div>
            </div>


{/* DELETE/MODIFY */}
            <div className="form-section">
                <h2>Modify / Delete item from database</h2>
                    
{/* DELETE/MODIFY MATERIAL*/}
                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <select className="light-pink">

                            {material.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.name} 
                                    onChange={setModCo2e(type.materialCO2E) && setModId(type._id) && setModName(type.name)}
                                    >
                                        {type.name}
                                    </option>
                                );
                            })};

                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        {inputCo2e2}
                    </div>
                </div>

{/* DELETE/MODIFY LOGISTICS*/}
                <h4 className="fastenings">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <select className="light-pink">

                            {logistic.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.productionLocation} 
                                    onChange={setModCo2e(type.logisticCO2e) && setModId(type._id) && setModName(type.productionLocation)}
                                    >
                                        {type.productionLocation}
                                    </option>
                                );
                            })};

                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        {inputCo2e2}
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Consumer Location: <br />
                        <select className="light-pink">

                            {logistic.map((type, i) => {
                               return (
                                <option 
                                id={type._id} 
                                key={i} 
                                value={type.consumerLocation} 
                                onChange={setModCo2e(type.logisticCO2e) && setModId(type._id) && setModName(type.consumerLocation)}
                                >
                                    {type.consumerLocation}
                                </option>
                                );
                            })};

                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        {inputCo2e2}
                    </div>
                </div>
                
{/* DELETE/MODIFY FASTENINGS*/}
                <h4 className="fastenings">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <select className="light-pink">

                            {fastening.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} value={type._id} 
                                    onChange={setModCo2e(type._id) && setModId(type._id) && setModName(type._id)}
                                    >
                                        {type._id}
                                    </option>
                                );
                            })};

                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        {inputCo2e2}
                    </div>
                </div>

                <div className="form-input center-align">
                    <button onClick={handleModify() && clearForm()}>MODIFY</button>
                    <button onClick={handleDelete() && clearForm()}>DELETE</button>
                    <button onClick={clearForm()}>CLEAR FORM</button>
                </div>
            </div>

        </div>
    )
};

export default AdminForms;