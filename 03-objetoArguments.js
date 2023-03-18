function sum(n1, n2) {
    // console.log(typeof arguments);
    // console.log(arguments);
    
    let res = 0

    for (const n of arguments) {
        res += n
    }

    return res
}

console.log(sum(1, 1, 3, 10, 4, 1, 3, 4));

