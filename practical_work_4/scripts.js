// b - основа степеня
// r - степінь 
// n - показник степеня

function MyMathPower(b, n) {
    let r = b;
    for (let i = 1; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}

function MyMathPowerDefault1(b, n) {
    b = b || 7;
    n = n || 4;
    return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 7, n = 4) {
    return MyMathPower(b, n);
}

function TestAllFunctions() {
    MyMathPowerDefault1(2, 6);
    MyMathPowerDefault1(4);
    MyMathPowerDefault1(null, 5);
    MyMathPowerDefault1(7);
    MyMathPowerDefault2(7, 2);
    MyMathPowerDefault2(2);
    MyMathPowerDefault2(null, 3);
    MyMathPowerDefault2();
}
TestAllFunctions();
