var utils = require("./codeutils.js");

function hex_test() {
    let test_str = "5308f5a2a893cd444946cab7aec4ab2eb4821aeb";
    let byteArray = utils.hexDecode(test_str);
    console.log("byteArray length:" + byteArray.length);
    let hex_str = utils.hexEncode(byteArray);
    console.log("hex_str:" + hex_str);
}

function utf8_test() {
    let test_str = "This is a test string.";
    let byteArray = utils.utf8Decode(test_str);
    console.log("byteArray length:" + byteArray.length);
    let utf8_str = utils.utf8Encode(byteArray);
    console.log("utf8_str:" + utf8_str);
}

function base64_test() {
    let test_str = "qUxF30y+cD1V8ihk0Yve6Zgtdas=";
    let byteArray = utils.base64Decode(test_str);
    console.log("byteArray length:" + byteArray.length);
    let base64_str = utils.base64Encode(byteArray);
    console.log("base64_str:" + base64_str);
}

hex_test();
utf8_test();
base64_test();
