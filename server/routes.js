const express = require("express");
const app = express();

var usuarios = [];

app.post("/post", (ped, res) => {
    console.info(`Requisição realizada com sucesso!, email : ${ped.body.email}, senha : ${ped.body.senha}`)
    usuarios.push(ped.body.email);
});

app.get("/get", (ped, res) => {
    res.send(usuarios);
});

module.exports = app;