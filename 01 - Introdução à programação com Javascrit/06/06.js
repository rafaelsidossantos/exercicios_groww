/* RESPOSTA AQUI 👇 */

/* Questão 01 
Você foi contratado(a) para trabalhar na NBA, a Liga de Basquete Nacional dos Estados Unidos.
Seu trabalho é desenvolver um programa que calcule a quantidade de pontos numa partida. Para isso, 
você deve criar uma função que receba como parametro as cestas de 2 pontos e as cestas de 3 pontos e retorne
a pontuação final do jogo.

exemplo:

função: retornaPontuacao(1, 1)
saída: 5 pontos

função: retonarPontuacao(3, 3)
Saída: 15 pontos*/
function retornaPontuacao (ponto2 = 0, ponto3 = 0){
    var resultado1 = ponto2 *2
    var resultado2 = ponto3 *3
    var soma = resultado1 + resultado2 
    console.log(`A pontuação final é : ${soma} pontos`)
}
/* Questão 02

O rei do Poker te convidou para criar um programa para ajuda-lo na sua jogatina. A sua ideia é
que você o ajude criando uma função que embarque a sua lógica para cada jogada.

Antes de realizazr qualquer jogada, o rei do Poker avalia as seguintes condições:
Se eu multiplicar a probablidade de ganhar multiplado pelo prêmio, menos o custo de jogar for positivo,
vale a pena entrar no jogo. Se for negativo, retira a aposta.

Crie uma função que receba a probabilidade, o prêmio e o custo de jogar, e retorne true, caso seja positivo e false caso
seja negativo

exemplo:
prob = 0.2
premio = 50
custo = 9

retonaAposta(0.2,50,9)
//processamento 0.2*50-9
saida : true
*/
console.log(`O valor da probabilidade deverá ser entre 0 e 1`)
function devojogar (prob = 0, premio = 0, custo = 0){
    var resposta = (prob*premio) - custo
    var mensagem = ''
    if (resposta >= 0){
        mensagem = 'Jogue!'}
    else{ 
        mensagem = 'Não Jogue'}
    return mensagem
}


/* Questão 03

Um veiculo precisa 10 vezes o total de combustivel para cada quilômetro que queira percorrer. Crie uma função que receba
a quantidade de quilometros e retorne o total de combustivel. 

Importante: Todo carro deve ter sempre, no mínimo 100 litros de gasolina

exemplo: 
entrada: 
calculaCombustivel(16) = 160
calculaCombustivel(3) = 100
*/

function gastocarro (distancia){

    var combustivel = distancia * 10
    var mensagem = ''
        if (distancia>=10){
        mensagem =  (`A quantidade de combustível é ${combustivel} L`)}
        else {
        mensagem =  (`Você deve ter o mínimo de 100L de combustível no carro, mas para essa distância a quantidade de combustível necessária é de ${combustivel}L`) }
    return mensagem
}
    

/* Questão 04

Crie uma função que retorne 1, se entrar com 0 e retorne 0 se entrar com um.

Não será permitido o uso de condicionais, como IF ou Switch

*/

function retorna (a = 0){
while (a < 1){
    a++;
    console.log (1)
}
}while (a == 1){
    console.log (0)
    }

