import express from 'express';
import data from './data.js';
const app = express();
const port = process.env.PORT || 3000;


//Levantamiento del Servidor
app.listen(port, (req, res)=>{
    console.log(`Servidor activo en port ${port}`);
});


app.get('/api/products/:id', (req, res) =>{
const product = data.products.find((x) => x._id === req.params.id);
if(product){
   res.send(product); 
} else {
    res.status(404).send({message: 'Product not Found'});
}
});

app.get('/api/products', (req, res)=>{
    res.send(data.products);
});

app.get('/', (req, res)=>{
    res.send('Servidor Activo');
})
