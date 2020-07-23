const express = require('express')
const app = express()

const mongoose = require('mongoose')



app.listen(3000)

// mongodb+srv://wcUser:<password>@wisechoise.ijjrr.mongodb.net/<dbname>?retryWrites=true&w=majority


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://wcUser:<password>@wisechoise.ijjrr.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });