let casos = 2 //gets()
let listas = [`carne laranja suco picles laranja picles`, `laranja pera laranja pera pera`] //[]

// for(let i = 0; i < casos; i++) {
//     listas.push(gets())
// }

function ajustar(array) {
    return array.sort().filter((a, b) => array.indexOf(a) === b)
}

for (const item of listas) {
    console.log(ajustar(item.split(` `)).join(` `))
}