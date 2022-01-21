const express = require('express');
const app = express();
const fs = require('fs'); // Файлы
const path = require('path'); // Пути
const Note = require('./Note');
const fd = require('./dateFormated');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/'));

app.get('/', function(request, response){
    response.send(getIndex());
});

app.post('/', function(request, response){
    (new Note()).add(request.body);
    response.redirect('/');
});

app.get('/list', function(request, response){
    response.json({list: (new Note()).getList()});
});
app.get('/show', function(request, response){
    response.send(getIndex(((new Note()).getDetail(request.query.id))));
});
app.get('/delete', function(request, response){
    (new Note()).delete(request.query.id);
    response.redirect('/');
});


app.listen(8080,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:8080/ \n Click Ctrl+C for stop server");
});

function getIndex(insert = false) {
    try {
        const data = fs.readFileSync('index.html', 'utf-8');
        return (data && insert) ? data.replace("#CONTENT#", insert) : data.replace("#CONTENT#", '');
    } catch (err) {
        console.error(err)
    }
    return false;
}
