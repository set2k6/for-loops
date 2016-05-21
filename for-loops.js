// ############## for loops #####################

/*Increment by 10

Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

Example output:

Current value is 5

Current value is 15

Current value is 25*/

var text = "";
var i;
for (var i = 5  ; i <= 120; i = i + 10) {
  text += "the number is: " + i + "<br>";
}
  document.getElementById('loops').innerHTML = text;

/*...
Decrement by division

Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

Example output:

Current value is 4096

Current value is 2048

Current value is 1024*/

for (var i = 4096; i > 1; i = i/2) {
  console.log("the number is: " + i);
}

  // document.getElementByClass('loopy').innerHTML = text;

/*...
Array iteration

Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

Example output:

President #1 was George Washington

President #2 was John Adams

President #3 was Thomas Jefferson*/

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison"];
var pres = ""
for (var i = 0; i < presidents.length; i++) {
  // + = concatination. "President #" was added to show it in the console log as the instructions requested..(i +1) was added so that when the president were listed out in the console, it would start on 1 (for the 1st president of the USA) instead of 0 (like its index position in the array). In order to create a space between 'President #' and the name of the president, a string ("") containing a space (" ") was concatinated to the rest of the console.log command. In order to access the array containing the president's names, the var name (presidents) was added with the var i for each position in the array.

  console.log("President #" + (i +1) + " " + presidents[i]);
}

/*...
Object iteration

Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.*/

var antSpecies = {
  "argentine": {},
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
}

var text = "";
var ant;
for (ant in antSpecies) {
  text += antSpecies[ant];
  console.log(ant)
}











