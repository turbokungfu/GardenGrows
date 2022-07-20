const express= require('express');
const mongoose= require('mongoose');

const app=express();

const port= 3002;
const url= "mongodb+srv://mike:letsdoit@cluster0.iuc2b.mongodb.net/?retryWrites=true&w=majority";

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




app.listen(port, () =>{
    console.log(`server started on port ${port}`);
})