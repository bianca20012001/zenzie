// var n = prompt("Digite um numero");
// var total = n % 2;
// if (total == 0) {
//     alert("Par");
// }
// else if (total == 1) {
//     alert("Impar");
// }

function diaDaSemana(n) {
    let resultado = "";

    if (n == 1) {
        resultado = 'Domingo';
    } else if (n == 2) {
        resultado = 'Segunda-feira';
    } else if (n == 3) {
        resultado = 'Terça-feira';
    } else if (n == 4) {
        resultado = 'Quarta-feira';
    } else if (n == 5) {
        resultado = 'Quinta-feira';
    } else if (n == 6) {
        resultado = 'Sexta-feira';
    } else if (n == 7) {
        resultado = 'Sábado';
    } else {
        resultado = 'Valor Inválido';
    }

    return resultado;
}
console.log(diaDaSemana())

