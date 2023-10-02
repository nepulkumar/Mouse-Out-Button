//mouse out button
const boxElement = document.getElementById("box");

//adding event listener into mouse out button

boxElement.addEventListener("mouseout", function() {
    alert("Now you are in the safe zone (mouseout working properly)");

});