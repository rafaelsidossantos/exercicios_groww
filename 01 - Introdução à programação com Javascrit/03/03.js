/* RESPOSTA AQUI 👇 */

/* Questão 01
Cria uma função que leia o mês do aniversário da pessoa(01 ~ 12) e retorne seu signo:
01 - Capricornio
02 - Aquario
03 - Peixes
04 - Aries
05 - Touro
06 - Gêmeos
07 - Cancer
08 - Leão
09 - Virgem
10 - Libra
11 - Escorpião
12 - Sagitário

*/

function leSigno(mes){
    var signo = ""
    var choice = mes
    if(choice == 01){
        signo = "Capricornio";}
    
    if(choice == 02){
        signo = "Aquario";}
    

    if(choice = 03){
        signo = "Peixes";}
    

    if(choice == 04){
        signo = "Aries";}
    

    if(choice == 05){
        signo = "Touro";}
    

    if(choice == 06){
        signo = "Gemeos";}
    

    if(choice == 07){
        signo = "Cancer";}
    

    if(choice == 08){
        signo = "Leao";}
    

    if(choice == 09){
        signo = "Virgem";}
    

    if(choice == 10){
        signo = "Libra";}
    

    if(choice == 11){
        signo = "Escorpião";}
    

    if(choice == 12){
        signo = "Sagitario";}
    

    return (signo)}


/* Questão 02

Cria uma função que leia dois números e retorne como resultado os seguintes valores:
a) a multiplicação entre eles
b) a divisão entre eles eles
c) a soma entre eles
d) a subtração entre eles
*/
function calculaTudo(n1, n2) {
    var multiplicacao = n1 * n2;
    var divisao = n1 / n2;
    var soma = n1 + n2;
    var subtracao = n1 - n2;

    var resultado = ['divisão: ' + divisao, 'multiplicação: ' + multiplicacao, 'soma: ' + soma, 'subtração: ' + subtracao]

    return resultado
}


/* Questão 03

Carlos deseja fazer um omelete. Na receita que leu na internet, um omelete sempre deve levar
2 ovos. 

Cria uma função que retorne para Carlos quantos omeletes ele consegue fazer com a quantidade 
de ovos que ele possue

exemplo: 
entrada 5 ovos
saída 2 omeletes

Entrada 4 ovos
saída 2 omeletes

*/

function retornaOmelete(quantidadeovo) {
    var omelete = quantidadeovo / 2
    return parseInt(omelete)
}

/*
Questão 04

Crie um programa que funciona como um calculadora. O usuário entrara com
3 inputs(Tipo de operação,número 01, número 02)

O seu programa deve receber o tipo de operação entrada pelo usuário e garantir que
os dois números entrados serão calculados de acordo.

Exemplo:
Chamada : funçãoCalculadora("Multiplicação", 2, 2)
Saída : "A calculadora executou a operação de Multiplicação e retornou o valor 4"

Será necessário criar pelo menos as quatro operações básicas da matemática(
    multiplicação,
    divisão,
    subtração e
    adição
)

Pontuação bônus: Criar mais operações matemáticas
Pontuação bônus: Criar uma função separada para cada operação matemática.

*/
var Result = 0
function Calculadora(n1, n2, operation) {
    if (operation == "multiplication"){
            Result = n1 * n2}
    if (operation == "division"){
             Result = n1 / n2}
    if (operation == "sum"){
            Result = n1 + n2}
    if (operation == "subtration"){
            Result = n1 - n2}

return Result}


/* Questão 02 (Valendo uma pontuação maior)


Questão OBI(Olimpíada Brasileira de Matemática - 2012, Fase 2, Nível Junior)

João Deseja fazer bolos para seus amigos usando uma receita que indica que devem ser
usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa
ele tem A xícaras de trigo, B ovos e C colheres de sopa de leite. João não tem muita
prática com a cozinha e portanto ele só se arriscará a fazer medidas exatas da receita
de bolo (por exemplo, se ele tiver material suficiente para
fazer mais do que 2 e menos do que 3 bolos, ele far´a somente 2 bolos). Sabendo disso,
ajude João escrevendo uma função que determine qual a quantidade máxima de bolos que
ele consegue fazer
Entrada: Os Parâmetros de entrada da função são três números Inteiros A, B e C, indicando
respectivamente o número de xícaras de farinha de trigo, o núimero de ovos e o número de
colheres de sopa de leite que João tem em Casa

Saída: Retornar a quantidade máxima de bolos
entrada : 4,6,10 saída: 2
ebtrada 4, 6, 9 saída : 1
*/

function calculabolo (farinha, ovo, leite){
var qtfarinha = parseint (farinha/2);
var qtovo = paseint (ovo/2);
var qtleite = parseint (leite/5)
mensagemparabolo = ""
if(qtfarinha == qtovo == qtleite){
    mensagemparabolo = qtleite}
if(qtleite <= qtovo && qtleite <= qtfarinha){
    mensagemparabolo = qtleite}
if(qtfarinha <= qtovo && qtfarinha <= qtleite){
    mensagemparabolo = qtfarinha}
if(qtovo <= qtfarinha && qtovo <= qtleite){
    mensagemparabolo = qtovo}
 alert('a quantidade de bolo é:' $ {mensagemparabolo})
}