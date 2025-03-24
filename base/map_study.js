function s1() {
    var map = new Map();
    map.set("k1", "v1");
    map.set("k2", "v2");
    map.set("k3", "v3");
    console.log("map:\n" + map);
    var tmp = map.get("k1");
    console.log("value : " + tmp);
}

function s2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        var map = new Map();
        map.set("k1", i * 10 + 1);
        map.set("k2", i * 10 + 2);
        map.set("k3", i * 10 + 3);
        arr.push(map);
    }
    var tmp_map = arr[2];
    var tmp_value = tmp_map.get("k2");
    console.log("arr[2] k2 = " + tmp_value);
}

// s1();
s2();
