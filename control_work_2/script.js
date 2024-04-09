let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 1); // генеруємо рандомний масив))
}

array.sort(function(a, b) {
    return b - a;
});
console.log(array);
 
let sortedArrayDiv = document.getElementById("massif");
let sortedArrayString = "<p>Масив за спаданням: " + array.join(", ") + "</p>";
sortedArrayDiv.innerHTML = sortedArrayString;

function generateDiv() {
    let width = document.getElementById("widthSelect").value;
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.width = width + "px";
    div.style.height = "30px";

    let generatedDiv = document.getElementById("generatedDiv");
    generatedDiv.innerHTML = "";
    generatedDiv.appendChild(div);
     
    function moveBlockUp() {
        let generatedDiv = document.getElementById("generatedDiv");
        let currentPosition = parseInt(generatedDiv.style.top) || 0;
        generatedDiv.style.top = (currentPosition - 20) + "px";
    }
    
    function moveBlockDown() {
        let generatedDiv = document.getElementById("generatedDiv");
        let currentPosition = parseInt(generatedDiv.style.top) || 0;
        generatedDiv.style.top = (currentPosition + 20) + "px";
    }
}



