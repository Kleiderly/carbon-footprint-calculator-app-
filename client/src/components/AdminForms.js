import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./css/Admin.css";
import './css/vivify.min.css';


function AdminForms() {
    const [privateData, setPrivateData] = useState("");
/* API call results */
    const [material, setMaterial] = useState([]);
    const [logistic, setLogistic] = useState([]);
    const [fastening, setFastening] = useState([]);
/* Chosen object values / Message after submit / Chosen category / Active form */
    const [filterArr, setFilterArr] = useState([]);
    const [submit, setSubmit] = useState("");
    const [cat, setCat] = useState("");
    const [section, setSection] = useState("");
/* Chosen values for submission */
    const [modName, setModName] = useState("");
    const [modName2, setModName2] = useState("");
    const [modCo2e, setModCo2e] = useState(0);
    const [modId, setModId] = useState();
    const [error, setError] = useState("")
/* API call links */
    const materialAPI = axios.get(`/api/material`);
    const logisticAPI = axios.get(`/api/logistic`);
    const fasteningAPI = axios.get(`/api/fastening`);
    const adminAPI = axios.get(`/api/auth`);

    let history = useHistory();
    

 // To block users without login
    useEffect(() => {
        const fetchPrivateDate = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
    
          try {
            const { data } = await axios.get("/api/private", config);
            setPrivateData(data.data);

          } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
          }
        };
    
        fetchPrivateDate();
      }, []);
   

        // let superAdmin = JSON.parse(localStorage.getItem("superAdmin"));
        

/* API calls */
    useEffect(()=>{
        axios.all([materialAPI, logisticAPI, fasteningAPI])
        .then(axios.spread((...res) => {
            console.log(res[0].data, res[1].data, res[2].data);
            setMaterial(res[0].data);
            setLogistic(res[1].data);
            setFastening(res[2].data);
        }))
        .catch((err)=> console.log(err))
    }, [submit]);

/* Submit message */
    const success = "Submit successful!";
    const failed = "Submit unsuccessful";

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
        setModCo2e(); setModId(); setModName2(); setCat(); setSection();
        setModName(); setSubmit(); setFilterArr();
    };

/* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("passw");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
    };


/* ROUTES */

/* Tells which category to post to */
    function postInstruction() {
        if(cat === "logistic"){
            return {productionLocation: modName, consumerLocation: modName2, co2e: modCo2e}
        }else{
            return {name: modName, co2e: modCo2e}
        }             
    };

/* Tells which category to modify */
    function modInstruction() {
        if(cat === "logistic"){
            return {productionLocation: modName, consumerLocation: modName2, co2e: modCo2e}
        }else{
            return {name: modName, co2e: modCo2e}
        }
    };

/* POST */
    const handleAdd = (e)=>{
        e.preventDefault();
         axios.post(`/api/${cat}`, postInstruction())
        .then((res)=>{
            console.log(res);
            console.log("Added:", modName, modName2, modCo2e, modId)
            setSubmit(success);
            setTimeout(()=> clearForm(), 1000);
           
        })
        .catch((err)=>{
            console.log(err);
            setSubmit(failed);
        })
    };
    
/* PUT */
    const handleModify = (e)=>{
        e.preventDefault();
        
        axios
        .put(`/api/${cat}/${modId}`, modInstruction())
        .then((res) => {
            console.log(res);
            console.log("Modified:", modName, modName2, modCo2e, modId);
            setSubmit(success);
            setTimeout(()=> clearForm(), 1000);
        })
        .catch((err) => {
            console.log(err);
            setSubmit(failed);
        });
    };

/* POST to X co2e first form value input HTML (repeated) */
    const inputCo2e1 = 
        <div className="form-input">
            <p className="admin-input-label">Co2e per item: </p>
            <input 
            className="light-pink"
            type="text"
            name="co2e"
            onChange={(e) => {
                setModCo2e(e.target.value); 
            }}
            />
        </div>;

