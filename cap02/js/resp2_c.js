const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const metade = preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$${(preco * 2 + metade).toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$${metade.toFixed(2)}`

    e.preventDefault()
})