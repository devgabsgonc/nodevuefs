import express from 'express';
import { cartItems, products } from './RestAPI';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Olá!');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/cart', (req, res) => {
    res.json(cartItems);
});

app.get('/products/:productID', (req, res) => {
    const productID = req.params.productID;
    const product = products.find(product => product.id === productID);
    res.json(product);
});

app.listen(8000, () => {
    console.log('O servidor está rodando na porta 8000');
});