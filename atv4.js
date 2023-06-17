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
