/* RESPOSTA AQUI 👇 */

/* Vamos trabalhar mais desafios de programação nessa aula */

/* Questão 01 

Cria uma função para ajudar um Parque de Diversões saber se uma pessoa com determinada 
altura pode entrar em determinado brinquedo

Montanha-russa :  Acima de 1,60
Roda gidante : Acima de 1,50 
Carrinho bate-bate: Acima de 1,40
Trem fantasma : Acima de 1,30
Carrossel : Livre

Exemplo:
    Entrada : 1,55
    Saída:
        Montanha-Russa : Não pode Entrar
        Roda Gigante: Liberado
        Carrinho bate-bate: Liberado
        Trem Fantasma : Liberado
        Carrossel : Liberado
*/


function calculaAltura(altura = 0) {
    var alturamontanharussa = altura;
    var alturaAceita1 = ""

    if (alturamontanharussa => 1.60) {
        alturaAceita1 = "Liberado";
    } else {
        alturaAceita1 = "Não pode entrar";
    }
    var alturarodagigante = altura

    if (alturarodagigante => 1.50) {
        alturaAceita2 = "liberado";
    } else {
        alturaAceita2 = "Não pode entrar";
    }
    var alturacarrinho = altura

    if (alturacarrinho => 1.40) {
        alturaAceita3 = "liberado";
    } else {
        alturaceita3 = "Não pode entrar";
    }
    var alturatrem = altura

    if (alturatrem => 1.50) {
        alturaAceita4 = "liberado";
    } else {
        alturaceita4 = "Não pode entrar";
    }
    var alturacarrosel = altura

    if (alturacarrosel => 0) {
        alturaAceita5 = "liberado";
    } else {
        alturaAceita5 = "Não pode entrar";
    } var alturaAceita = ['montanha-russa:' + alturaAceita1, 'rodagigante:' + alturaAceita2, 'carrinho bate-bate:' + alturaAceita3, 'trem fantasma:' + alturaAceita4, 'carrossel:' + alturaAceita5]
    return (alturaAceita)
}
/* Questão 02

Crie um programa para auxiliar um cinema saber se o cliente possui direito à meia entrada.
Seu programa deverá receber três variaveis:
    idade do cliente
    possuí carteira de estudande?(Aceitar apenas true ou false)
    dia da semana(As segundas-feiras todos pagam meia)

Lembrando que um cliente paga meia se for maior de 65 anos, ou menor de 21 anos, ou é estudante.
Tente prever também condições absurdas, como uma pessoa e 65 anos estudante.
*/
/*
function meiaCinema(idade = 0, carteira = true | false, Segunda = true | false) {
    var mensagemcinema = ""
    if (Segunda = true) {
        mensagemcinema = " todos pagam meia entrada"
    }
    else { mensagemcinema = "Paga inteira" }
    if (carteira = true) {
        mensagemcinema = " Estudante paga meia entrada"
    }
    else { mensagemcinema = "Paga inteira" }
    if (idade >= 65 | idade <= 21) {
        mensagemcinema = "Paga meia entrada"
    }
    else { mensagemcinema = "Paga inteira" }

    if (idade >= 21 && carteira = true) {
        mensagemcinema = "Paga meia entrada"
    }

    else { mensagemcinema = "Paga inteira" }
    return mensagemcinema*/



/* Questão 03

Crie uma função que a propria função cria um número aleatório entre 1 e 10. A função receberá
um "chute" do usuário e deverá retornar se acertou o número gerado pelo programa ou não.

Exemplo: 
Entrada = 2
Processamento = O Programa gerou o número 5
Saída = "/ 2 mas o nosso número é 5"

Entrada = 7
Processamento = O programa gerou o número 7
Saída: "Parabéns! Vocẽ entrou com o número 7 e o programa também gerou o número 7"

Para gerar um número aleatório entre 1 e 10, utilize o seguinte código
Math.floor(Math.random() * 10) + 1
*/

function adivinha(chute = 0) {
    var sorteio = Math.floor(Math.random() * 10) + 1
    mensagemsorteio = ""
    if (chute == sorteio) {
        mensagemsorteio = ('Parabéns! Vocẽ entrou com o número: ' + chute + ' e o programa também gerou o número: ' + sorteio)
    } else {
        mensagemsorteio = ('Que pena, você chutou ' + chute + ' mas o nosso número é ' + sorteio)
    }
    return mensagemsorteio
}

/* Questão 04

Crie um programa que lê dois números, verifica se eles estão entre 40 e 60, e por
fim retorna o maior entre os dois número

Exemplo:
Entrada: 45 e 55
Saída : Os números estão entre 40 e 60, e o maior deles é 55

Entrada: 47 e 47
Saída: Os números estão entre 40 e 60, e os dois números são iguais

Entrada: 30 e 50
Saída : Os números não estão entre 40 e 60

*/

function calculaMaior(n1, n2) {
    var limiteinferior = 40
    var limitesuperior = 60
    var mensagem = ""

    if(n1 >= limiteinferior && n1 <= limitesuperior && n2 >= limiteinferior && n2 <= limitesuperior) {
        mensagem = "os numeros estão entre 40 e 60"
    } if (n1 > n2) {
        var maior = n1
        mensagem = 'Os números estão entre ' + limiteinferior + ' e ' + limitesuperior + ' e o maior deles é' + maior
    }if(n2 > n1){
        var maior = n2
        mensagem = 'Os números estão entre ' + limiteinferior + ' e ' + limitesuperior + ' e o maior deles é' + maior
    }if(n1 == n2){
        
        mensagem = 'Os números estão entre ' + limiteinferior + ' e ' + limitesuperior + ' e os dois números são iguais'

return (mensagem)
}

/* Desafio

Procure resolver esse exercício em grupo!

    function adivinha() {

    }

Considere cada mês com 30 dias
cada dia com 24 horas
cada hora com 60 minutos
cada minuto com 60 segundos*/

function idadeplaneta (idade = 0, calculoseg){
var calculoseg = idade * 12 * 30 * 24 * 60 * 60
