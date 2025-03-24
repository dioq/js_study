import fetch from 'node-fetch';

function get_test() {
  fetch('http://127.0.0.1:8090/get?name=Geek')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function post_test() {
  // 发起 POST 请求
  let body = "{\"name\": \"JOJO\", \"age\": 25}"

  fetch('http://127.0.0.1:8090/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// get_test();
post_test();
