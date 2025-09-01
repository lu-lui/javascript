const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const valorUso = Number(frm.inUso.value)
    const tempo = Number(frm.inTempo.value)

    const valor = valorUso * Math.ceil(tempo / 15)
    
    resp.innerText = `Valor a Pagar: R$${valor.toFixed(2)}`

    e.preventDefault()
})