let numero = 4.7

//Math.round arredonda os numeros
console.log(Math.round(numero))

//Math.ceil arredonda sempre para cima
console.log(Math.ceil(numero))

//Math.floor sempre arrendonda para baixo
console.log(Math.floor(numero))

//Math.pow gera potenciação
console.log(Math.pow(5, 2))

//Math.sqrt raiz quadrada
console.log(Math.sqrt(25))

//Math.abs gera o numero absoluto postivo
console.log(Math.abs(-5))

//Math.min encontra o menor numero
console.log(Math.min(7, 45, 89, 2, 125))

//Math.max encontra o maior numero
console.log(Math.max(7, 45, 89, 2, 125))

let Numaleatorio = Math.floor(Math.random() * 10)
console.log(Numaleatorio)

const numero1 = prompt("Digite um número")
const numero2 = prompt("Digite outro número")

let media = (numero1 + numero2) / 2

console.log(`A média é: ${Math.round(media)}`)

