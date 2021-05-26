/* RESPOSTA AQUI 👇 */

/* Questão 01 

Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar

Exemplo:
calculaPar([1])
retorno: impar

calculaPar([0,1,5])
retorno: par
*/

function calculaPar(lista) {
    var i = 0; 
    var soma = 0; 
    while (i < lista.length) {
        soma = soma + lista[i]
        i++
    }
    if (soma % 2 === 0) {
        console.log(`Número par ${soma}`)
    } else {
        console.log(`Número Impar ${soma}`)
    }
}






/* Questão 02

Crie uma função que receba dois números e calcule o primeiro elevado ao segundo

exemplo:
CalculaExpoente(2,2)
saída: 4
CalculaExpoente(5,5)
Saída: 3125

*/
function expoente(n1 = 0, n2 = 0) {
    var resultexpoente = n1 ** n2
    return resultexpoente
}

/* Questão 03
Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
exemplo:
CalculeSomaQuadrado(3) -> 14
Processamento: 1² + 2² + 3² = 14
*/
function calculaquadrado(n1) {
    var resultado = []
    var soma = 0
    for (var i = 0; i < n1; i++) {
        //var total = n1[i] + n1
        resultado = (resultado[i]) ** 2
        soma = soma + resultado[i]
        console.log(`o valor é:  ${soma}`)
}
}
/* Questão 04
Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
Exemplo:
calculaSequencia([3,4,1,2]) ->2
(3->4) e (1->2)
calculaSequencia([10,11,12,9,10]) -> 3
(10->11->12)
*/

