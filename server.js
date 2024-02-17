const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const uri = require('./config/db').url;
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());


const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

client.connect().then((res, err) => {
    if (err) return console.log(err)
    require('./app/routes')(app, client.db('products'));
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });        
})

