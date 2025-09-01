const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const paridade = numero % 2 == 0 ? "Par" : "Ímpar"

    resp.innerText = `O número ${numero} é ${paridade}`
})