document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var meal = document.querySelector('input[name="meal"]:checked').value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var foodsArray = Array.from(foods).map(food => food.value);
    var comment = document.getElementById("comment").value;
  
    var result = `${username} (${email}) з’їв на ${meal} ${foodsArray.join(", ")} та залишив такий коментар: "${comment}"`;
  
    document.getElementById("output").innerText = result;
  });