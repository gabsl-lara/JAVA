let N = 1


for (let index = 1; index <= 10; index++) {
console.log(" " + N + " X " + index + " = " + N * index)    
}
let digito1 = Number(prompt("coloque o primeiro digito:"))
let digito2 = Number(prompt("coloque o segundo digito:"))
let operacao = prompt("coloque oa operação desejada:\n[+]\n[-]\n[*]\n[/]")


if (operacao == "+") {
   alert(digito1 + digito2)

}
else if (operacao == "-") {
    alert(digito1 - digito2)
}
else if (operacao == "*") {
    alert(digito1 * digito2)
}
else if (operacao == "/"){
    alert(digito1 / digito2)
}
else {
    alert("J.A.R.V.I.S,QUE PORRA É ESSA?")
}