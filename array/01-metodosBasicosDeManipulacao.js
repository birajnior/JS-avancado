let people = ["Felipe", "André", "Paulo", "Jhonny", "Marcelo"]

// 0 -> n
// 5 elementos = people.length

/*
Retornar elementos específicos de um array
console.log(people[2]);
console.log(people[people.length - 1]);
*/

/* 
Retornar "fatias de um array"
console.log(people.slice(2));
console.log(people.slice(1, 3));
*/


// Adicionar novos elementos no array (início e fim)
people.unshift("Weverton") // Adiciona no início
people.push("Júnior") // Adiciona no final
console.log(people);


// Remover elementos do array (início e fim)
people.pop() // remove elementos do fim e retorna o elemento removido
people.shift() // remove elementos do início e retorna o elemento removido
console.log(people);

// Remover "fatias ded um array
people.splice(1, 2)
console.log(people);

// Localizar elementos
let index = people.indexOf("Jhonny")
people.splice(index, 1)
console.log(people);
