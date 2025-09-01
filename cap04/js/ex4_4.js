const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const HoraBrasil = Number(frm.inHoraBrasil.value)
    let HoraFranca = HoraBrasil + 5
    
    if (HoraFranca > 24) { //se passar de 24h na frança
        HoraFranca -= 24 //subtrai 24
    }

    resp.innerText = `Hora na França: ${HoraFranca.toFixed(2)}`

    e.preventDefault()
})