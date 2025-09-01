//programa para cálculo do peso ideal

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>  {
    
    const nome = frm.inNome.value
    const masc = frm.inMasc.checked //se inMasc for marcado
    const altura = Number(frm.inAltura.value)

    let peso //declara a variável de peso LET = pode ser modificada
    if (masc) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`

    e.preventDefault()
})

frm.addEventListener("reset", () =>  {
    resp.innerText = "" // limpa o conteúdo do elemento h3 que exibe a resposta
})