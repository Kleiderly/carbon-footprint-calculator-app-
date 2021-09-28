import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./CSS/Admin.css";

function AdminForms() {

    const [material, setMaterial] = useState([]);
    const [logistic, setLogistic] = useState([]);
    const [fastening, setFastening] = useState([]);
    const [modName, setModName] = useState("");
    const [modName2, setModName2] = useState("");
    const [modCo2e, setModCo2e] = useState();
    const [modId, setModId] = useState("");
    const [modCo2eMat, setModCo2eMat] = useState();
    const [modCo2eLog, setModCo2eLog] = useState();
    const [modCo2eFa, setModCo2eFa] = useState();
    const [filterArr, setFilterArr] = useState([]);
    const [submit, setSubmit] = useState();

    const materialAPI = axios.get(`/api/material`);
    const logisticAPI = axios.get(`/api/logistic`);
    const fasteningAPI = axios.get(`/api/fastening`);

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

    const success = "Submit successful!";
    const failed = "Submit unsuccessful.";
    const clearMessage = modId === ""

    useEffect(()=>{
        setSubmit()
    }, [clearMessage]);

    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select");
        inputs.forEach((item) => (item.value = ""));
        setModCo2eFa(); setModCo2eLog(); setModCo2eMat(); setFilterArr();
        setModCo2e(); setModId(); setModName(); setModName2(); setSubmit()
        };

    const handleAdd = (e)=>{
        e.preventDefault();
        console.log("Added:", modName, modName2, modCo2e, modId);
        setSubmit(success);
        };

    const handleModify = (e)=>{
        e.preventDefault();
        console.log("Modified:", modName, modName2, modCo2e, modId);
        setSubmit(success);
        };

    const handleDelete = (e)=>{
        e.preventDefault();
        console.log("Deleted:", modName, modName2, modCo2e, modId);
        setSubmit(success);
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
        
    return (
        <div className="forms-wrapper">

            <div className="form-section">
                <h2>Add item to database</h2>

                <h4 className="admin-title">Materials</h4>
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


                <h4 className="admin-title">Logistics</h4>
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
                </div>
                <div className="form-item">
                        {inputCo2e1}
                </div>

            <h4 className="admin-title">Fastenings</h4>
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
                    <button onClick={handleAdd}>ADD</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">{submit}</div>
            </div>

            <hr className="hr" />

{/* DELETE/MODIFY */}
            <div className="form-section">
                <h2>Modify / Delete item from database</h2>
                    
{/* DELETE/MODIFY MATERIAL*/}

                <h4 className="admin-title">Materials</h4>
                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <select
                        className="light-pink" 
                        onChange={(e) => {
                            setFilterArr(material.find((type)=> type.name === e.target.value));
                            setModCo2e(filterArr.materialCO2E);
                            setModCo2eMat(filterArr.materialCO2E);
                            setModId(filterArr._id);
                            setModName(e.target.value);
                            console.log("Material", 1, modCo2e, 2, modCo2eMat, 3, modId, 4, modName, 5, filterArr)}}
                        >
                            <option></option>
                            {material.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.name}
                                    >
                                        {type.name}
                                    </option>
                                );
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={modCo2eMat}
                        onChange={(e) => setModCo2eMat(e.target.value)}
                        ></input>
                    </div>
                </div>

{/* DELETE/MODIFY LOGISTICS*/}
                <h4 className="admin-title">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <select 
                        className="light-pink"
                        onChange={(e) => {
                            setFilterArr(logistic.find((type)=> type.productionLocation === e.target.value));
                            setModCo2e(filterArr.logisticCO2e);
                            setModCo2eLog(filterArr.logisticCO2e);
                            setModId(filterArr._id);
                            setModName(e.target.value);
                            setModName2(filterArr.consumerLocation)
                            console.log("Logistics", 1, modCo2e, 2, modCo2eLog, 3, modId, 4, modName, 5, modName2, 6, filterArr)}}
                        >
                            <option></option>
                            {logistic.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.productionLocation}
                                    >
                                        {type.productionLocation}
                                    </option>
                                );
                            })};
                        </select>
                    </div>

                    <div className="form-input">
                        Consumer Location: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={modName2}
                        onChange={(e) => setModName2(e.target.value)}
                        ></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        co2e per item: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={modCo2eLog}
                        onChange={(e) => setModCo2eLog(e.target.value)}
                        ></input>
                    </div>
                </div>
                
{/* DELETE/MODIFY FASTENINGS*/}
                <h4 className="admin-title">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <select 
                        className="light-pink"
                        onChange={(e) => {
                            setFilterArr(fastening.find((type)=> type._id === e.target.value));
                            setModCo2e(filterArr._id);
                            setModCo2eFa(filterArr._id);
                            setModId(filterArr._id);
                            setModName(e.target.value);
                            console.log("Fastenings", 1, modCo2e, 2, modCo2eMat, 3, modId, 4, modName, 5, filterArr)}}
                        >
                            <option></option>
                            {fastening.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type._id}
                                    >
                                        {type._id}
                                    </option>
                                );
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={modCo2eFa}
                        onChange={(e) => setModCo2eFa(e.target.value)}
                        ></input>
                    </div>
                </div>

                <div className="form-input center-align">
                    <button onClick={handleModify}>MODIFY</button>
                    <button onClick={handleDelete}>DELETE</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">{submit}</div>
            </div>

        </div>
    )
};

export default AdminForms;