let casos = 9 //gets()
let segundo = ``
let uniformes = []
let texto = [   
    [`Maria Jose`, `branco P`],
    [`Mangojata Mancuda`, `vermelho P`],
    [`Cezar Torres Mo`, `branco P`],
    [`Baka Lhau`, `vermelho P`],
    [`JuJu Mentina`, `branco M`],
    [`Amaro Dinha`, `vermelho P`],
    [`Adabi Finho`, `branco G`],
    [`Severina Rigudinha`, `branco G`],
    [`Carlos Chade Losna`, `vermelho P`]    
] //[]

for(let i = 0; i < casos; i++) {
    let item = {}
    item.nome = texto[i][0]//gets()
    segundo = texto[i][1] //gets()
    item.cor = segundo.split(` `)[0]
    item.tamanho = segundo.split(` `)[1]
    uniformes.push(item)
}

function compareValues(key, order = `asc`) {
    
    return function innerSort(a, b) {
        
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === `string`)
            ? a[key].toUpperCase() : a[key]

        const varB = (typeof b[key] === `string`)
            ? b[key].toUpperCase() : b[key]

        let comparison = 0

        if(varA > varB) {
            comparison = 1
        } else if(varA < varB) {
            comparison = -1
        }

        return (order === `desc`) ? (comparison * -1) : comparison
    }
}

uniformes.sort(compareValues(`nome`))
    .sort(compareValues(`tamanho`, `desc`))
    .sort(compareValues(`cor`))

for (const uniforme of uniformes) {
    console.log(`${uniforme.cor} ${uniforme.tamanho} ${uniforme.nome}`)
}
