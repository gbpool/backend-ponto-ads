let express = require('express');
let app = express();

const port = 3000;


const sequelize = require('./config/db');

const Usuario = require('./models/usuario');
const Ponto = require('./models/ponto');


sequelize.sync({alter: true})
.then(() =>  {console.log("sync feita com sucesso")})

.catch( error => {console.log("deu erro")});



const gabriel = Usuario.create({ nome:"gabriel", email: "gabriel.@ceub.br", login: "gabriel", senha: "123456"});
console.log(`usuario gabriel criado com id ${gabriel.id}`);









sequelize.authenticate().then(
    console.log("conectei no banco")
).catch(error => {
    console.log("deu erro")
});





/*
    MÉTODO HTTP PARA RECUPERAR INFORMAÇÕES
    /user -> retorna todos os usuários (ADM)
    /user/:id -> retorna a informação do usuário id (ADM, próprio usuário)
    /user/:id/registers -> retorna os registros do usuário id (ADM, próprio usuário)

    MÉTODO HTTP PARA CRIAR RECURSOS
    /user -> cria um usuário

*/





app.get("/user/:id1-:id2", (req, res) => {
    console.log(req.params);
});

app.post("/user/:id1-:id2", (req, res) => {
    res.send(req.params);
});

app.get("/teste", (req, res) => {
    res.send("Resposta da rota /teste");
});


app.post("/rotapost", (req, res) => {
    res.send("Retorno da rota usando o método post");
});


app.listen(port, () => {
    console.log(`servidor escutando a porta ${port}`);
});