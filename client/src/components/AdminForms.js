import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./CSS/Admin.css";

function AdminForms() {
/* API call results */
    const [material, setMaterial] = useState([]);
    const [logistic, setLogistic] = useState([]);
    const [fastening, setFastening] = useState([]);
    const [admin, setAdmin] = useState([]);
/* Chosen values for submission */
    const [modName, setModName] = useState("");
    const [modName2, setModName2] = useState("");
    const [modCo2e, setModCo2e] = useState();
    const [modId, setModId] = useState();
/* Chosen username/password */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
/* Chosen object values / Message after submit / Chosen category */
    const [filterArr, setFilterArr] = useState([]);
    const [submit, setSubmit] = useState("");
    const [cat, setCat] = useState("");
    const [section, setSection] = useState("");
/* API call links */
    const materialAPI = axios.get(`/api/material`);
    const logisticAPI = axios.get(`/api/logistic`);
    const fasteningAPI = axios.get(`/api/fastening`);
    const adminAPI = axios.get(`/api/admin`);

/* API calls */
    useEffect(()=>{
        axios.all([materialAPI, logisticAPI, fasteningAPI, adminAPI])
        .then(axios.spread((...res) => {
            console.log(res[0].data, res[1].data, res[2].data, res[3].data);
            setMaterial(res[0].data);
            setLogistic(res[1].data);
            setFastening(res[2].data);
            setAdmin(res[3].data);
        }))
        .catch((err)=> console.log(err))
    }, []);

/* Clear submit message when form is clear */
    const success = "Submit successful!";
    const failed = "Submit unsuccessful";
    const clearMessage = filterArr === "";

    useEffect(()=>{
        setSubmit();
    }, [clearMessage]);

/* Fill chosen object values on input change */
    useEffect(()=>{ 
        if(filterArr){
            setModCo2e(filterArr.co2e);
            setModId(filterArr._id);
            setModName2(filterArr.consumerLocation);
            setPassword(filterArr.password);
            } else {
                clearForm()
            }
    }, [filterArr]);

/* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select");
        inputs.forEach((item) => (item.value = ""));
        setModCo2e(); setModId(); setModName2(); setCat(); setSection();
        setModName(); setSubmit(); setFilterArr(); setUsername(); setPassword();
    };

/* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("passw");
        const pw2 = document.getElementById("passw2");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
        pw2.type === "password" ? pw2.type = "text" : pw2.type = "password"
    };

/* ROUTES */
    const postLogistics = `/api/${cat}/${modName}/${modName2}/${modCo2e}`;
    const postOthers = `/api/${cat}/${modName}/${modCo2e}`;
    const postAdmin = `/api/admin/${username}/${password}`;
    const modLogistics = `/api/${modId}/${modName}/${modName2}/${modCo2e}`;
    const modOthers = `/api/${modId}/${modName}/${modCo2e}`;
    const modAdmin = `/api/${modId}/${username}/${password}`;

    function postInstruction() {
        if(cat === "logistic"){
            return postLogistics
        }else if(cat === "admin"){
            return postAdmin
        }else{
            return postOthers
        }
    };

    function modInstruction() {
        if(cat === "logistic"){
            return modLogistics
        }else if(cat === "admin"){
            return modAdmin
        }else{
            return modOthers
        }
    };

/* POST */
    const handleAdd = (e)=>{
        e.preventDefault();
        axios
        .post(postInstruction)
        .then((res) => {
            console.log(res);
            console.log("Added:", modName, modName2, modCo2e, modId, username, password);
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
        .put(modInstruction)
        .then((res) => {
            console.log("Modified:", modName, modName2, modCo2e, modId, username, password);
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
            `/api/${cat}/${modId}`
        )
        .then((res) => {
            console.log("Deleted:", modName, modName2, modCo2e, modId, username, password);
            setSubmit(success);
        })
        .catch((err) => {
            console.log(err);
            setSubmit(failed,`:`, err);
        });
    };


/* POST to X co2e first form value input HTML (repeated) */
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

{/* POST to MATERIALS */}
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
                          setSection("form1");
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>

{/* POST to LOGISTICS */}
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
                          setSection("form1");
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

{/* POST to FASTENINGS */}
            <h4 className="admin-title">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                        Name: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="consLocation"
                        onChange={(e) => {
                          setModName(e.target.value);
                          setSection("form1");
                        }}
                        ></input>
                    </div>
                        {inputCo2e1}
                </div>

{/* SUBMIT buttons */}
                <div className="form-input center-align">
                    <button name="form1" onClick={handleAdd}>ADD</button>
                    <button name="form1" onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form1" && submit}&nbsp;</div>
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
                            setSection("form2");
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
                            setSection("form2");
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
                        Name: <br />
                        <select 
                        className="light-pink"
                        onChange={(e) => {
                            setFilterArr(fastening.find((type)=> type.name === e.target.value));
                            setModName(e.target.value);
                            setCat("fastening");
                            setSection("form2");
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
                    <button name="form2" onClick={handleModify}>MODIFY</button>
                    <button name="form2" onClick={handleDelete}>DELETE</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form2" && submit}&nbsp;</div>
            </div>


            <hr className="hr" />

    
            <div className="form-section">
                <h2>Add / Delete / Modify User</h2>

{/* POST to ADMIN */}
                <h4 className="admin-title">Add new User</h4>
                <div className="form-item">
                    <div className="form-input">
                        Username: <br />
                        <input 
                        className="light-pink" 
                        type="text"
                        name="username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setSection("form3");
                        }}
                        ></input>
                    </div>
                    <div className="form-input">
                        Password: <br />
                        <input 
                        className="light-pink"
                        type="password"
                        name="password"
                        id="passw"
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="form-item password-field">
                    <input type="checkbox" className="pw-checkbox" onClick={showPw} />Show Password
                </div>
                <div className="form-input center-align">
{/* POST to ADMIN  buttons*/}
                    <button onClick={handleAdd}>ADD</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form3" && submit}&nbsp;</div>


{/* DELETE/MODIFY ADMIN */}
                <h4 className="admin-title">Delete / Modify User</h4>
                <div className="form-item">
                    <div className="form-input">
                        Username: <br />
                        <select
                        className="light-pink" 
                        onChange={(e) => {
                            setFilterArr(admin.find((type)=> type.username === e.target.value));
                            setUsername(e.target.value);
                            setCat("admin");
                            setSection("form4");
                            console.log("Admin", username, password, filterArr);
                        }}>
                            <option></option>
                            {admin.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    value={type.username}
                                    >
                                        {type.username}
                                    </option>
                                );
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                        Password: <br />
                        <input
                        className="light-pink"
                        type="password"
                        name="password"
                        id="passw2"
                        value={cat === "admin" ? password : ""}
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        </div>
                    </div>
                <div className="form-item password-field">
                    <input type="checkbox" className="pw-checkbox" onClick={showPw} />Show Password
                </div>
                <div className="form-input center-align">
{/* DELETE/MODIFY ADMIN buttons*/}
                    <button name="form3" onClick={handleModify}>MODIFY</button>
                    <button name="form3" onClick={handleDelete}>DELETE</button>
                    <button onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form4" && submit}&nbsp;</div>
            </div>
        </div>
    )
};

export default AdminForms;