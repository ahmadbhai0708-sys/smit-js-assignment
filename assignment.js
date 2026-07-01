// ===============================
// Chapter 1 - Alerts
// ===============================

// Q1
alert("Welcome to our website!");

// Q2
alert("Error! Please enter a valid password.");

// Q3
alert("Welcome to JS Land...\nHappy Coding!");

// Q4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Q5
alert("Hello... I can run JS through my web browser's console");

// Q6
alert("You learned something new every day!");

// Q7
// Q7 sirf theory hai, iska koi alert nahi banta.
// Best Practice: <script> tag hamesha </body> se just pehle lagate hain.
// Ye hum ne index.html me pehle hi kar diya hai: <script src="assignment.js"></script>

// ===============================
// Chapter 2 - Variables for Strings
// ===============================

var username;

var myName = "Ahmad";

var message;
message = "Hello World";
alert(message);

var studentName = "Ahmad";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(studentCourse);

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

var email = "example@example.com";
alert("My email address is " + email);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

document.write("Yah! I can write HTML content through JavaScript<br><br>");

var design = "——————————ஜ۩۞۩ஜ——————————";
alert(design);
document.write(design + "<br><br>");

// ===============================
// Chapter 3 - Variables for Numbers
// ===============================

const age = 15;
alert("I am " + age + " years old");

const visitCount = 14;
document.write("You have visited this site " + visitCount + " times<br><br>");

const birthYear = 1990;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br><br>");

const visitorName = "John Doe";
const productTitle = "T-shirt";
const quantity = 5;
const storeName = "XYZ Clothing store";
document.write(visitorName + " ordered " + quantity + " + productTitle + "(s) on " + storeName + "<br><br>");

// ===============================
// Chapter 4 - VARIABLE NAMES: Legal & Illegal
// ===============================

let firstName, lastName, age;

const legal1 = "$my_1stVariable";
const legal2 = "userName";
const legal3 = "_name";
const legal4 = "name1";
const legal5 = "myVariable";

// const 1name = "illegal";     // Error: Number se start nahi ho sakta
// const user-name = "illegal"; // Error: - use nahi kar sakte  
// const user name = "illegal"; // Error: Space use nahi kar sakte
// const var = "illegal";       // Error: JS keyword hai
// const @username = "illegal"; // Error: @ use nahi kar sakte

document.write("<br><br><h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, letters and $. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br><br>");

// ===============================
// Chapter 5 - MATH EXPRESSIONS
// ===============================

// Q1: Add two numbers
document.write("<h2>Question 1</h2>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

document.write("<br><br>");

// Q2: Subtraction, Multiplication, Division & Modulus
document.write("<h2>Question 2</h2>");
var subtraction = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
document.write("<br>");
var multiplication = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication);
document.write("<br>");
var division = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + division);
document.write("<br>");
var modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

document.write("<br><br>");

// Q3: Mathematical Expressions
document.write("<h2>Question 3</h2>");
var number;
document.write("Value after variable declaration is: " + number);
number = 5;
document.write("<br>Initial value: " + number);
number++;
document.write("<br>Value after increment is: " + number);
number = number + 7;
document.write("<br>Value after addition is: " + number);
number--;
document.write("<br>Value after decrement is: " + number);
var remainder = number % 3;
document.write("<br>The remainder is: " + remainder);

document.write("<br><br>");

// Q4: Movie Tickets
document.write("<h2>Question 4</h2>");
var ticketPrice = 600;
var totalTicketCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalTicketCost + " PKR");

document.write("<br><br>");

// Q5: Multiplication Table
document.write("<h2>Question 5</h2>");
var table = 4;
document.write("<h1>Table of " + table + "</h1>");
document.write(table + " x 1 = " + (table * 1) + "<br>");
document.write(table + " x 2 = " + (table * 2) + "<br>");
document.write(table + " x 3 = " + (table * 3) + "<br>");
document.write(table + " x 4 = " + (table * 4) + "<br>");
document.write(table + " x 5 = " + (table * 5) + "<br>");
document.write(table + " x 6 = " + (table * 6) + "<br>");
document.write(table + " x 7 = " + (table * 7) + "<br>");
document.write(table + " x 8 = " + (table * 8) + "<br>");
document.write(table + " x 9 = " + (table * 9) + "<br>");
document.write(table + " x 10 = " + (table * 10));

document.write("<br><br>");

// Q6: Temperature Converter
document.write("<h2>Question 6</h2>");
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F");
document.write("<br>");
var fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

document.write("<br><br>");

// Q7: Shopping Cart
document.write("<h2>Question 7</h2>");
document.write("<h1>Shopping Cart</h1>");
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
var shoppingTotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Total cost of your order is " + shoppingTotal);

