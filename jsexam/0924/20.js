function work() {
    console.log("work() 1번째 작업 시작");
    
    const start = Date.now();

    for (let index = 0; index < 100000; index++) {}

    const end = Date.now();

    console.log("work() 1번째 작업 끝");
    console.log(end - start + "ms");
}

setTimeout(work, 1000);

console.log("2번째 작업");

function nextWork() {
    console.log("2번째 작업 중..");
}

nextWork();

console.log("3번째 작업");
console.log("4번째 작업");

console.log("작업 끝");