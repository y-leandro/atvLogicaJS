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

