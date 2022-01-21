const express = require('express');
const fetch = require('node-fetch');
const crypto = require('crypto');

const app = express();

const host = 'localhost';
const port = 8080;

const pubKey = '2ca3292010db39ee98f349267911ad1f';
const privKey = '649e5579bdace15e2874dc0838f79bac389d8bad';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/js', express.static(__dirname + '/'));

app.get('/', async function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/show', async function(req, res) {
    let now = Date.now();
    let ccc = crypto.createHash('md5').update(now + privKey + pubKey).digest('hex');
    res.json(await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${pubKey}&hash=${ccc}&ts=` + now)
    .then(res => res.json()));
});

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
  });