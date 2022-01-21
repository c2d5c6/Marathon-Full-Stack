const exp = require('express');
const session = require('express-session');
const app = exp();

const host = 'localhost';
const port = 8080;

app.use(session({secret: 'ssshhhhh', saveUninitialized: true, resave: true}));
app.use(exp.json());
app.use(exp.urlencoded({extended: true}));

let sess;
app.get('/', (req, res) => {
    sess = req.session;
    if (sess.name) { return res.redirect('admin'); }
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    let resultExp = 1;
    let resultPur = 1;
    sess = req.session;
    console.log(req.body);
    for (let key in req.body) {
        sess[key] = req.body[key];
        key.includes('pw_') ? sess.expirience = resultExp++ : 
                                sess.expirience = resultExp - 1;
        key.includes('pub_') ? sess.expirience = resultPur++ : 
                                sess.expirience = resultPur - 1;
    }
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    sess = req.session;

    if (sess.name && sess.alias && sess.age && sess.age && sess.text && sess.photo) {
        res.write(`<h1>Session for new</h1>
        <pre>
        name:${sess.name}
        alias:${sess.alias}
        age:${sess.age}
        description:${sess.text}
        photo:${sess.photo}
        expirience:${sess.expirience}
        level:${sess.volume}
        purpose:${sess.purpose}</pre>`);
        res.end('<button><a href='+'/logout'+'>Forget</a></button>');
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href='+'/'+'>Login</a>');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) { return console.log(err); }
        res.redirect('/');
    });
});

app.listen(process.env.PORT || 8080, host, () => {
    console.log(`App Started on PORT ${process.env.PORT || 8080}\n http://${host}:${port}\n Click Ctrl + C for stop server`);
});