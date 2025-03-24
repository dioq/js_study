import http from 'http';

function get_test() {
    const options = {
        hostname: '127.0.0.1',
        port: 8090,
        path: '/get?name=Lily',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const req = http.request(options, (res) => {
        var data = '';

        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        res.on('end', () => {
            console.log(JSON.parse(data));
        });
    });

    req.on('error', (error) => {
        console.error(`Problem with request: ${error.message}`);
    });

    // End the request
    req.end();
}

function post_test() {
    let body = "{\"name\": \"JOJO\", \"age\": 25}"

    const options = {
        hostname: '127.0.0.1',
        port: 8090,
        path: '/post',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': body.length
        }
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(data);
        });
    });

    req.on('error', (error) => {
        console.error(`Problem with request: ${error.message}`);
    });

    req.write(body);
    req.end();
}

// get_test();
post_test();
