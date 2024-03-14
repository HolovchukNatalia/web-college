class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат — чотирикутник з рівними сторонами і прямими кутами.");
    }

    length() {
        console.log("Довжина всіх сторін:", this.a * 4);
    }

    square() {
        console.log("Площа:", this.a ** 2);
    }

    info() {
        console.log("Квадрат:");
        console.log("Довжина сторони:", this.a);
        console.log("Довжина всіх сторін:", this.a * 4);
        console.log("Площа знаходиться за формулою:", this.a ** 2);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник — чотирикутник, протилежні сторони якого мають однакову довжину та рівні кути.");
    }

    length() {
        console.log("Довжина всіх сторін:", (this.a + this.b) * 2);
    }

    square() {
        console.log("Площа прямокутника:", this.a * this.b);
    }

    info() {
        console.log("Прямокутник:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Довжина всіх сторін:", (this.a + this.b) * 2);
        console.log("Площа прямокутника:", this.a * this.b);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб — чотирикутник, у якого всі сторони однакові за довжиною та протилежні кути.");
    }

    length() {
        console.log("Довжина всіх сторін:", this.a * 4);
    }

    square() {
        console.log("Площа ромба:", this.a ** 2 * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Ромб:");
        console.log("Довжина сторони:", this.a);
        console.log("Довжина всіх сторін:", this.a * 4);
        console.log("Площа ромба:", this.a ** 2 * Math.sin(this.alpha * Math.PI / 180));
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм — чотирикутник, протилежні сторони якого паралельні й мають однакову довжину.");
    }

    length() {
        console.log("Довжина всіх сторін:", (this.a + this.b) * 2);
    }

    square() {
        console.log("Площа паралелограма:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Паралелограм:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Довжина всіх сторін:", (this.a + this.b) * 2);
        console.log("Площа паралелограма:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));
    }

    // Getters and setters for properties not present in Rectangle or Rhombus
    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObj = new Square(5);
const rectangleObj = new Rectangle(4, 6);
const rhombusObj = new Rhombus(5, 60, 120);
const parallelogramObj = new Parallelogram(4, 6, 60, 120);

squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();
