const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddb'
});

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/insert", (req, res) => {

    const username = req.body.username;
    const email = req.body.email;

    const q = "INSERT INTO user (name, email) VALUES (?, ?);"
    db.query(q, [username, email], (err, result) => {
        //     res.send("Hello World");
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001")
});