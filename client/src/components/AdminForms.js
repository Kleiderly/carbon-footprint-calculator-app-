import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./CSS/Admin.css";

function AdminForms() {
/* API call results */
    const [material, setMaterial] = useState([]);
    const [logistic, setLogistic] = useState([]);
    const [fastening, setFastening] = useState([]);
/* Chosen values for submission */
    const [modName, setModName] = useState("");
    const [modName2, setModName2] = useState("");
    const [modCo2e, setModCo2e] = useState();
    const [modId, setModId] = useState("");
/* Chosen object values / Message after submit / Chosen category */
    const [filterArr, setFilterArr] = useState([]);
    const [submit, setSubmit] = useState();
    const [cat, setCat] = useState("");
/* API call links */
    const materialAPI = axios.get(`http://localhost:5000/api/material`);
    const logisticAPI = axios.get(`http://localhost:5000/api/logistic`);
    const fasteningAPI = axios.get(`http://localhost:5000/api/fastening`);

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
    const failed = "Submit unsuccessful";
    const clearMessage = filterArr === "";

/* Clear submit message when form is clear */
    useEffect(()=>{
        setSubmit();
    }, [clearMessage]);

/* Fill chosen object values on input change */
    useEffect(()=>{ 
        if(filterArr){
            setModCo2e(filterArr.co2e);
            setModId(filterArr._id);
            setModName2(filterArr.consumerLocation);
            } else {
                clearForm()
            }
    }, [filterArr]);

/* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select");
        inputs.forEach((item) => (item.value = ""));
        setModCo2e(); setModId(); setModName2(); setCat();
        setModName(); setSubmit(); setFilterArr();
        };


/* ROUTES */
    const postLogistics = `http://localhost:5000/api/${cat}/${modName}/${modName2}/${modCo2e}`;
    const postOthers = `http://localhost:5000/api/${cat}/${modName}/${modCo2e}`;
    const modLogistics = `http://localhost:5000/api/${modId}/${modName}/${modName2}/${modCo2e}`;
    const modOthers = `http://localhost:5000/api/${modId}/${modName}/${modCo2e}`;

/* POST */
    const handleAdd = (e)=>{
        e.preventDefault();
        axios
        .post(
          cat === "logistic" ? postLogistics : postOthers
        )
        .then((res) => {
          console.log(res);
          console.log("Added:", modName, modName2, modCo2e, modId);
          setSubmit(success);
        })
        .catch((err) => {
          console.log(err);
          setSubmit(failed,`:`, err);
        });
    };

/* PUT */
    const handleModify = (e)=>{
        e.preventDefault();
        axios
        .put(
            cat === "logistic" ? modLogistics : modOthers
        )
        .then((res) => {
            res.send('Item modified');
            console.log("Modified:", modName, modName2, modCo2e, modId);
            setSubmit(success);
        })
        .catch((err) => {
            console.log(err);
            setSubmit(failed,`:`, err);
        });
    };

/* DELETE */
    const handleDelete = (e)=>{
        e.preventDefault();
        axios
        .delete(
          `http://localhost:5000/${cat}/${modId}`
        )
        .then((res) => {
            res.send('Item deleted');
            console.log("Deleted:", modName, modName2, modCo2e, modId);
            setSubmit(success);
        })
        .catch((err) => {
            console.log(err);
            setSubmit(failed,`:`, err);
        });
    };


/* ADD to X co2e value input HTML */
    const inputCo2e1 = 
        <div className="form-input">
        Co2e per item: <br />
        <input 
        className="light-pink"
        type="text"
        name="co2e"
        onChange={(e) => setModCo2e(e.target.value)}
        ></input>
        </div>;
        
    return (
        <div className="forms-wrapper">

            <div className="form-section">
                <h2>Add item to database</h2>

{/* ADD to MATERIALS */}
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

{/* ADD to LOGISTICS */}
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
                          setModName2(e.target.value);
                        }}
                        ></input>
                    </div>
                </div>
                <div className="form-item">
                    {inputCo2e1}
                </div>

{/* ADD to FASTENINGS */}
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
                <div className="form-submit">&nbsp;{submit}&nbsp;</div>
            </div>


            <hr className="hr" />


{/* DELETE/MODIFY FORM */}
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
                            setModName(e.target.value);
                            setCat("material");
                            console.log("Material", modCo2e, modId, modName, filterArr);
                        }}>
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
                        value={cat === "material" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        ></input>
                    </div>
                </div>

{/* DELETE/MODIFY LOGISTICS */}
                <h4 className="admin-title">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                        Production Location: <br />
                        <select 
                        className="light-pink"
                        onChange={(e) => {
                            setFilterArr(logistic.find((type)=> type.productionLocation === e.target.value));
                            setModName(e.target.value);
                            setCat("logistic");
                            console.log("Logistics", modCo2e, modId, modName, modName2, filterArr);
                        }}>
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
                                )
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
                        Co2e per item: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={cat === "logistic" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        ></input>
                    </div>
                </div>
                
{/* DELETE/MODIFY FASTENINGS */}
                <h4 className="admin-title">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Type: <br />
                        <select 
                        className="light-pink"
                        onChange={(e) => {
                            setFilterArr(fastening.find((type)=> type.name === e.target.value));
                            setModName(e.target.value);
                            setCat("fastening");
                            console.log("Fastenings", modCo2e, modId, modName, filterArr);
                        }}>
                            <option></option>
                            {fastening.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.name}
                                    >
                                        {type.name}
                                    </option>
                                )
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                        Co2e per item: <br />
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={cat === "fastening" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        ></input>
                    </div>
                </div>

{/* SUBMIT buttons */}
                <div className="form-input center-align">
                    <button onClick={handleModify}>MODIFY</button>
                    <button onClick={handleDelete}>DELETE</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{submit}&nbsp;</div>
            </div>
        </div>
    )
};

export default AdminForms;