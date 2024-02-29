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
    b = b || 2;
    n = n || 3;
    return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 3) {
    return MyMathPower(b, n);
}

function TestAllFunctions() {
    MyMathPowerDefault1(2, 5);
    MyMathPowerDefault1(4);
    MyMathPowerDefault1(null, 5);
    MyMathPowerDefault1();
    MyMathPowerDefault2(4, 2);
    MyMathPowerDefault2(3);
    MyMathPowerDefault2(null, 3);
    MyMathPowerDefault2();
}
TestAllFunctions();
