# Lógica com Java Script <img src="https://media3.giphy.com/media/Tgxr8pn069Sf7mgv0e/giphy.gif" width="30">

1. Crie uma função que recebe 2 números como argumento e retorne se o primeiro é maior ou igual ao segundo.

```js
function verifNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1 +": o primeiro é maior");
    }
    else {
        console.log(num2 +": o segundo é maior");
    }
}

verifNum(2,4)
```
##
2. Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie uma validação para não permitir número negativo, e quando tiver retorna uma mensagem de erro.

```js
function contaDias(idade) {
    if (idade <= 0) {
        console.log("Erro: numero deve ser maior que '0'")
    } else {
        console.log(idade*365, "dias")
    }
}
contaDias(17)
```
##
3. Crie uma função que receba número de 1 a 12 e retorne o mês correspondente.

```js
const mes = "Mes"

function verMes (mes) {
    switch (mes) {
        case 1: 
        mes = "Janeiro"
        break;
        case 2: 
        mes = "Fevereiro"
        break;
        case 3: 
        mes = "Março"
        break;
        case 4: 
        mes = "Abril"
        break;
        case 5: 
        mes = "Maio"
        break;
        case 6: 
        mes = "Junho"
        break;
        case 7: 
        mes = "Julho"
        break;
        case 8: 
        mes = "Agosto"
        break;
        case 9: 
        mes = "Setembro"
        break;
        case 10: 
        mes = "Outubro"
        break;
        case 11: 
        mes = "Novembro"
        break;
        case 12: 
        mes = "Dezembro"
        break;
        default: 
        mes = "Erro"
        break;
    }
    console.log(mes)
}

verMes(11)
```
##
4. Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso. Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso.

```js
function inverte(contrario) {
    
    if (typeof(contrario) == 'boolean') {
        if (contrario == false) {
            return true
        }
        return false
    } 

    else 
    if (typeof(contrario) == 'number') {
        contrario = contrario * (-1)
        return contrario 
    } 
    
    else {
        return "Booelano ou Número esperados, mas o parâmetro é do tipo "+typeof(isso)
    } 
}

console.log(inverte('azul'))
```
##
5. Escreva uma função que recebe dois números inteiros não negativos e realize a
multiplicação deles. Porém não pode utilizar o operador de multiplicação.

```js
function multiplica(num1, num2) {
    let n2 = 0;
    for (let n = 0; n < num1; n++){
        n2 = n2 + num2;
    }
    return n2
}
console.log(multiplica(4,7))
```
##
6. Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento
que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
Um array será retornado.

```js
function multiplica(plvr, num) {
    let array = []

    for (let n = 0; n < num; n++){
        array.push(plvr)
    }
    return array
}
console.log(multiplica("leandro",5))
```
##
7. Crie uma função que recebe um array de elementos e retorne um array somente
com os números presentes no array recebido como parâmetro.

```js
function sonumero(plvr) {
    let array = []

    for (let n = 0; n < plvr.length; n++){
        if (typeof plvr[n] == 'number') {
            array.push(plvr[n])
        }
    }
    return array
}
console.log(JSON.stringify(sonumero(["leandro", 12, "lele", 11, 10])))
```
##
8. Escreva uma função que recebe um array de números e retorna a soma de todos os
números desse array.

```js
function soma(num) {
    let nums = 0;

    for (let n = 0; n < num.length; n++){
        nums += num[n];
    }
    return nums;
}

console.log(soma([1, 2, 3, 4]))
```
##
9. Crie uma função que recebe um array de números e retorna o segundo maior
número presente nesse array.

```js
function sgmaior(num) {
    if (num.length < 2){
        return 'Números insuficientes'
    }

    let maior = Math.max(num[0], num[1]);
    let sgMaior = Math.min(num[0], num[1]);

    for (let i = 2; i < num.length; i++) {
        if (num[i] > maior) {
            sgMaior = maior;
            maior = num[i];
        } else if (num[i] > sgMaior) {
            sgMaior = num[i];
        }
    }

return sgMaior;
}


console.log(sgmaior([2, 1, 3, 10]))
```
##
10. Crie uma função que recebe um objeto com os estudantes e suas notas. as notas de
cada estudante estarão num array. Calcule a média da nota de cada aluno e retorne
um objeto com os atributos nome e média, que indica o aluno que tem o melhor
desempenho nas notas.

```js
function melhoresAlunos(alunos){
    let mAluno = null;
    let mMedia = 0;

    for (const aluno in alunos){
        const notas = alunos[aluno];
        const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

        if (media > mMedia) {
            mAluno = aluno;
            mMedia = media;
        }
    }

    return { nome: mAluno, media: mMedia };

}

const total = melhoresAlunos({
    Leandro: [9, 8.7, 7.3, 9],
    Gabriel: [6.4, 9.5, 8, 9],
    Nicolas: [7.8, 8, 8.4, 7],
});

console.log(total);
```
