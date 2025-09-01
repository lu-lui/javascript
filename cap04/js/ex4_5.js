const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero) // calcula raiz quadrada do número

    if (Number.isInteger(raiz)) { //se o valor da raiz for inteiro
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }
    
    e.preventDefault()
})