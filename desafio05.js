let leituras = [
    3,
    `Fernanda 7`, // Vencedor
    `Fernando 9`,
    `Gustavo 11`,
    5,
    `Maria 7`,
    `Pedro 9`, // Vencedor
    `Joao_Vitor 5`,
    `Isabel 12`,
    `Laura 8`,
    3,
    `Maria 4`,
    `Pedro 3`, // Vencedor
    `Joao 2`,
    5,
    `Maria 5`,
    `Pedro 2`,
    `Joao 5`, // Vencedor
    `Isabel 12`,
    `Luana 8`,
    5,
    `Maria 7`,
    `Pedro 9`, // Vencedor
    `Joao_Vitor 5`,
    `Isabel 12`,
    `Laura 8`,
    6,
    `Maria 5`,
    `Kaio 4`,
    `Pedro 8`,
    `Joao 1`, // Vencedor
    `Isabel 2`,
    `Luana 10`,
    5,
    `Maria 5`,
    `Pedro 2`,
    `Joao 5`, // Vencedor
    `Isabel 2`,
    `Luana 8`,
    0
]

function sentido(index) {
    if (index % 2 === 0) {
        return `cw`
    } else {
        return `ccw`
    }
}

function setKey(arraySize, index, sentido) {
    let key = 0

    if (sentido === `cw`) {
        if (index < arraySize) {
            key = index - 1
        } else if (index > arraySize && index % arraySize > 0) {
                key = (index % arraySize) - 1
        } else {
            key = arraySize - 1
        }
    } else {
        if(index < arraySize) {
            key = arraySize - index
        } else if(index > arraySize) {
            key = arraySize - (index % arraySize)
        } 
    }

    //console.log(`Size: ${arraySize}, Index: ${index}, MOD: ${index % arraySize}, key: ${key}`)
    return key
}

function reorderArray(array, index) {

    array = array.slice(index).concat(array.slice(0, index))
    //console.log(`Array reordenado`, alunos)

    return array
}

let counter = 1
let nroAlunos = parseInt(leituras[0]/*gets()*/)

while(nroAlunos > 0) {

    let aluno = ``
    let index = 0
    let totalAlunos = 0
    let alunos = []
    let indexAlunos = 0

    totalAlunos = counter + nroAlunos

    for (counter; counter < totalAlunos; counter++) {
        aluno = leituras[counter].split(` `) //gets().split(` `)
        alunos[indexAlunos === 0 ? indexAlunos : nroAlunos - indexAlunos] = {
            nome: aluno[0],
            valor: aluno[1]
        }
        indexAlunos++
    }

    //console.log(alunos) // Remover

    // Começa o jogo
    index = alunos[0].valor

    if(index % 2 === 0) {
        alunos = reorderArray(alunos, 1)
        console.log(`Novo array:`, alunos)
    }
    
    while (alunos.length > 1) {

        alunos = reorderArray(alunos, setKey(alunos.length, index, sentido(index)))

        index = alunos[0].valor

        // remove o primeiro item
        aluno = alunos.shift()
        //console.log(`Removeu: ${JSON.stringify(aluno)}`)

        // console.log(`Novo array:`, alunos)
    }

    nroAlunos = parseInt(leituras[counter] /*gets()*/)
    counter++

    console.log(`Vencedor(a): ${alunos[0].nome}`)
}
