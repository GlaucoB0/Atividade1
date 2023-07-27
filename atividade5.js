//1º declarar vasriaveis
let valorTempo, tempoUso, valorPagar, valorUso

//2º variaveis que vão receber valor
valorTempo = Number(prompt("Valor por 15min de uso R$"))
tempoUso = Number(prompt("Tempo de uso por cliente (min)"))

//3º processar as varias
valorUso = tempoUso/15
valorPagar = valorUso * valorTempo

//4 ] mostrar o resultado
alert(`valor a pagar ${valorPagar}`)