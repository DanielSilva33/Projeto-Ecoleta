//importar a dependencia do sqlite
const sqlite3 = require('sqlite3').verbose();

//criar o objeto do banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;

//utilizar o banco
//db.serialize(() => {
//     //criar as tabelas
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://i2.wp.com/lapachamama.fr/wp-content/uploads/2018/12/alfonso-navarro-693886-unsplash.jpg?resize=1100%2C687&ssl=1",
//         "Teste22",
//         "Jr teste",
//         "206",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos"

//     ]
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso!!!")
//         console.log(this)
//     }

//    db.run(query, values, afterInsertData);

//     //consultar dados na tabela 
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     }); //

    //deletar os dados 
    //db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
      //  if(err) {
        //    return console.log(err)
        //}

        //console.log("Registro deletado com sucesso.")
        //console.log(rows)
    //})

// });