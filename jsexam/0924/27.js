function increaseAndPrint(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        resolve(increased); // 결과를 resolve로 넘김
        }, 1000);
    });
}

increaseAndPrint(0)
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n))
    .then((n) => increaseAndPrint(n))
    .then(() => {
        console.log("끝!");
    });