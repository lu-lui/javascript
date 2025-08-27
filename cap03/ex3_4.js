//elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração, em gramas

const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso da ração (kg): "))
const consumo = Number(prompt("Quantidade em gramas consumida por dia: "))
const dias = Math.floor(peso * 1000 / consumo)
const sobra = peso * 1000 - consumo * dias
console.log(`Duração: ${dias} dias \nSobrará ${sobra}gr de ração`)