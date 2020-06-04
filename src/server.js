const express = require('express');
const server = express();
//tamplate engine
const nunjucks = require('nunjucks')

nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

//configurar pasta public para conseguir achar os arquivos
server.use(express.static("public"))

//configurar caminhos da aplicação para a home
server.get("/", (req, res) => {
   return res.render("index.html")
});

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
});

server.get("/search", (req, res) => {
   return res.render("search.html")
});

//ligar o servidor
server.listen(3000);