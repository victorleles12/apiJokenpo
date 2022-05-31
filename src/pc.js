const randonNumber = require('./numeroAleatorio');

function resultadoJogada(){
  let pc = ''
  let numero = randonNumber()

  switch (numero) {
    case 0:
        pc = 'pedra'
        break;
      case 1:
        pc = 'papel'
        break;
      case 2:
        pc = 'tesoura'
        break;
      default:
        pc = 'jogada invalida';
  }
 return pc
}

module.exports = resultadoJogada

