const express= require('express');
const mongoose= require('mongoose');
const MongoClient = require('mongodb').MongoClient
const app=express();

const port= 3002;
const url= "mongodb+srv://mike:letsdoit@cluster0.iuc2b.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const studentrouter= require("./routes/students");
app.use('/students',studentrouter)

app.set('view engine', 'ejs')
app.use(express.static('public'))//view css html
app.use(express.urlencoded({ extended: true })) //parses to strings
app.use(express.json())//parse .json - middleware

app.listen(port, () =>{
    console.log(`server started on port ${port}`);
})