// ===============================

// Q8: Marks Sheet
document.write("<br><br><h2>Question 8</h2>");
document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Q9: Currency in PKR
document.write("<br><br><h2>Question 9</h2>");
document.write("<h1>Currency in PKR</h1>");
var usDollar = 10;
var saudiRiyal = 25;
var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);
document.write("Total Currency in PKR: " + totalPKR);

// Q10: Arithmetic in a Single Expression
document.write("<br><br><h2>Question 10</h2>");
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("Result: " + result);

// Q11: Age Calculator
document.write("<br><br><h2>Question 11</h2>");
document.write("<h1>Age Calculator</h1>");
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old");

// Q12: The Geometrizer
document.write("<br><br><h2>Question 12</h2>");
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Q13: The Lifetime Supply Calculator
document.write("<br><br><h2>Question 13</h2>");
document.write("<h1>The Lifetime Supply Calculator</h1>");
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maximumAge = 65;
var snacksPerDay = 3;
var totalSnacks = (maximumAge - currentAge) * 365 * snacksPerDay;
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of Snacks per Day: " + snacksPerDay + "<br>");
document.write("You will need " + totalSnacks + " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);


// =========================
// Chapter 6-9
// Question 1
// =========================

var a = 10;

document.write("<h2>Question 1</h2>");
document.write("Result:<br><br>");
document.write("The value of a is: " + a + "<br>");
document.write(".............................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<hr>");


// =========================
// Question 2
// =========================

var a = 2;
var b = 1;

document.write("<h2>Question 2</h2>");

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br><br>");

document.write("Result of --a: " + (--a) + "<br>");
document.write("Result of --a - --b: " + (a - --b) + "<br>");

++b;
document.write("Result of --a - --b + ++b: " + (a - b + b) + "<br>");

var result = a - b + b + b--;

document.write("Result of --a - --b + ++b + b--: " + result + "<br><br>");

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is " + result + "<hr>");


// =========================
// Question 3
// =========================

document.write("<h2>Question 3</h2>");

var userName = prompt("Enter your name");

alert("Welcome " + userName);

document.write("Welcome " + userName + "<hr>");


// =========================
// Question 4
// =========================

// Question 4 is not available in PDF.


// =========================
// Question 5
// =========================

document.write("<h2>Question 5</h2>");

var number = prompt("Enter a number", "5");

if (number === "" || number === null) {
    number = 5;
}

document.write("<h3>Multiplication Table of " + number + "</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

document.write("<hr>");


// =========================
// Question 6
// =========================

document.write("<h2>Question 6</h2>");

var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");

var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks for " + sub1);
var marks2 = +prompt("Enter obtained marks for " + sub2);
var marks3 = +prompt("Enter obtained marks for " + sub3);

var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

document.write("<table border='1' cellpadding='8'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + ((marks1 / totalMarks) * 100).toFixed(2) + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + ((marks2 / totalMarks) * 100).toFixed(2) + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + ((marks3 / totalMarks) * 100).toFixed(2) + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th></th>");
document.write("<th>" + grandTotal + "</th>");
document.write("<th>" + totalObtained + "</th>");
document.write("<th>" + percentage.toFixed(2) + "%</th>");
document.write("</tr>");

document.write("</table>");


// ==============================
// Chapter 9-11
// Question 1
// ==============================

var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    document.write("<h2>Question 1</h2>");
    document.write("Welcome to city of lights");
}

document.write("<hr>");


// ==============================
// Question 2
// ==============================

document.write("<h2>Question 2</h2>");

var gender = prompt("Enter your gender (Male/Female)");

if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am.");
}
else {
    document.write("Invalid Gender");
}

document.write("<hr>");


// ==============================
// Question 3
// ==============================

document.write("<h2>Question 3</h2>");

var signal = prompt("Enter Traffic Signal Color");

if (signal.toLowerCase() === "red") {
    document.write("Must Stop");
}
else if (signal.toLowerCase() === "yellow") {
    document.write("Ready to move");
}
else if (signal.toLowerCase() === "green") {
    document.write("Move now");
}
else {
    document.write("Invalid Signal Color");
}

document.write("<hr>");


// ==============================
// Question 4
// ==============================

document.write("<h2>Question 4</h2>");

var fuel = parseFloat(prompt("Enter remaining fuel in litres"));

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car");
}
else {
    document.write("Fuel level is sufficient.");
}

document.write("<hr>");
 ==============================
// Question 5
// ==============================

document.write("<h2>Question 5</h2>");

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

document.write("Question 5 executed. Check alerts for output.");
document.write("<hr>");


