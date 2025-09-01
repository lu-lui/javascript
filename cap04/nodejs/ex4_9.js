// Elaborar um programa que leia um número (que deve ser uma centena) e exiba a centena invertida. Caso o número não seja uma centena, exiba a mensagem

const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (centena): "))

if (numero < 100 || numero >= 1000) {
    console.log("Erro... O número não é uma centena")
    return //faz voltar ao ponto de origem
} 

const num1 = Math.floor(numero / 100) //obtem o 1° número
const sobra = numero % 100
const num2 = Math.floor(sobra / 10) //obtem 2° número
const num3 = sobra % 10
console.log(`O número ${numero} invertido é: ${num3}${num2}${num1}`) 