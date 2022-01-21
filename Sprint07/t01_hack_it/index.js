const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

const host = 'localhost';
const port = 8080;

// secret - строка, которой подписывается сохраняемый в cookie идентификатор сессии;
// saveUninitialized - булевое значение, если true, то в хранилище будут попадать пустые сессии;
app.use(session({secret:'keyCode', saveUninitialized: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let sess;
app.get('/', (req, res) => {
    sess = req.session;
    if (sess.password) {
        res.send(render(2, sess.hash));
    } else if (!sess.password) {
        res.send(render(1, '', sess.hacked));
    }
});

app.post('/', (req, res) => {
    sess = req.session;
    console.log(sess);
    sess.password = req.body.password;
    sess.number = req.body.number;
    console.log(sess.number);
    sess.hash = bcrypt.hashSync(sess.password, +sess.number);
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    sess = req.session;
    if (sess.password) {
        res.send(render(2, sess.hash));
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
    });
    res.redirect('/');
});

app.post('/check', (req, res) => {
    sess = req.session;
    sess.text = req.body.text;
    if (sess.password) {
        if (bcrypt.compareSync(sess.text, sess.hash)) {
            sess.hacked = true;
            req.session.destroy((err) => {
                if (err) {
                    return console.log(err);
                }
                res.send(render(3));
            });
        }
        else {
            res.send(render(4, sess.hash));
        }
    }
    else {
        res.redirect('/');
    }
});

app.listen(8080, host, () => {
    console.log(`App Started on PORT ${process.env.PORT || 8080}\n http://${host}:${port}\n Click Ctrl + C for stop server`);
});

function  render(type, hash = '') {
    let result1 = `<h1>Password</h1>
    <form action="/" method="POST" >
    <p>Password not saved at session.</p>
    <p>Password for saving to session<input type="password" name="password" placeholder="Password to session"></p>
    <p>Salt for saving to session<input type="number" name="number" placeholder="Salt to session"></p>
    <button type="submit">Save</button>
    </form>
    `;
    let result2 = `<h1>Password</h1>
    <form action="/check" method="POST" >
    <p>Password saved at session.</p>
    <p>Hash is ${hash}</p>
    <p>Try to guess:<input type="text" name="text" placeholder="Password to session"><button type="submit">Check password</button></p>
    </form>
    <button onclick="location.href='/logout'">Clear</button>
    `;
    let result3 = `<h1>Password</h1>
    <h2 style="color:green">Hacked!</h2>
    <form action="/" method="POST" >
    <p>Password not saved at session.</p>
    <p>Password for saving to session<input type="password" name="password" placeholder="Password to session"></p>
    <p>Salt for saving to session<input type="number" name="number" placeholder="Salt to session"></p>
    <button type="submit">Save</button>
    </form>
    `;
    let result4 = `<h1>Password</h1>
    <h2 style="color:red">Access denied!</h2>
    <form action="/check" method="POST" >
    <p>Password saved at session.</p>
    <p>Hash is ${hash}</p>
    <p>Try to guess:<input type="text" name="text" placeholder="Password to session"><button type="submit">Check password</button></p>
    </form>
    <button onclick="location.href='/logout'">Clear</button>
    `;
    if(type == 1){
        return result1;
    }
    if(type == 2){
        return result2;
    }
    if(type == 3){
          return result3
      }
    if(type == 4){
        return result4
    }
}