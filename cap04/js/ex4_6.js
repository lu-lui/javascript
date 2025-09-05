const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (10, 50, 100)")
        frm.inSaque.focus() //faz com que o elemento receba o foco do teclado ou do mouse e se torne o elemento ativo
        return //o programa retorna ao ponto de partida
    }

    const notas100 = Math.floor(saque / 100) //calcula notas de 100
    let resto = saque % 100 // quanto sobra para pagar
    const notas50 = Math.floor(resto / 50)
    resto %= 50
    const notas10 = Math.floor(resto / 10)

    if (notas100 > 0) {
        resp1.innerText = `Notas de R$100: ${notas100}`
    }

    if (notas50 > 0) {
        resp2.innerText = `Notas de R$50: ${notas50}`
    }

    if (notas10 > 0) {
        resp3.innerText = `Notas de R$10: ${notas10}`
    }
})