function contaDias(idade) {
    if (idade <= 0) {
        console.log("Erro: numero deve ser maior que '0'")
    } else {
        console.log(idade*365, "dias")
    }
}
contaDias(17)