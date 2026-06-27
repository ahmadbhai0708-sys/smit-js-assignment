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