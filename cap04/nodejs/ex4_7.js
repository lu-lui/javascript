//A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem direito à levar um peixe. Peixes extras custam R$12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de beixes obtidos na pescaria. Informe o valor a pagar

const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° de pessoas: "))
const peixes = Number(prompt("N° de peixes: "))

let pagar 
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = pessoas * 20 + (peixes - pessoas) * 12
}

console.log(`Pagar R$${pagar.toFixed(2)}`)