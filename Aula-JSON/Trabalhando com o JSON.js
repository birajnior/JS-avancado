
const person = {
    name: "Felipe Fontoura",
    age: 40,
    address: {
        street: "Rua Central",
        number: "100",
        complement: "",
        district: "Centro",
        city: "São Paulo",
        state: "São Paulo",
    },
}

// JSON.stringify transforma o objeto para string.
const personStr = JSON.stringify(person)
console.log(typeof personStr)

// {
//   "name": "Felipe Fontoura",
//   "age": 40,
//   "address": {
//     "street": "Rua Central",
//     "number": "100",
//     "complement": "",
//     "district": "Centro",
//     "city": "São Paulo",
//     "state": "São Paulo"
//   }
// }

// JSON.parse transforma um JSON em um NOVO objeto.
const personObj = JSON.parse(personStr)
console.log(typeof personObj)
