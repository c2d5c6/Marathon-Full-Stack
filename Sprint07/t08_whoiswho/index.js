const express = require('express');
const session = require('express-session');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');

const app = express();
const host = 'localhost';
const port = 8080;

let csvArray = [];
let sess;

app.use(session({secret: 'secretKey', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static(__dirname + '/'));
app.use('/js', express.static(__dirname + '/'));
app.use(multer({dest: "uploads"}).single("file"));

app.get('/', (req, res) => {
    res.send(getIndex());
});

app.post('/', (req, res, next) => {
    sess = req.session;
    if (!req.file) {
        res.redirect('/');
    } else {
        sess.file = req.file.path;

        let result = '';
        fs.createReadStream(sess.file)
            .pipe(csv())
            .on('data', (data) => csvArray.push(data))
            .on('end', () => {
                result = renderTable(csvArray);
                res.send(getIndex(result));
            });
    }
});

app.get('/filter', (req, res) => {
    let result = '';
    fs.createReadStream(sess.file)
        .pipe(csv())
        .on('data', (data) => csvArray.push(data))
        .on('end', () => {
            result = renderTable(csvArray, req.query);
            res.send(getIndex(result));
        });
});

app.listen(port, host, () => {
    console.log(`App Started on PORT ${8080}\n http://${host}:${port}\n Click Ctrl + C for stop server`);
});

function getIndex(insert = false) {
    try {
        const data = fs.readFileSync('index.html', 'utf-8');
        return (data && insert) ? data.replace('#TEXT#', insert) : data.replace('#TEXT#', '');
    } catch (err) {
        console.error(err);
    }
    return false;
}

function renderTable(arr, filter = false) {
    let map = getFilters(arr);
    let res = '<form action="/filter" id="filters"><table border="1px;"><tr>';
    for (let key in arr[0]) {
        res += `<th>${getFilterHtml(key, map, filter ? filter[key] : false)}</th>`;
    }
    res += '</tr>';
    if (filter && Object.keys(filter).length !== 0) {
        arr = arr.filter(item => {
            let flag = true;
            for (let key in item) {
                if (!(filter[key] === item[key] || filter[key] === 'all-items')) {
                    flag = false;
                }
            }
            return flag;
        });
    }
    arr.map(item => {
        res += '<tr>';
        for (let key in item) {
            res += `<td>${item[key]}</td>`;
        }
        res += '</tr>';
    });
    res += '</table><button type="submit" id="submit"></button></form>';
    return res;
}

function getFilterHtml(title, map, filter) {
    let res = `<select name="${title}">${title}`;
    res += `<option value="all-items" ${!filter || filter === 'all-items' ? 'selected' : ''}><b>${title} (all)</b></option>`;
    map.get(title).map(item => {
        res += `<option value="${item}"  ${filter === item ? 'selected' : ''}>${item}</option>`;
    });
    res += `</select>`;
    return res;
}

function getFilters(arr) {
    let map = new Map();
    for (let key in arr[0]) {
        map.set(key, [...new Set(arr.map(item => { return item[key]}))].sort());
    }
    return map;
}