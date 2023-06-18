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