// ==============================
// Question 6
// ==============================

document.write("<h2>Question 6</h2>");

var totalMarks = +prompt("Enter Total Marks");
var obtainedMarks = +prompt("Enter Obtained Marks");

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks : " + totalMarks + "<br>");
document.write("Marks Obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage.toFixed(2) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

document.write("<hr>");


// ==============================
// Question 7
// ==============================

document.write("<h2>Question 7</h2>");

var secretNumber = 7;

var guess = +prompt("Guess the secret number (1 to 10)");

if (guess === secretNumber) {
    document.write("Bingo! Correct answer.");
}
else if (guess + 1 === secretNumber) {
    document.write("Close enough to the correct answer.");
}
else {
    document.write("Wrong guess!");
}

document.write("<hr>");


// ==============================
// Question 8
// ==============================

document.write("<h2>Question 8</h2>");

var number = +prompt("Enter a number");

if (number % 3 === 0) {
    document.write(number + " is divisible by 3.");
}
else {
    document.write(number + " is not divisible by 3.");
}

document.write("<hr>");
 ==============================
// Question 9
// ==============================

document.write("<h2>Question 9</h2>");

var number = +prompt("Enter a number");

if (number % 2 === 0) {
    document.write(number + " is Even.");
} else {
    document.write(number + " is Odd.");
}

document.write("<hr>");


// ==============================
// Question 10
// ==============================

document.write("<h2>Question 10</h2>");

var temperature = +prompt("Enter temperature");

if (temperature > 40) {
    document.write("It is too hot outside.");
}
else if (temperature > 30) {
    document.write("The Weather today is Normal.");
}
else if (temperature > 20) {
    document.write("Today's Weather is cool.");
}
else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool.");
}
else {
    document.write("Weather is very cold.");
}

document.write("<hr>");


// ==============================
// Question 11
// ==============================

document.write("<h2>Question 11</h2>");

var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
    document.write("Result: " + (firstNumber + secondNumber));
}
else if (operation === "-") {
    document.write("Result: " + (firstNumber - secondNumber));
}
else if (operation === "*") {
    document.write("Result: " + (firstNumber * secondNumber));
}
else if (operation === "/") {
    document.write("Result: " + (firstNumber / secondNumber));
}
else if (operation === "%") {
    document.write("Result: " + (firstNumber % secondNumber));
}
else {
    document.write("Invalid Operation");
}

document.write("<hr>");

// ==============================
// End of Chapter 9-11
// ==============================



// ==================== Chapter 12-13 ====================

// Q1: Check if input is Number, Uppercase or Lowercase
var char = prompt("Q1: Enter a single character:");
var code = char.charCodeAt(0);

if(code >= 48 && code <= 57) {
    alert("Q1: You entered a Number");
}
else if(code >= 65 && code <= 90) {
    alert("Q1: You entered an Uppercase Letter");
}
else if(code >= 97 && code <= 122) {
    alert("Q1: You entered a Lowercase Letter");
}
else {
    alert("Q1: Invalid Input");
}

// Q2: Find larger of two integers
var num1 = +prompt("Q2: Enter first integer:");
var num2 = +prompt("Q2: Enter second integer:");

if(num1 > num2) {
    alert("Q2: " + num1 + " is larger");
}
else if(num2 > num1) {
    alert("Q2: " + num2 + " is larger");
}
else {
    alert("Q2: Both numbers are equal");
}

// Q3: Check Positive, Negative or Zero
var number = +prompt("Q3: Enter a number:");

if(number > 0) {
    alert("Q3: Number is Positive");
}
else if(number < 0) {
    alert("Q3: Number is Negative");
}
else {
    alert("Q3: Number is Zero");
}

// Q4: Check if character is a Vowel
var ch = prompt("Q4: Enter a single character:").toLowerCase();

if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert("Q4: True - It is a Vowel");
}
else {
    alert("Q4: False - It is not a Vowel");
}

// Q5: Password Validation
var correctPassword = "Pakistan123";
var userPass = prompt("Q5: Enter your password:");

if(userPass === "") {
    alert("Q5: Please enter your password");
}
else if(userPass === correctPassword) {
    alert("Q5: Correct! The password you entered matches the original password");
}
else {
    alert("Q5: Incorrect password");
}


// Q6: Fixed if/else statement
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
alert("Q6: " + greeting);

// Q7: Time greeting in 24 hours format
var time = +prompt("Q7: Enter time in 24-hour format like 1900 for 7pm:");

if (time >= 0000 && time < 1200) {
    alert("Q7: Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Q7: Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Q7: Good evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Q7: Good night");
}
else {
    alert("Q7: Invalid time");
}