function testPromise() {
    console.log("sync started");

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p1 finished");
            resolve(1)
        }, 1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2 finished");
            resolve(2)
        }, 2000)
    })

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p3 finished");
            // resolve(3)
            reject(3)
        }, 3000)
    })

    // p1.then(() => {
    //     p2.then(() => {
    //         p3.then(() => {
    //             // resultado final depois de chamar as 2 promises
    //         })
    //     })
    // })

    Promise.all([p1, p2, p3]).then((values) => {
        console.log("Promises values", values);
    }).catch(()=>{
        console.error("promises erro")
    })

    console.log("sync finished");

}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", testPromise)
