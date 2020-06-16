Exercise Módule 01 - Manipulate a DOM ✌️
Task - 1
Create a button that when clicked creates a new screen element shaped like a red square 100px tall and wide. Whenever the button is clicked a new square should appear on the screen.

Task - 2
Using the result of the first challenge, every time the user hovers over some square change its color to a random color generated by the function below:

function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
Task - 3
From the following vector:

var names = ["Diego", "Gabriel", "Lucas"];
Fill in a list in the HTML with the items as follows:

● Diego ● Gabriel ● Lucas

Task - 4
Following the result of the previous exercise add a screen input and a button as follows:

<input type="text" name="name">
<button onClick="add()">Add</button>
When you click the button, the add() function must be triggered by adding a new item to the list of names based on the name filled in the input and rendering the new item on screen together with the other previous items. In addition, the contents of the input should be deleted after the click

Exercises Module 02 - JS Asynchronous :
Task -1
Create a role that is the age of a user and returns a Promise that after 2 seconds will return whether or not the user is older than 18. If the user is over 18 years of age the result should fall in the other way, in the .then,.catch

 // return whether the user is older than 18 or not.
}
checkAge(20)
 .then(function() {
 console.log("Older than 18");
 })
 .catch(function() {
 console.log("less than 18");
 });