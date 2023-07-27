let modelo = prompt("Modelo do Veiculo: ")
let preco = prompt("preço do Veiculo: ")

parseFloat(preco)
let entrada = preco/2
let dividi = entrada/12

//
document.write(`O valor do veiculo ${preco} tem valor de entrada R$${entrada} dividindo o resto em R$${dividi}`)
