let titulo = prompt("Escreva o nome do filme: ")
let minutos = prompt("Escreva a duração em minutos: ")

let minutoInt = parseInt(minutos)
hora = minutoInt/60
let horaInt = parseInt(hora)
let min = minutoInt%60
let minInt = parseInt(min)


document.write(`O filme ${titulo} tem ${horaInt}:${minInt} de duração`)
