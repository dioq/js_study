function s1(msg) {
    let num = 0;
    // 定时器   在指定的时间间隔内重复执行一个函数
    setInterval(function () {
        console.log(msg + "  num = " + num);
        num++;
    }, 1000);
}

//参数n为休眠时间，单位为毫秒:
function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
    // console.log('休眠后：' + new Date().getTime());
}

function s2() {
    for (var i = 0; i < 100; i++) {
        sleep(5 * 1000);
        console.log("num = " + i);
    }
}

// s1("aaa");
s2();
