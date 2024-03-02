const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const visitanteRoutes = require('./src/routes/visitanteRoutes')

app.use(express.json());
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.get('/', (req, res) => {
    res.send("Bem-vindo à API MUSEU");
    //swagger.ignore = true;
})

app.use('/visitantes', visitanteRoutes);

app.all('*', (req, res) => {
    res.status(404).send("Rota não encontrada");
})

app.listen(port, () => {
    console.log("Servidor de pé: http://localhost:8000")
})