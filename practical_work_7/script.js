function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
console.log(Triangular()); 
console.log(Triangular(4, 7, 12)); 
console.log(Triangular(9, 12, 15));

function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}

const PiMultiply1 = PiMultiplier(2);
const PiMultiply2 = PiMultiplier(2 / 3);
const PiDivided = PiMultiplier(1 / 2);

console.log(PiMultiply1());
console.log(PiMultiply2());
console.log(PiDivided());


function Painter(color) {
	return function (obj) {
		if (obj.type) {
			console.log(`Color: ${color}, Type: ${obj.type}`);
		}
		else {
			console.log(`Color: ${color}, No 'type' property occurred!`);
		}
	};
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");


let object1 = { 
    maxSpeed: 280, 
    type: 'Sportcar', 
    color: 'magenta', 
};

let object2 = { 
    type: 'Truck', 
    avg_speed: 90, 
    load_capacity: 2400,
};

let object3 = { 
    maxSpeed: 180, 
    color: 'purple', 
    isCar: true,
};

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
