let set = [1, 2, 3, 4, 5]

let [n1, n2] = set

console.log("n1", n2);
console.log("n2", n2);

function myFunction() {
    const x = 10
    const y = 400

    return [x, y]
}

const myArray = myFunction()
console.log(myArray[0]);
console.log(myArray[1]);

const [x, y] = myFunction()
console.log("x", x);
console.log("y", y);