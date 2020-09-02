import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req,res) => {
    res.send(data.products);
})

app.listen(2121, () => {console.log("Server started at http://localhots:2121")})
