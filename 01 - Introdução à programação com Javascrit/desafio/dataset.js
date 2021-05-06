/*var notasAlunosMatriz = [
    ["Alfredo", 10, 08 , 10, 10],
    ["Beatriz", 10, 10, 10, 10],
    ["Carlos", 04, 05, 07, 10],
    ["Daniel", 10, 08, 10, 07],
    ["Elaine", 06,07,06,08],
    ["Francine", 10, 09, 10, 10],
    ["Gustavo", 05,06,06,08],
    ["Heitor", 03, 02, 00, 08],
    ["Iago", 07, 03, 08, 07],
    ["Jonathan", 10, 09, 08, 07],
    ["Kyle", 06, 05, 10, 07],
    ["Matheus", 02, 03, 01, 02],
    ["Nair", 10, 08, 09, 07],
    ["Orlando", 05, 07, 04, 06], 
    ["Peter", 09, 07, 08, 06],
    ["Queiros", 02, 05, 03, 04],
    ["Raimundo", 06, 05, 08, 09],
    ["Suzana", 10, 09, 10, 09],
    ["Thais", 07, 05, 04, 09],
    ["Ursula", 08, 08, 07, 09],
    ["Victoria", 06, 07, 08, 10],
    ["Xuxa", 06, 07, 07, 06],
    ["Zelda", 10,10,10,10],
    ["Wagner", 02, 03, 03, 06],
    ["Yasmin", 06, 07, 05, 08]
];
*/

/* O sistema deverá ser desenvolvido em JavaScript. Não é necessário
desenvolver um interface web. Apenas conter um arquivo .html que chame
o código.
→ A entrada das notas será uma Matriz(também fornecido) com as notas
dos alunos.
→ O Seu código deve retornar ao professor uma lista(vale qualquer tipo,
desde um json até o resultado linha a linha) com o nome do Aluno, sua
média, e se está aprovado ou não
→ Resultado: O Aluno está aprovado; O Aluno deverá fazer a
recuperação e O Aluno está reprovado
→ Deverá também retornar a Última nota dos 30%, a Primeira nota dos 10%
e a média entre os dois valores 
"Turma, nesse ano faremos diferente. Além das 4 provas, teremos uma quinta
prova para aqueles que não alcançarem a nota para passar de ano, que vocês
não irão saber qual é. Iremos separar vocês em 3 grupos esse ano, sendo o
Primeiro grupo o dos aprovados direto, o segundo grupo irá para a
recuperação e o terceiro será automaticamente reprovado. A forma que vamos

Desafio 2
saber qual a nota, de quem passou e quem não passou é dividindo a média das
provas(P1 até a P4 que vocês fizeram e alocando vocês numa distribuição de
frequência que vai acontecer da seguinte forma:*/

var notasAlunosJSON = {
    01:{
        "nome":"Alfredo",
        "notas":{
            01: "10",
            02: "08",
            03: "10",
            04: "10"
        } 
    },
    02:{
        "nome":"Beatriz",
        "notas":{
            01: "07",
            02: "06",
            03: "08",
            04: "07"
        } 
    },
    03:{
        "nome":"Carlos",
        "notas":{
            01: "04",
            02: "05",
            03: "07",
            04: "10"
        } 
    },
    04:{
        "nome":"Daniel",
        "notas" : {
            01: "10",
            02: "08",
            03: "10",
            04: "07"
        }
    },
    05:{
        "nome":"Elaine",
        "notas" : {
            01: "06",
            02: "07",
            03: "06",
            04: "08"
        }
    },
    06:{
        "nome":"Francine",
        "notas" : {
            01: "10",
            02: "09",
            03: "10",
            04: "10"
        }
    },
    07:{
        "nome":"Gustavo",
        "notas" : {
            01: "05",
            02: "06",
            03: "06",
            04: "08"
        }
    },
    08:{
        "nome":"Heitor",
        "notas" : {
            01: "03",
            02: "02",
            03: "00",
            04: "08"
        }
    },
    09: {
        "nome": "Iago",
        "notas" : {
            01: "07",
            02: "03",
            03: "08",
            04: "07"
        }
    },
    10 : {
        "nome": "Jonathan",
        "notas": {
            01: "10",
            02: "09",
            03: "08",
            04: "07"
        }
    },
    11: {
        "nome": "Kyle",
        "notas" : {
            01: "06",
            02: "05",
            03: "10",
            04: "07"
        }
    },
    12: {
        "nome": "Matheus",
        "notas" : {
            01: "02",
            02: "03",
            03: "01",
            04: "02"
        }
    },
    13: {
        "nome": "Nair",
        "notas" : {
            01: "10",
            02: "08",
            03: "09",
            04: "07"
        }
    },
    14: {
        "nome": "Orlando",
        "notas" : {
            01: "05",
            02: "07",
            03: "04",
            04: "06"
        }
    },
    15: {
        "nome": "Peter",
        "notas" : {
            01: "09",
            02: "07",
            03: "08",
            04: "06"
        }
    },
    16: {
        "nome": "Queiros",
        "notas" : {
            01: "02",
            02: "05",
            03: "03",
            04: "04"
        }
    },
    17: {
        "nome": "Raimundo",
        "notas" : {
            01: "06",
            02: "05",
            03: "08",
            04: "09"
        }
    },
    18: {
        "nome": "Suzana",
        "notas" : {
            01: "10",
            02: "09",
            03: "10",
            04: "09"
        }
    },
    20: {
        "nome": "Thais",
        "notas" : {
            01: "07",
            02: "05",
            03: "04",
            04: "09"
        }
    },
    21: {
        "nome": "Ursula",
        "notas" : {
            01: "08",
            02: "08",
            03: "07",
            04: "09"
        }
    },
    22: {
        "nome": "Victoria",
        "notas" : {
            01: "06",
            02: "07",
            03: "08",
            04: "10"
        }
    },
    23: {
        "nome": "Xuxa",
        "notas" : {
            01: "06",
            02: "07",
            03: "07",
            04: "06"
        }
    },
    24: {
        "nome": "Zelda",
        "notas" : {
            01: "10",
            02: "10",
            03: "10",
            04: "10"
        }
    },
    25: {
        "nome": "Wagner",
        "notas" : {
            01: "02",
            02: "03",
            03: "03",
            04: "06"
        }
    },
    26: {
        "nome": "Yasmin",
        "notas" : {
            01: "06",
            02: "07",
            03: "05",
            04: "08"
        }
    },
}  
/*for (var i = 0; i < 4; i++) {
var soma01 = 0
soma01 = notasAlunosJSON [i] + soma01
var media01 = soma01 / 4
console.log(media01)
}*/
function mediaaluno (name) {
    for (var [key, value] of Object.entries(notasAlunosJSON.notas)){
        console.log(key)
        console.log(value)
    }
}