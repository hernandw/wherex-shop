import express from 'express';
import data from './data.js';
const app = express();
const port = process.env.PORT || 3000;


//Levantamiento del Servidor
app.listen(port, (req, res)=>{
    console.log(`Servidor activo en port ${port}`);
});

app.get('/', (req, res)=>{
    res.send('Servidor Activo');
})

app.get('/api/products', (req, res)=>{
    res.send(data.products);
})
