let car1 = new Object();
car1.color = "pink";
car1.maxSpeed = 240;
car1.driver = new Object();
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver.name = "Natalia Holovchuk";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.drive = function () {
    console.log("I am not driving at night");
}
car1.drive();

let car2 = new Object();
car2.color = "purpule";
car2.maxSpeed = 180;
car2.driver = new Object();
car2.tuning = false;
car2["number of accidents"] = 2;

car2.driver.name = "Natalia Holovchuk";
car2.driver.category = "B";
car2.driver["personal limitations"] = null;
car2.drive = function () {
    console.log("I can drive anytime");
}
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        } else {
            console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? 
            "drives at night" : "does not drive at night"} 
            and has ${this.driver.experience} years of experience.`);
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
        this.driver = {
            name,
            nightDriving,
            experience
        };
    }

let firstTruck = new Truck("pink", 230, 90, "BMW", "Ford");
let secondTruck = new Truck("purpule", 150, 75, "Mercedes", "Lanos");
firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Natalia", true, 3); 
secondTruck.AssignDriver("Zhenia", false, 8);

console.log(firstTruck);
console.log(secondTruck);
firstTruck.trip();
secondTruck.trip();
