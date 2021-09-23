const express = require('express');
let app = express();
const cors = require('cors')
let  {resultadoJogada} = require('./jogada')
let porta = 8000
let player = resultadoJogada

app.use(cors())
app.use(express.json())

app.get('/getjogada', (req, res)=>{
  res.json({
    JogadaCpu: player(req.body)
  })
})

app.listen(porta, (req, res) =>{
  console.log(`Servidor rodando na porta ${porta}`)
})