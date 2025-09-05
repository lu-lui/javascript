const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    
    let troco 
    let tempo
    if (valor < 1) {
        alert("Valor Insuficiente, deposite um valor maior ou igual a R$1,00")
        frm.inValor.focus()
        return
    } if (valor >= 1 && valor < 1.75) {
        troco = valor - 1
        tempo = 30
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$${troco.toFixed(2)}`
    } else if (valor >= 1.75 && valor < 3) {
        troco = valor - 1.75
        tempo = 60
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$${troco.toFixed(2)}`
    } else {
        troco = valor - 3
        tempo = 120
        resp1.innerText = `Tempo: ${tempo} min`
        resp2.innerText = `Troco: R$${troco.toFixed(2)}`
    }


    e.preventDefault()
})










//return