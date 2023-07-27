//1º declarar as variaveis
let valor, precoDesconto

//2º variaveis que irão receber valor
valor = Number(prompt("Digite o valor do produto: "))

//3º processar as variaveis
precoDesconto = Math.floor(valor*2)

//4º mostrar resultado
document.write(`O valor final ${precoDesconto}`)

