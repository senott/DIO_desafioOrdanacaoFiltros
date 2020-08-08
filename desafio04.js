let tests = 3 //gets()
let nbrClients = 0

let cases = [
    [3, `100 80 90`],
    [4, `100 120 30 50`],
    [4, `100 90 30 25`]
]

for(let i = 0; i < tests; i++) {

    nbrClients = cases[i][0] //gets()

    let clients = []

    let counter = 0

    let elements = cases[i][1].split(` `)/*gets().split(` `)*/

    for (const element of elements) {
        clients.push(element)    
    }
    
    clientsBefore = [...clients]

    clients.sort((a, b) => b - a)

    for (const client of clients) {
        if(clients.indexOf(client) === clientsBefore.indexOf(client)) {
            counter++
        }
    }
    console.log(counter)
}