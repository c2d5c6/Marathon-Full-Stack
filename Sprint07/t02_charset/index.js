const express = require('express');
const Iconv = require('iconv').Iconv;
const app = express();

const host = 'localhost';
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let mem = '';

app.get('/', (req, res) => {
    res.sendfile('index.html');
    console.log('Index.html');
});

app.post('/', (req, res) => {
    mem = req.body;
    if (mem.inputtext && mem.charset) {
        res.send(ren(getChs(mem)));
    }
    else {
        res.sendfile('index.html');
    }
});

app.listen(process.env.PORT || 8080, host, () => {
    console.log(`App Started on PORT ${process.env.PORT || 8080}\n http://${host}:${port}\n Click Ctrl + C for stop server`);
});

function ren(par = '') {
    let res = `<h1>Charset</h1>
    <form action="/" method="POST">
    <label for="inputtext">Change charset:</label>
    <input type="text" name="inputtext"placeholder="Input string">
    <p>Select charset or several charset:
    <select name="charset" id="charset" multiple>
        <option value="UTF-8">UTF-8</option>
        <option value="base64">base64</option>
        <option value="Windows-1252">Windows-1252</option>
    </select>
    <button type="submit">Change charset</button>
    <button onclick="location.href='/'">Clear</button>
    </p>
    </form>
    ${par}
    `;
    return res;
}

function getChs(param) {
    let result = `<p>Input string:<textarea type="currnet_charset" cols="20" rows="3" placeholder="${param.inputtext}"></textarea><p>`;
    if (typeof param.charset === 'string') {
        return result + getString(param.charset, param.inputtext);
    }
    else {
        param.charset.forEach((item) => {
            result += getString(item, param.inputtext);
        });
        return result;
    }
}

function getString(coding, text) {
    if (coding == 'UTF-8') {
        return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${text}"></textarea><p>`;
    }
    if (coding == "Windows-1252") {
        return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${new Iconv(
            'UTF-8',
            coding
        )
            .convert(text)
            .toString()}"></textarea><p>`;
    }
    return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${new Iconv(
        'ISO-8859-1',
        'UTF-8'
    )
        .convert(text)
        .toString()
    }"></textarea><p>`;
}