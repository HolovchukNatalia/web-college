// 2 варіант

function TriangleArea(base = 7, height = 3) {
    const area = 0.5 * base * height;
    console.log(`Площа трикутника з основою ${base} і висотою ${height} дорівнює ${area}`);
    return area;
}

const customBase = 3;
const customHeight = 6;
const customArea = TriangleArea(customBase, customHeight);

const defaultArea = TriangleArea();



function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasFamily) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.hasFamily = hasFamily;
}
let boat = new Boat("pink", 270, 24, "BMW", "USA");
console.log(boat);

boat.AssignCaptain("Natalia Holovchuk", 18, true);
console.log(boat);

class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    set setMajorRadius(majorRadius) {
        this.majorRadius = majorRadius;
    }
}
let simpleCircle = new SimpleCircle(7);
console.log(simpleCircle);


class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this._minorRadius = minorRadius; 
    }

    static square(majorRadius, minorRadius) {
        return Math.PI * majorRadius * minorRadius;
    }

    square() {
        return Math.PI * this.majorRadius * this._minorRadius; 
    }
}

let simpleEllipse = new SimpleEllipse(7, 13);
console.log(simpleEllipse);
console.log(simpleEllipse.square());


function SubGenerator(a) {
    return function (b) {
        return a - b;
    }
}

let sub10 = SubGenerator(10);
let sub23 = SubGenerator(23);

console.log(sub10(7));
console.log(sub23(24));