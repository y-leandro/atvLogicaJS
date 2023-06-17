function soma(num) {
    let nums = 0;

    for (let n = 0; n < num.length; n++){
        nums += num[n];
    }
    return nums;
}

console.log(soma([1, 2, 3, 4]))