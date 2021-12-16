const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-Parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
  //provides user with permission to make changes to server data like adding or deleting data
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//Establishes connection with mongo database
const ConnectionString = 'mongodb+srv://admin:admin@cluster0.skwna.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(ConnectionString, { useNewUrlParser: true });

//var pokemonSchema = new Schema;

const pokemonSchema = mongoose.Schema({
  name: String,
  imageUrl: String
});

var pokemonModel = mongoose.model("pokemon", pokemonSchema);

app.get('/', (req, res) => {
  
})

//gets server to update any pokemon data changed by the user 
app.get('/Edit', (req, res) => {
  res.redirect('/Edit')
})
app.put('/Edit', (req, res, next) => {
  console.log("Update movie"+req.params.name);
  console.log(req.body);

  pokemonModel.findByIdAndUpdate(req.params.name,req.body, {new:true},
    (err,data)=>{
      res.send(data);
    })
  
  
    });
    //gets server to delete any pokemon by the user
app.delete('/Delete',(req,res)=>{
  console.log("delete pokemon: "+req.params.name)

  pokemonModel.findByIdAndUpdate(req.params.name,req.body,(err, data)=>{
    res.send(data);
  })
})
//gets server to add any pokemon by the user
app.post('/Add', (res, red) => {
  console.log("movie received")
  console.log(req.body.Name)
  console.log(req.body.ImageUrl)
  
  pokemonSchema.create({
    name: req.body.Name,
    imageUrl: req.body.ImageUrl,
  })
  res.send('item added');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })