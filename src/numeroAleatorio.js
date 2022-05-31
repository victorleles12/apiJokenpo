function randonNumber(){
  min = Math.ceil(0);
  max = Math.floor(3);
  let numero = Math.floor(Math.random() * (max - min)) + min
  return numero
}

module.exports = randonNumber

