let linhas = 10 //gets()
let numeros = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98] //[]
let pares = []
let impares = []

// for(let i = 0; i < valores; i++) {
//     numeros.push(gets())
// }

function classificaNumeros(numeros) {
    for (const numero of numeros) {
        if(numero % 2 === 0) {
            pares.push(numero)
        } else {
            impares.push(numero)
        }
    }
}

function ordenaNumeros(array, mode) {
    if(mode === `crescente`) {
        return array.sort((a, b) => a - b)
    } else {
        return array.sort((a, b) => b - a)
    }
}

classificaNumeros(numeros)

pares = ordenaNumeros(pares, `crescente`)

impares = ordenaNumeros(impares, `decrescente`)

numeros = pares.concat(impares)

for (const numero of numeros) {
    console.log(numero)
}