
const joinDict = function (d, input) {
    for (var i in input) {
        var datum = input[i];
        d[i] = datum;
    }
    return d;
}

test('join dict', () => {
    let someDict = { a: "a", b: "b" }
    someDict = joinDict(someDict, { a: "aa", c: "c" })
    for (let i in someDict) {
        console.log(someDict[i]);
    }
});