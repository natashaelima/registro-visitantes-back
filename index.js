const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const visitanteRoutes = require('./src/routes/visitanteRoutes')

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
    res.send("Bem-vindo à API MUSEU");
})

app.use('/visitantes', visitanteRoutes);

app.all('*', (req, res) => {
    res.status(404).send("Rota não encontrada");
})

app.listen(port, () => {
    console.log("Servidor de pé: http://localhost:8000")
})