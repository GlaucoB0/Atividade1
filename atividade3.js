// 1º Declarar todas as variaveis
let preco, consumo, valorPago

// 2ª Receber os valores das variaveis
preco = prompt("quantos vale 1kg: ")
consumo = prompt("consumo em gramas: ")
parseFloat(preco, consumo)

//3º processar as variaveis
valorPago = consumo* (preco / 1000)

//4º Mostrar o resultado
document.write(`Valor a ser pago R$${valorPago}`)