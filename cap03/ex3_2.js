const prompt = require("prompt-sync")() //add o pacote ao programa
const veiculo = prompt("Veiculo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco / 2
const parcela = entrada / 12
console.log(`Promoção: ${veiculo} \nEntrada de R$${entrada.toFixed(2)} \n+12x de R$${parcela.toFixed(2)}`) // exibe as respostas