const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPode")
const resp2 = document.querySelector("#outTipo")

frm.addEventListener("submit", (e) => {
    
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
        resp1.innerText = "Os lados não podem formar um triângulo"
    } else {
        resp1.innerText = "Os lados podem formar um triângulo"
        
        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
            resp2.innerText = "O triângulo é Equilátero"
        } else if ((ladoA == ladoB && ladoB != ladoC) || (ladoA == ladoC && ladoB != ladoC) || (ladoC == ladoB && ladoA != ladoC)) {
            resp2.innerText = "O triângulo é Isóceles"
        } else {
            resp2.innerText = "O triângulo é Escaleno"
        }
    }

    e.preventDefault()
})