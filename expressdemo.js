const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port  = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/kudb')
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Error connecting MongoDB: "+err)
})

//Impoort Model
const userModel = require('./models/Users');

app.get('/process/', (req,res)=>{
    var userData = {
        'uname': req.query.txt1,
        'ugender': req.query.txt2
    }

    userModel.create(userData)
    .then(()=>console.log("Record Added"))
    .catch((err) =>console.log("Error"+err))
    res.send("Done");
})


app.get('/display/', (req,res)=> {
    userModel.find()
    .then((data)=> res.send(data))
    .catch((err) => console.log(err))
})



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/Home', (req, res) => {
    res.sendFile(__dirname+"/home.html");
})
app.get('/About', (req, res) => {
    res.sendFile(__dirname+"/about.html");
})
app.get('/Contact', (req, res) => {
    res.sendFile(__dirname+"/contact.html");
})


app.get('/cake/surat', (req, res) => {
    res.send(`Hello Surat`);
})
app.get('/cake/ahmedabad', (req, res) => {
    res.send(`Hello Ahmedabad`);
})

app.get('/product/:id', (req, res) => {
    var id = req.params.id;
    res.send("ID is "+id);
})

app.get('/search/', (req, res) => {
    var id = req.params.q;
    res.send("Sorry "+ id+ "Not Found");
})

// app.get('/process/', (req,res) =>{
//     var txt1 = parseInt(req.query.txt1);
//     var txt2 = parseInt(req.query.txt2);
//     var sum = txt1+txt2;
//     res.send(`A value is ${txt1}
//     B value is ${txt2}
//     Sum is ${sum}`)
// })




app.listen(port, ()=>{
    console.log("Server is listening on port 3000.")
})
