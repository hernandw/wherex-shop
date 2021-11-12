const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const {router} = require('./routes/index');

//Levantamiento del Servidor
app.listen(port, (req, res)=>{
    console.log(`Servidor activo en port ${port}`);
});

//Disponibilizar las rutas
app.use('/', router);

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

