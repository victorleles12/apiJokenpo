const jogada = require('./numeroAleatorio')

function resultadoJogada(){
let numero = jogada()
let player = ''
  switch (numero) {
    case 0:
        player = 'pedra'
        break;
      case 1:
        player = 'papel'
        break;
      case 2:
        player = 'tesoura'
        break;
      default:
        player = 'jogada invalida';
  }

  return player
}

module.exports = {resultadoJogada}

