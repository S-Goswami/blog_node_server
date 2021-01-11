var express = require('express');

var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(4000);

const url = 'mongodb://localhost:27017/blog';
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.get('/recentArticles', (req, res)=>{
    // res.send("Hey!");
    // res.sendStatus(200);
    MongoClient.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) console.log(err)
        else console.log(client);
        client.db('blog').collection('recentarticles').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    })
    
    // console.log('call done');
})

app.get('/theLatestSection', (req, res)=>{
    console.log(req);
    MongoClient.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) console.log(err)
        else console.log(client);
        client.db('blog').collection('theLatestSection').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    })
    
})

app.get('/categoryData', (req, res)=>{
    console.log(req);
    MongoClient.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) console.log(err)
        else console.log(client);
        client.db('blog').collection('categoryData').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    })
    
})
app.get('/latestArticles', (req, res)=>{
    console.log(req);
    MongoClient.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) console.log(err)
        else console.log(client);
        client.db('blog').collection('latestArticles').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    })
    
})

app.get('/latestStories', (req, res)=>{
    console.log(req);
    MongoClient.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) console.log(err)
        else console.log(client);
        client.db('blog').collection('latestStories').find().toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    })
    
})

app.get('/api', (req, res)=>{
    res.send("API!");
    console.log('api call done');
})
console.log("started");