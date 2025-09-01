const bairro = prompt("Bairro de Entrega: ")
let taxaEntrega

switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00
        break

    case "Triângulo":
    case "Vila Nova":
        taxaEntrega = 7.00 //se for Isabel ou Triângulo a taxa será 7.00
        break
    
    case "Vila Fonseca":
        taxaEntrega = 10.00
        break

    default:
        taxaEntrega = 8.00
}

alert(`Taxa: R$${taxaEntrega.toFixed(2)}`)