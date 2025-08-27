//código javascript do programa soma de dois números, rodando com NODE.JS

const prompt = require("prompt-sync")() //adiciona pacote para entrada de dados
const num1 = Number(prompt("1° Número: ")) //lê os numeros
const num2 = Number(prompt("2° Número: "))
const soma = num1 + num2
console.log(`A soma é ${soma}`) //exibe os resultados