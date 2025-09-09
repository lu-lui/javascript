const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener( "submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""     //variável do tipo string, para concatenar a resposta

    for (let i = 0; i <= 10; i++) {
        //a variável resposta vai acumulando os novos conteúdos (nos dois formatos)
        resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n" 
        //  OU resposta = `${resposta}${numero} X ${i} = ${numero * i} \n`  
         
    }

    resp.innerText = resposta
})

