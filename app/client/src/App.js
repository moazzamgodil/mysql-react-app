import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';

function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitUser = () => {
        Axios.post('localhost:3001/api/insert', {
            username: name,
            email: email
        }, { crossdomain: true });
    };

    return (
        <div className="App">
            <h1>Application</h1>

            <div className="form">
                <label>Name:</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <label>Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />

                <button onClick={submitUser}>Submit</button>
            </div>
        </div>
    );
}

export default App;