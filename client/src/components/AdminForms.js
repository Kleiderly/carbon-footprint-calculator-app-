import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./CSS/Admin.css";

function AdminForms() {

    const [material, setMaterial] = useState([]);
    const [materialCo2e, setMaterialCo2e] = useState("");
    const [logistic, setLogistic] = useState([]);
    const [logisticCo2e, setLogisticCo2e] = useState("");
    const [fastening, setFastening] = useState([]);
    const [fasteningCo2e, setFasteningCo2e] = useState("");
    const [co2e, setCo2e] = useState("");
    const [modData, setModData] = useState("");

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

    return (
        <div className="forms-wrapper">

            <div className="form-section">
                <h2>Add item to database</h2>

                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <input className="light-pink" ></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>


                <h4 className="fastenings">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Consumer Location:: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

            <h4 className="fastenings">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-input center-align">
                    <button>ADD</button>
                    <button>CLEAR FORM</button>
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
                                return <option id={type._id} key={i} value={type.name} onChange={setMaterialCo2e(type.materialCO2E) && setModData(type._id)}>
                                {type.name}
                                </option>
                            })}

                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input
                        className="light-pink"
                        placeholder={materialCo2e}
                        onChange={(e)=>setCo2e(e.target.value)}
                        value={co2e}
                        ></input>
                    </div>
                </div>

{/* DELETE/MODIFY LOGISTICS*/}
                <h4 className="fastenings">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <select className="light-pink">

                            {logistic.map((type, i) => {
                                <option id={type._id} key={i} value={type.productionLocation} onChange={setLogisticCo2e(type.logisticCO2e) && setModData(type._id)}>
                                {type.productionLocation}
                                </option>
                            })}

                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input
                        className="light-pink"
                        placeholder={logisticCo2e}
                        onChange={(e)=>setCo2e(e.target.value)}
                        value={co2e}
                        ></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Consumer Location: <br />
                        <select className="light-pink">

                            {logistic.map((type, i) => {
                                <option id={type._id} key={i} value={type.consumerLocation} onChange={setLogisticCo2e(type.logisticCO2e) && setModData(type._id)}>
                                {type.consumerLocation}
                                </option>
                            })}

                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input
                        className="light-pink"
                        placeholder={logisticCo2e}
                        onChange={(e)=>setCo2e(e.target.value)}
                        value={co2e}
                        ></input>
                    </div>
                </div>
                
{/* DELETE/MODIFY FASTENINGS*/}
                <h4 className="fastenings">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <select className="light-pink">

                            {fastening.map((type, i) => {
                                <option id={type._id} key={i} value={type._id} onChange={setFasteningCo2e(type._id) && setModData(type._id)}>
                                {type._id}
                                </option>
                            })}

                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input
                        className="light-pink"
                        placeholder={fasteningCo2e}
                        onChange={(e)=>setCo2e(e.target.value)}
                        value={co2e}
                        ></input>
                    </div>
                </div>

                <div className="form-input center-align">
                    <button onClick={console.log("Click modify")}>MODIFY</button>
                    <button onClick={console.log("Click delete")}>DELETE</button>
                    <button onClick={setMaterial("") && setMaterialCo2e("") && setLogistic("") && setLogisticCo2e("") && setFastening("") && setFasteningCo2e("") && setCo2e("") && setModData("")}>CLEAR FORM</button>
                </div>
            </div>

        </div>
    )
};

export default AdminForms;