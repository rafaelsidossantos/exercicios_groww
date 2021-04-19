/* RESPOSTA AQUI 👇 */


/* Questão 01 
Faça uma código que recebe três lados de um triângulo(a,b,c) e retorne o tipo de triângulo
a) A>=B+C não existe o triângulo
b) A² = B² + C² é um triângulo retângulo
c) A² > B² + C² é formado um triângulo obtusângulo
d) A² < B² + C² formando um acutângulo

Exceções: 
O lado A sempre deverá ser o maior de todos(Criar um mecânismo para tratar isso)
Caso sejam fornecidos valores negativos, retornar erro para o usuário.

*/
//Entrada
function calculatriangulo(A = 0, B = 0, C = 0, Tipo) {
    var Tipo = ""

    //Processamento
    if (A >= B + c) {
        Tipo = "nao existe triangulo"
    } if (A ** 2 == B ** 2 + C ** 2) {
        Tipo = "Triângulo retângulo"
    } if (A ** 2 > B ** 2 + C ** 2) {
        Tipo = "Triângulo obtusângulo"
    } else (A ** 2 < B ** 2 + C ** 2)
    {
        Tipo = " Triângulo acutângulo"
    }

    //Saída
    return Tipo
}






/* Questão 02

Uma empresa quer aumentar o salário dos funcionários dada a seguinte tábela
-> Até R$400,00 --------------------------- 15%
-> Entre R$400,01 e R$700 ----------------- 12%
-> Emtre R$700,01 e R$1000,00 ------------- 10%
-> Entre R$1000,01 e $2000,00 ------------- 7%
-> Entre R$2000,01 e R$3500,00 ------------ 4%
-> Acima de $3500,01 ---------------------- 0%

Crie um código que recebe o salario do funcionário(apenas numérico) e retorne o salario atual, a porcentagem de correção e o valor corrigido
*/

function corrigiSalario(c1 = 0.15, c2 = 0.12, c3 = 0.10, c4 = 0.07, c5 = 0.04, c6 = 0.0, salario = 0, salariocorrigido) {

    if (salario >= 400) {
        salariocorrigido = salario * c1
    }
    if (salario >= 400, 01 && salario <= 700, 00) {
        salariocorrigido = salario * c2
    }
    if (salario >= 700, 01 && salario <= 1000, 00) {
        salariocorrigido = salario * c3
    }
    if (salario >= 1000, 01 && salario <= 2000, 00) {
        salariocorrigido = salario * c4
    }
    if (salario >= 2000, 01 && salario <= 3500, 00) {
        salariocorrigido = salario * c5
    }
    if (salario >= 3500, 01) {
        salariocorrigido = salario * c6
    }
    return salariocorrigido
}

