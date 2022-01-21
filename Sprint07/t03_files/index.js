const express = require('express');
const fs = require('fs');
const path = require('path');

const File = require('./File.js');
const FileList = require('./FileList.js');

const host = 'localhost';
const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/js', express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    let file = new File(req.body.filename);
    file.write(req.body.content);
    res.redirect('/');
});

app.get('/list', (req, res) => {
    let fileList = new FileList();
    res.json({html: fileList.getHTMLList()});

    console.log(fileList.getList());
    console.log(fileList.hasFiles());
    console.log(fileList.getHTMLList())
});

app.get('/show', (req, res) => {
    console.log(req.query.file);
    let file = new File(req.query.file);
    res.json({content: file.read()});
});

app.get('/delete', (req, res) => {
    console.log(req.query.file);
    let fileList = new FileList();
    let file = new File(req.query.file);
    file.delete();
    console.log(fileList.getList());
    res.redirect('/');
});

app.listen(port, host, () => {
    console.log(`App Started on PORT ${process.env.PORT || 8080}\n http://${host}:${port}\n Click Ctrl + C for stop server`);
});

// let file = new File('example_file.txt');
// file.write('Some text.');
// constcontent= file.read();
// console.log(content);
// const fileList= new FileList();
// console.log(fileList.getList());
// console.log(fileList.hasFiles());
// console.log(fileList.getHTMLList());
// file.delete();
// console.log(fileList.getList());
