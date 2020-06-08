const express = require('express');
const server = express();

//pegar o banco de dados
const db = require('./database/db.js')

//habilitar o req.body
server.use(express.urlencoded({ extended: true }))

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
   // req.query
   return res.render("create-point.html")
});

server.post("/savepoint", (req, res) => {
   // console.log(req.body)
   const query = `
         INSERT INTO places (
               image,
               name,
               address,
               address2,
               state,
               city,
               items
         ) VALUES (?,?,?,?,?,?,?);
      `
   const values = [
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items
   ]

   function afterInsertData(err) {
      if (err) {
         console.log(err)
         return res.send("Erro no cadastro!!!")
      }
      console.log("Cadastrado com sucesso!!!")
      console.log(this)

      return res.render("create-point.html", { saved: true })
   }

   db.run(query, values, afterInsertData);

});

server.get("/search", (req, res) => {
   const search = req.query.search
   if (search == "") {
      //pesquisa vazia 
      return res.render("search.html", { total: 0 })
   }
   //pegar os dados do banco de dados
   db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
      if (err) {
         return console.log(err)
      }
      //   console.log("Aqui estão seus registros: ")
      //   console.log(rows)
      const total = rows.length
      return res.render("search.html", { places: rows, total: total })

   });

});
//ligar o servidor
server.listen(3000);