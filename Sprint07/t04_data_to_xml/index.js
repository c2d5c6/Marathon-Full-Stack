const express = require('express');
const app = express();
const {ListAvengerQuotes} = require('./ListAvengerQuotes');
const xml2js = require('xml2js');
const data = require('./array');
const fs = require('fs'); // Файлы
let xml, list;

const { htmlToText } = require('html-to-text');
const { parse } = require('node-html-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
app.get('/toXML', function(request, response){

    list = new ListAvengerQuotes(data.data);
    list.toXML('./avenger_quote.xml');
    response.json({to: JSON.stringify(list.data), from: list.fromXML('avenger_quote.xml')});
});

app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
});