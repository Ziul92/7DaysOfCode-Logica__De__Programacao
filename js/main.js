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



/*
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
*/


/*
// #7DaysOfCode - Dia 3 - Controle de fluxo
const texto = document.querySelector("#texto")
const texto2 = document.querySelector("#texto2")


const areaInicial = prompt("Qual área gostaria de seguir? `Front-End` ou `Back-End`?")
let dominio = ""

if(areaInicial === "Front-End") {
  dominio = prompt(`Que bom que escolheu seguir com ${areaInicial}, agora gostaria de aprender "React" ou "Vue"?`)
} else if(areaInicial === "Back-End") {
  dominio = prompt(`Que bom que escolheu seguir com ${areaInicial}, agora gostaria de aprender "C#" ou "Java"?`)
} else {
  dominio = prompt("Você provavelmente digitou algo errado!!")
}


const FullOuEspe = prompt(`Gostaria de se "Especializar" em ${areaInicial} ou gostaria de seguir se desenvolvendo para se tornar "Fullstack"?`)

if(FullOuEspe === "Especializar") {
  alert(`Continue se especializando em ${areaInicial}, ainda tem muita coisa para se aprender em ${dominio}!!!`)
} else if (FullOuEspe === "Fullstack"){
  alert(`Explore o mundo além do ${areaInicial}, existem muitas outras linguagens para conhecer!!!`)
}

const perguntaFinal = prompt("Ainda existe outra tecnologia que gostaria de conhecer? Responda ok se sim!!!")

for(i = "ok"; perguntaFinal === i;) {
  let qual = prompt("Qual seria?")
  alert(`Muito bem, ${qual} é muito interessante de se aprender!`)
  const perguntaFinal = prompt("Ainda existe outra tecnologia que gostaria de conhecer? Responda ok se sim!!!")
  if(perguntaFinal === "não") {
    break
  }
}
*/


/*
//#7DaysOfCode - Dia 4 - Jogo de adivinha
const numeroAleatorio = Math.floor(Math.random()*10)
const tentativas = 3

for(i = 0; i <= tentativas; i++) {  
  const chute = prompt("De 0 a 10, qual número estou pensando??")
  if(chute != numeroAleatorio && chute > numeroAleatorio){
    alert(`Você errou, o número escolhido é MENOR que ${chute}, você ainda tem ${tentativas - i} tentativas!!!`)
  }
  if(chute != numeroAleatorio && chute < numeroAleatorio) {
    alert(`Você errou, o número escolhido é MAIOR que ${chute}, você ainda tem ${tentativas - i} tentativas!!!`)
  }

  if(chute == numeroAleatorio) {
    alert(`Parabéns, você acertou, o número escolhido era ${numeroAleatorio}!!!`)
    break
  } else if(i === tentativas) {
    alert(`Você errou, o número escolhido era ${numeroAleatorio}`)
    break
  }
}
*/

/*
//#7DaysOfCode - Dia 5 - Arrays
const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  padaria: [],
  limpeza: [],

}
const pergunta = prompt(`Gostaria de adicionar um novo item a lista de compra "sim" ou "não"`)

while(pergunta === "sim") {
  let comida = prompt("Qual comida gostaria de adicionar?")
  let grupos = prompt(`Em qual grupo gostaria de adicionar essa comida? frutas, laticinios, congelados, doces, padaria, limpeza?`)
  listaDeCompras[grupos].push(comida)
  console.log(listaDeCompras)

  const pergunta = prompt(`Gostaria de adicionar um novo item a lista de compra "sim" ou "não"`)
  if(pergunta === "não") {
    console.log(listaDeCompras)
    break
  }
}
*/


/*
//#7DaysOfCode - Dia 6 - Remoção de itens do array
const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  padaria: [],
  limpeza: [],
}

const pergunta = prompt(`Gostaria de adicionar um novo item a lista de compra "sim" ou "não"`)

while(pergunta === "sim") {
  let comida = prompt("Qual comida gostaria de adicionar?")
  let grupos = prompt(`Em qual grupo gostaria de adicionar? Grupos: frutas, laticinios, congelados, doces, padaria, limpeza?`)
  listaDeCompras[grupos].push(comida)
  let lista = alert(`Lista de compras: Frutas: ${listaDeCompras.frutas}, 
  Laticinios: ${listaDeCompras.laticinios}, 
  Congelados: ${listaDeCompras.congelados}, 
  Doces: ${listaDeCompras.doces}, 
  Padaria: ${listaDeCompras.padaria}, 
  Limpeza: ${listaDeCompras.limpeza}. 
  Sua lista até o momento!!`)

  const pergunta = prompt(`Gostaria de adicionar um novo item a lista de compra "sim" ou "não"? Também é possível "remover"!`)

  if(pergunta === "não") {
    lista = alert(`Lista de compras: Frutas: ${listaDeCompras.frutas}, 
    Laticinios: ${listaDeCompras.laticinios}, 
    Congelados: ${listaDeCompras.congelados}, 
    Doces: ${listaDeCompras.doces}, 
    Padaria: ${listaDeCompras.padaria}, 
    Limpeza: ${listaDeCompras.limpeza}.
    Sua lista terminou com esses itens!!!`)
    break
  } 
  if(pergunta === "remover") {
    lista = prompt(`Lista de compras: Frutas: ${listaDeCompras.frutas}, 
    Laticinios: ${listaDeCompras.laticinios}, 
    Congelados: ${listaDeCompras.congelados}, 
    Doces: ${listaDeCompras.doces}, 
    Padaria: ${listaDeCompras.padaria}, 
    Limpeza: ${listaDeCompras.limpeza}. 
    Qual item gostaria de REMOVER?`)
    let grupo = prompt(`De qual grupo gostaria de REMOVER o item? Grupos: frutas, laticinios, congelados, doces, padaria, limpeza?`)
    if(listaDeCompras[grupo].indexOf(lista) != -1) {
      listaDeCompras[grupo].splice(listaDeCompras[grupo].indexOf(lista), 1)
      alert(`O item ${lista} foi removido com sucesso do grupo ${grupo}`)
    }
  }
}
*/


 //#7DaysOfCode - Dia 7 - Funções
const pergunta = prompt("Gostaria de fazer uma continha marota? `sim` ou `sair`?")
const conta = [
  "soma",
  "multiplicação",
  "divisão",
  "subtração",
  "sair"
]

while(pergunta === "sim") {
  const operacao = prompt(`Qual o tipo de operação gostaria de utilizar? "soma", "multiplicação", "divisão", "subtração" ou "sair"?`)
  if(operacao == "sair" || pergunta == "sair") {
    alert("Até a próxima!!!")
    break
  }
  num1 = prompt("Qual o 1º número?")
  num2 = prompt("Qual o 2º número?")
  if(operacao === "soma") {
    alert(soma(num1, num2))
  }
  if(operacao === "multiplicação") {
    alert(multiplicacao(num1, num2))
  }
  if(operacao === "divisão") {
    alert(divisao(num1, num2))
  }
  if(operacao === "subtração") {
    alert(subtracao(num1, num2))
  }
}

function soma(num1, num2) {
  let conta = parseInt(num1) + parseInt(num2)
  return conta
}
function multiplicacao(num1, num2) {
  let conta = num1 * num2
  return conta
}
function divisao(num1, num2) {
  let conta = num1 / num2
  return conta
}
function subtracao(num1, num2) {
  let conta = num1 - num2
  return conta
}