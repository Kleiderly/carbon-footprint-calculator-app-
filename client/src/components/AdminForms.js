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
    const [modCo2eLog1, setModCo2eLog1] = useState();
    const [modCo2eLog2, setModCo2eLog2] = useState();
    const [modCo2eFa, setModCo2eFa] = useState();

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

    const clearForm = () => {
        const inputs = document.querySelectorAll("input,select");
        inputs.forEach((item) => (item.value = ""));
        setModCo2eFa(); setModCo2eLog2(); setModCo2eLog1(); setModCo2eMat();
        setModCo2e(""); setModId(); setModName(); ; setModName2()
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
                    <button onClick={handleAdd && clearForm}>ADD</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
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
                            setModCo2e(11);
                            setModCo2eMat(22);
                            setModId(33);
                            setModName(e.target.value);
                            console.log("here1", 1, modCo2e, 2, modCo2eMat, 3, modId, 4, modName)}}
                        >
                            {material.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    name={type.materialCO2E}
                                    value={type.name} 
                                    placeholder={type.name}
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
                            setModCo2e(11);
                            setModCo2eLog1(22);
                            setModId(33);
                            setModName(e.target.value);
                            setModName2(44)
                            console.log("here2", modCo2e, modCo2eLog1, modId, modName, modName2)}}
                        >
                            {logistic.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    name={type.logisticCO2e}
                                    value={type.productionLocation} 
                                    placeholder={type.productionLocation} 
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
                        value={modCo2eLog2}
                        onChange={(e) => setModCo2eLog2(e.target.value)}
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
                            setModCo2e(11);
                            setModCo2eFa(22);
                            setModId(33);
                            setModName(e.target.value)}}
                        >
                            {fastening.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    name={type._id}
                                    value={type._id} 
                                    placeholder={type._id} 
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
                    <button onClick={handleModify && clearForm}>MODIFY</button>
                    <button onClick={handleDelete && clearForm}>DELETE</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
            </div>

        </div>
    )
};

export default AdminForms;