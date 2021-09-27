import React from 'react';
import "./CSS/Admin.css";

function AdminForms() {
    
    return (
        <div className="forms-wrapper">

            <div className="form-section">
                <h2>Add item to database</h2>

                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Country from: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Country to: <br />
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


            <div className="form-section">
                <h2>Modify / Delete item from database</h2>
                    
                <div className="form-item">
                    <div className="form-input">
                        Material: <br />
                        <select className="light-pink">
                            <option value="#">#</option>
                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>
                    
                <div className="form-item">
                    <div className="form-input">
                        Country from: <br />
                        <input className="light-pink"></input>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input">
                        Country to: <br />
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
                        <select className="light-pink">
                            <option value="#">#</option>
                        </select>
                    </div>
                    <div className="form-input">
                        co2e per item: <br />
                        <input className="light-pink"></input>
                    </div>
                </div>

                <div className="form-input center-align">
                    <button>MODIFY</button>
                    <button>DELETE</button>
                    <button>CLEAR FORM</button>
                </div>
            </div>

        </div>
    )
};

export default AdminForms;