//Logout 
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        history.push("/adminpage/login");
    }
        
     
    return error ? (
        <span className="error-message">{error}</span>
      ) : (
          
        <div className="forms-wrapper vivify fadeIn">

            <div className="form-section">
                <h2 className="form-main-title">Add item to database</h2>

{/* POST to MATERIALS */}
                <h4 className="admin-title">Materials</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Material: </p>
                        <input 
                        className="light-pink" 
                        type="text"
                        name="material"
                        onChange={(e) => {
                          setModName(e.target.value);
                          setSection("form1");
                          setCat("material");
                        }}
                        />
                    </div>
                    {inputCo2e1}
                </div>

{/* POST to LOGISTICS */}
                <h4 className="admin-title">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Production Location: </p>
                        <input 
                        className="light-pink" 
                        type="text"
                        name="logistics"
                        onChange={(e) => {
                          setModName(e.target.value);
                          setCat("logistic")
                          setSection("form1");
                        }}
                        />
                    </div>
                    <div className="form-input">
                    <p className="admin-input-label">Consumer Location: </p>
                        <input 
                        className="light-pink" 
                        type="text"
                        name="logistics"
                        onChange={(e) => {
                            setCat("logistic")
                          setModName2(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="form-item">
                    {inputCo2e1}
                </div>

{/* POST to FASTENINGS */}
            <h4 className="admin-title">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Name: </p>
                        <input 
                        className="light-pink" 
                        type="text"
                        name="fastenings"
                        onChange={(e) => {
                          setModName(e.target.value);
                          setSection("form1");
                          setCat("fastening")
                        }}
                        />
                    </div>
                    {inputCo2e1}
                </div>

{/* SUBMIT buttons */}
                <div className="form-input center-align">
                    <button className="admin-form-button" onClick={handleAdd}>ADD</button>
                    <button className="admin-form-button" onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form1" && submit}&nbsp;</div>
            </div>


            <hr className="hr" />


{/* MODIFY FORM */}
            <div className="form-section">
                <h2 className="form-main-title">Modify / Delete item from database</h2>
                    
{/* MODIFY MATERIAL*/}
                <h4 className="admin-title">Materials</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Material: </p>
                        <select
                        className="light-pink" 
                        onChange={(e) => {
                            setFilterArr(material.find((type)=> type.name === e.target.value));
                            setModName(e.target.value);
                            setSection("form2");
                            setCat("material");
                            console.log("Material", modCo2e, modId, modName, filterArr);
                        }}>
                            <option></option>
                            {material.map((type, i) => {
                                return (
                                    <option 
                                    id={type._id} 
                                    key={i} 
                                    name="material"
                                    value={type.name}
                                    >
                                    {type.name}
                                    </option>
                                );
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                    <p className="admin-input-label">Co2e per item: </p>
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={cat === "material" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        />
                    </div>
                </div>

{/* MODIFY LOGISTICS */}
                <h4 className="admin-title">Logistics</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Production Location: </p>
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
                                    name="logistic"
                                    value={type.productionLocation}
                                    >
                                        {type.productionLocation}
                                    </option>
                                )
                            })};
                        </select>
                    </div>

                    <div className="form-input">
                    <p className="admin-input-label">Consumer Location: </p>
                        <input
                        className="light-pink"
                        type="text"
                        name="logistic"
                        value={modName2}
                        onChange={(e) => setModName2(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Co2e per item: </p>
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={cat === "logistic" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        />
                    </div>
                </div>
                
{/* MODIFY FASTENINGS */}
                <h4 className="admin-title">Fastenings</h4>
                <div className="form-item">
                    <div className="form-input">
                    <p className="admin-input-label">Name:</p>
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
                                    name="fastening"
                                    value={type.name}
                                    >
                                        {type.name}
                                    </option>
                                )
                            })};
                        </select>
                    </div>
                    <div className="form-input">
                    <p className="admin-input-label">Co2e per item: </p>
                        <input
                        className="light-pink"
                        type="text"
                        name="co2e"
                        value={cat === "fastening" ? modCo2e : ""}
                        onChange={(e) => setModCo2e(e.target.value)}
                        />
                    </div>
                </div>

{/* SUBMIT buttons */}
                <div className="form-input center-align">
                    <button className="admin-form-button" onClick={handleModify}>MODIFY</button>
                    <button className="admin-form-button" onClick={clearForm}>CLEAR FORM</button>
                </div>
                <div className="form-submit">&nbsp;{section === "form2" && submit}&nbsp;</div>
            </div>

            <hr className="hr" />

            <div className="center-align">
                <button onClick={handleLogout} className="back-button logout-button">LOG OUT</button>
            </div>
        </div>
    )
}

export default AdminForms;