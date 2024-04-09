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
    div.style.position = "relative";

    let generatedDiv = document.getElementById("generatedDiv");
    generatedDiv.innerHTML = "";
    generatedDiv.appendChild(div);
    document.getElementById("top").addEventListener("click", moveBlockUp);
    document.getElementById("down").addEventListener("click", moveBlockDown);
     
    function moveBlockUp() {
        let currentPosition = parseInt(div.style.top) || 0;
        div.style.top = (currentPosition - 20) + "px";
    }
    
    function moveBlockDown() {
        let currentPosition = parseInt(div.style.top) || 0;
        div.style.top = (currentPosition + 20) + "px";
    }
}



