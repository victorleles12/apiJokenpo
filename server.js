let theGame = require('./src/resJogada.js')
const express = require('express');
let app = express();

const cors = require('cors')

let porta = process.env.PORT;
if (porta == null || porta == "") {
  porta = 8000;
}

app.use(cors())
app.use(express.json())

app.get('/getjogada', (req, res)=>{
  res.send(theGame(req.body.jogada))
})

app.listen(porta, (req, res) =>{
  console.log(`Servidor rodando na porta ${porta}`)
})