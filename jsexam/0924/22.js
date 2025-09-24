function work(callback) {
    console.log("work() start");

    setTimeout(() => {
        console.log("setTimeout() start");
        console.log("setTimeout() end");
        callback(); // 추가됨
    }, 1000);

}

work(() => {
    console.log("work() end"); // 바깥이 아니라 "콜백"으로 전달
});


