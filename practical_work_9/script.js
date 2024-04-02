const arr1 = [
    1,
    5,
    9,
    4,
    { name: "Natalia", mark: 100, subject: "JS" },
    function (num) {
        return num ** 4;
    },
    function (object) {
        console.log(object.name);
    },
    -6,
    14,
];

arr1.forEach(function(element) {
    console.log(element);
});

arr1.splice(1, 1, 8);
arr1.splice(+1, 0, "Hello");
const arr2 = arr1.slice(6, 8);

arr2.forEach(function(element) {
    console.log(element);
});

const arr3 = arr1.slice(0, 3);

arr3.forEach(function(element) {
    console.log(element);
});

const arr3Reversed = arr3.reverse();

arr3Reversed.forEach(function(element) {
    console.log(element);
});

console.log(arr1.indexOf(-6));

console.log(arr1.filter((elem) => elem > 4));

arr1[7](arr1[5]);

console.log(arr1[6](-6));

for (const index in arr1) {
    console.log(arr1[index]);
}

for (const key in arr1[5]) {
    console.log(arr1[5][key]);
}

for (const elem of arr1) {
    console.log(elem);
}

arr1.version = "1.0.0";

for (const index in arr1) {
    console.log(arr1[index]);
}

for (const element of arr1) {
    console.log(element);
}

const Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior",
};

const Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle",
};

const Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee",
};

const map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log(map1.get("Ivanko"));

console.log(map1.get("Volodyk"));

for (const key of map1.keys()) {
    console.log(key);
}

map1.delete("Mychajlyk");

for (const person of map1.values()) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}

const set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);

const Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior",
};

console.log(set1.has(Antypko));

console.log(set1.has(Mychajlyk));

for (const element of set1) {
    console.log(element);
}

set1.delete(Volodyk);

for (const person of set1) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}