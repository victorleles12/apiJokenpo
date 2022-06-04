let pcGame = require('./pc.js');

function resGame(player){
    let pc = pcGame()
    let res = {}
 

    const theGame = {
        pedra(player){
            switch (player) {
                case 'pedra':
                    res.bot = pc, res.player = player, res.res = 'empate'
                    break;
                case 'papel':
                    res.bot = pc, res.player = player, res.res = 'vitoria'
                    break;
                case 'tesoura':
                    res.bot = pc, res.player = player, res.res = 'derrota'
                    break;
                default:
                    break;
            }
        },
        papel(player){
            switch (player) {
                case 'papel':
                    res.bot = pc, res.player = player, res.res = 'empate'
                    break;
                case 'tesoura':
                    res.bot = pc, res.player = player, res.res = 'vitoria'
                    break;
                case 'pedra':
                    res.bot = pc, res.player = player, res.res = 'derrota'
                    break;
                default:
                    break;
            }
        }, 
        tesoura(player){
            switch (player) {
                case 'tesoura':
                    res.bot = pc, res.player = player, res.res = 'empate'
                    break;
                case 'pedra':
                    res.bot = pc, res.player = player, res.res = 'vitoria'
                    break;
                case 'papel':
                    res.bot = pc, res.player = player, res.res = 'derrota'
                    break;
                default:
                    break;
            }
        }

    }
    theGame[pc](player)
    return res
}


module.exports = resGame