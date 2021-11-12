const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const {router} = require('./routes');
const path = require('path');
const { get } = require('http');

//Levantamiento del Servidor
app.listen(port, (req, res)=>{
    console.log(`Servidor activo en port ${port}`);
});

//Midleware
app.use((req, res, next) =>{
const fecha = new Date();
res.locals.year = fecha.getFullYear();
next();
});

//Disponibilizar las rutas
app.use('/', router);

//Static
app.use(express.static(path.join(__dirname, "/public")));


// Importar motor de plantillas handlebars
app.set("view engine", "hbs");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/partials/`,
    extname: ".hbs",
  })
);

