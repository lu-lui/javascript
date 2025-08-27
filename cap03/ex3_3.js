//elaborar um programa para uma empresa que leia o salario e o tempo que um funcionario trabalha na empresa. Sabendo que a cada quatro anos o funcionario recebe um acrescimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionario tem direito e o salário final

const prompt = require("prompt-sync")()
const salario = prompt(`Salário do funcionário: `)
const tempo = Number(prompt("Tempo de empresa (anos): "))
const quadrienios = Math.floor(tempo / 4)
const novoSalario = Number(salario + (salario * quadrienios / 100)) //Não esquecer do Number()
console.log(`Número de quadriênios: ${quadrienios} \nNovo salário: R$ ${novoSalario.toFixed(2)}`)