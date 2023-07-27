let preco = prompt("quantos vale 1kg: ")
let consumo = prompt("consumo em gramas: ")
parseFloat(preco, consumo)

let valorPago = consumo*preco / 1000

document.write(`Valor a ser pago R$${valorPago}`)