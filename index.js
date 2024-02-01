const getIsDeepEqual = function (object1, object2) {
    if ((object1 instanceof Object) && (object2 instanceof Object)) {
        for (let key in object1) {
            if (!getIsDeepEqual(object1[key], object2[key])) {
                return false;
            }
        }
    }
    if ((object1 instanceof Array) || (object2 instanceof Array)) {
        for (let i = 0; i < object1.length; i++) {
            if (object1.length !== object2.length) {
                return false;
            } else {
                if (object1[i] != object2[i]) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return true;
    }
    if (!(object1 instanceof Object) || !(object2 instanceof Object)) return object1 === object2;
    return true;
}
console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));                                                                                                                                                                                    // true
console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 6 }));                                                                                                                                                                                    // false
console.log(getIsDeepEqual({ a: 1, b: 2, obj: { test: "12" } }, { a: 1, b: 2, obj: { test: "12" } }));                                                                                                                                          // true
console.log(getIsDeepEqual({ at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } }, { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } }));                                                                                                    // true
console.log(getIsDeepEqual({ at: 1, bt: 2, test: [1, 2, 3, { hi: "hi" }], obj: { test: "12" } }, { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello" }], obj: { test: "12" } }));                                                                     // false
console.log(getIsDeepEqual({ at: 1, bt: 2, obj: { test: "12", a: undefined }, test: [1, 2, { test: "12", a: undefined }, 3] }, { at: 1, bt: 2, test: [1, 2, {  a: undefined,test: "12" }, 3], obj: { test: "12", a: undefined } }));            // true                                           // false
