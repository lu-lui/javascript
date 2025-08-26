//cria uma ref para o form e h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte de evento ao form
frm.addEventListener("submit", (e) =>{
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo
    resp.innerText = `Valor à pagar: R$${valor.toFixed(2)}`

    e.preventDefault()
})
