var arr = [];
for (var i = 0; i < 3; i++) {
    var map = new Map();
    map.set("k1", i * 10 + 1);
    map.set("k2", i * 10 + 2);
    map.set("k3", i * 10 + 3);
    arr.push(map);
}
console.log("arr:\n" + arr);
var json = JSON.stringify(arr);
console.log("json:\n" + json);

var map2 = new Map();
map2.set("kk1", "AA");
map2.set("kk2", "BB");
map2.set("kk3", "CC");
let obj = {}
for (let [k, v] in map2) {
    obj[k] = v
}
var json2 = JSON.stringify(obj);
console.log("json2:\n" + json2);
