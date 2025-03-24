// var fetch = require('node-fetch');
const fetch = require('node-fetch');

function get_test() {
    let url = "http://127.0.0.1:8090/get?name=Geek";
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function post_test() {
    let xhr = new XMLHttpRequest();
    url = "http://127.0.0.1:8090/post";
    body = "{\"name\": \"JOJO\", \"age\": 25}"
    xhr.open("post", url, true);
    xhr.send(body);
    // 监听 xhr 事件以获取响应
    xhr.onload = function () {
        if (xhr.status != 200) { // 分析响应的 HTTP 状态
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { // 显示结果
            // response 是服务器响应
            console.log(xhr.response.length)
            console.log(xhr.responseText)
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}
function readyStateTest() {
    let xhr = new XMLHttpRequest();
    url = "http://127.0.0.1:8090/get";
    xhr.open("get", url, true);
    xhr.send();
    // 监听 xhr 事件以获取响应
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.response.length)
            console.log(xhr.responseText)
        }
    };
}

// get_test();
// 发起 GET 请求
fetch('http://127.0.0.1:8090/get?name=Geek')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
