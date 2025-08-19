const express = require("express");
const productRoutes = require("./routes/productRoutes");

const cors = require('cors');
const app = express();

// Habilita suporte ao CORS
app.use(cors());
// Middleware para passar JSON no corpo das requisições
app.use(express.json());

// Monta as rotas de usuário sob o prefixo /api
app.use("/api", productRoutes);

// Middleware de tratamento de erros genérico (opcional, mas recomendado
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo deu errado!");
});

module.exports = app;
