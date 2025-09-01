//Uma fármacia precisa de um programa que leia uma compra. Exiba como resposta o n° máximo de vezes que o cliente çode parcelar essa compra e o valor de cada parcela. Cada parcela deve ser de no mínimo 20,00. O número máximo de parcelas permitido é 6.

const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor da compra: "))
const aux = Math.floor(valor / 20) // aux = n° de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux //operador ternário

/*Equivale a: 
    let parcelas
    if(aux == 0){
        parcelas = 1
    } else if (aux > 6){
        parcelas = 6
    } else {
        parcelas = aux
    }*/

const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`)