// #7DaysOfCode - Dia 1 - Igualdade de valores
/*
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
*/


// #7DaysOfCode - Dia 2 - Váriaveis 
const texto = document.querySelector("#texto")
const texto2 = document.querySelector("#texto2")

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const linguagem = prompt("Qual a linguagem de programação você está estudando?")

texto.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está estudando ${linguagem}!!!`
console.log(texto.innerHTML)


  const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para Sim ou 2 para Não!!`)

  if(pergunta == 1) {
    texto2.innerHTML = `Muito bom ${nome}! Continue estudando ${linguagem} e você terá muito sucesso!!`
    console.log(`Muito bom ${nome}! Continue estudando ${linguagem} e você terá muito sucesso!!`)
  }
  if(pergunta == 2) {
    texto2.innerHTML = `Ahh que pena que não está gostando de estudar ${linguagem} ${nome}... Já tentou aprender outras linguagens?`
  }


