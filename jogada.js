const jogada = require('./numeroAleatorio')

function resultadoJogada(jogadaDoplayer){
let numero = jogada()
let player = {
  jogadaDoPc: '',
  resultado: ''
}
  switch (numero) {
    case 0:
        player.jogadaDoPc = 'pedra'
        break;
      case 1:
        player.jogadaDoPc = 'papel'
        break;
      case 2:
        player.jogadaDoPc = 'tesoura'
        break;
      default:
        player.jogadaDoPc = 'jogada invalida';
  }
    if (jogadaDoplayer.jogada == 'papel' && player.jogadaDoPc =='papel'){
      player.resultado = 'empate'
    }else if(jogadaDoplayer.jogada == 'tesoura' && player.jogadaDoPc =='papel'){
      player.resultado = 'Vitoria'
    }else if(jogadaDoplayer.jogada == 'pedra' && player.jogadaDoPc =='papel'){
      player.resultado = 'derrota'
    }else if(jogadaDoplayer.jogada == 'pedra' && player.jogadaDoPc =='pedra'){
      player.resultado = 'empate'
    }else if(jogadaDoplayer.jogada == 'tesoura' && player.jogadaDoPc =='pedra'){
      player.resultado = 'derrota'
    }else if(jogadaDoplayer.jogada == 'pedra' && player.jogadaDoPc =='pedra'){
      player.resultado = 'vitoria'
    }else if(jogadaDoplayer.jogada == 'tesoura' && player.jogadaDoPc =='tesoura'){
      player.resultado = 'empate'
    }else if(jogadaDoplayer.jogada == 'papel' && player.jogadaDoPc =='tesoura'){
      player.resultado = 'derrota'
    }else if(jogadaDoplayer.jogada == 'pedra' && player.jogadaDoPc =='tesoura'){
      player.resultado = 'vitoria'
    }if(jogadaDoplayer.jogada != 'pedra', 'papel', 'tesoura'){
      player.resultado = 'jogada invalida'
    }

  return player
}

module.exports = {resultadoJogada}

