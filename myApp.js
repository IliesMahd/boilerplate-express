const { json } = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser');

// app.get('/', (req, res) => {
//     const absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath)
// })

// app.use('/public', express.static(__dirname + '/public'))

// app.get('/json', (req, res) => {
//     const messageStyle = process.env.MESSAGE_STYLE;
//     let message = "Hello json";
//     if (messageStyle === 'uppercase') {
//         message = message.toUpperCase();
//     }
//     console.log('messageStyle:', messageStyle); // Vérifier la valeur de la variable d'environnement
//     res.json({
//         "message": message
//     });
// });

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path} - ${req.ip}`);
//     next();
// });

// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     res.json({
//         "time": req.time
//     })
// })

// app.get('/:word/echo', (req, res) => {
//     const currentWord = req.params.word
//     console.log('currentWord:', currentWord)
//     res.json({
//         "echo": currentWord
//     })
// })

// app.use(express.json()); // Middleware pour parser le JSON du body

// app.route('/name')
//     .get((req, res) => {
//         const firstName = req.query.first;
//         const lastName = req.query.last;

//         if (!firstName || !lastName) {
//             res.status(400).send('Missing query parameters: first or last');
//             return;
//         }

//         res.json({ name: `${firstName} ${lastName}` });
//     })
//     .post((req, res) => {
//         const firstName = req.body.first;
//         const lastName = req.body.last;

//         if (!firstName || !lastName) {
//             res.status(400).send('Missing body parameters: first or last');
//             return;
//         }

//         res.json({ name: `${firstName} ${lastName}` });
//     });

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.post('/name', (req, res) => {
//     console.log("req", req.body)
// })

app.get('/', (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})

app.route('/name', bodyParser)
    .get((req, res) => {
        const firstName = req.query.first;
        const lastName = req.query.last;

        if (!firstName || !lastName) {
            res.status(400).send('Missing query parameters: first or last');
            return;
        }

        res.json({ name: `${firstName} ${lastName}` });
    })
    .post((req, res) => {
        const firstName = req.body.first;
        const lastName = req.body.last;

        if (!firstName || !lastName) {
            res.status(400).send('Missing body parameters: first or last');
            return;
        }

        console.log(JSON.stringify(req.body));

        res.json({ name: `${firstName} ${lastName}` });
    });































 module.exports = app;
