const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const {router} = require('./routes');
const path = require('path');

//Levantamiento del Servidor
app.listen(port, (req, res)=>{
    console.log(`Servidor activo en port ${port}`);
});

//Disponibilizar las rutas
app.use('/', router);

//Static
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);

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

