require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.post('/usuario', function(req, res) {
    const body = req.body;
    if (body.nombre === undefined) {
        return res.status(400).json({
            ok: false,
            mensaje: "El nombre es requerido"
        });
    }
    res.json({
        usuario: body
    });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});