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
// Practice placement of <script> tag

// a. In the <head> section
// <head><script src="app.js"></script></head>

// b. Before the HTML content in the <body>
// <body><script src="app.js"></script><h1>Title</h1></body>

// c. Inside the HTML content
// <body><h1>Title</h1><script src="app.js"></script></body>

// d. At the end of the <body> (Best Practice)
// <body><h1>Title</h1><script src="app.js"></script></body>


// ===============================
// Chapter 2 - Variables for Strings
// ===============================

// Q1: Declare a variable called username.
let username;

// Q2: Declare a variable called myName & assign to it a string that represents your Full Name.
const myName = "Jhone Doe";

// Q3: 
// a) Declare a JS variable, titled message.
// b) Assign "Hello World" to variable message
// c) Display the message in alert box.
let message = "Hello World";
alert(message);

// Q4: Save student's bio data in JS variables and show the data in ONE alert box.
const studentName = "Jhone Doe";
const studentAge = "15 years old";
const studentCourse = "Certified Mobile Application Development";

alert("Student Bio Data:\n" + 
      "Name: " + studentName + "\n" + 
      "Age: " + studentAge + "\n" + 
      "Course: " + studentCourse);

// Q5: Display the following alert using one JS variable:
const pizzaPattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizzaPattern);

// Q6: Declare a variable called email and show the message in an alert box.
const email = "example@example.com";
alert("My email address is " + email);

// Q7: Declare a variable called book & display the message.
const book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Q8: Display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript<br><br>");

// Q9: Store following string and show in alert and browser.
const design = "——————————ஜ۩۞۩ஜ——————————";
alert(design);
document.write(design);


// ===============================
// Chapter 3 - Variables for Numbers
// ===============================

// Q1: 
const age = 15;
alert("I am " + age + " years old");

// Q2: 
const visitCount = 14;
document.write("You have visited this site " + visitCount + " times<br><br>");

// Q3: 
const birthYear = 1990;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br><br>");

// Q4: 
const visitorName = "John Doe";
const productTitle = "T-shirt";
const quantity = 5;
const storeName = "XYZ Clothing store";
document.write(visitorName + " ordered " + quantity + " + productTitle + "(s) on " + storeName);


// ===============================
// Chapter 4 - VARIABLE NAMES: Legal & Illegal
// ===============================

// Q1: Declare 3 variables in one statement.
let firstName, lastName, age;

// Q2: Declare 5 legal & 5 illegal variable names.
// 5 Legal Variable Names
const legal1 = "$my_1stVariable";
const legal2 = "userName";
const legal3 = "_name";
const legal4 = "name1";
const legal5 = "myVariable";

// 5 Illegal Variable Names - Comments me likhe hain kyun illegal hain
// const 1name = "illegal";     // Error: Number se start nahi ho sakta
// const user-name = "illegal"; // Error: - use nahi kar sakte  
// const user name = "illegal"; // Error: Space use nahi kar sakte
// const var = "illegal";       // Error: JS keyword hai
// const @username = "illegal"; // Error: @ use nahi kar sakte

// Q3: Display this in your browser
document.write("<br><br><h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, letters and $. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");


// ===============================
// Chapter 5 - MATH EXPRESSIONS
// ===============================

// Q1: Add two numbers and show the result in browser

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Q2: Subtraction, Multiplication, Division & Modulus

document.write("<br><br>");

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

// Q3: Mathematical Expressions

document.write("<br><br>");

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

// Q4: Movie Tickets

document.write("<br><br>");

var ticketPrice = 600;
var totalTicketCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalTicketCost + " PKR");

// Q5: Multiplication Table

document.write("<br><br>");

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

// Q6: Temperature Converter

document.write("<br><br>");

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F");

document.write("<br>");

var fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

// Q7: Shopping Cart

document.write("<br><br><h1>Shopping Cart</h1>");

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

document.write("<br><br><h1>Marks Sheet</h1>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Q9: Currency in PKR

document.write("<br><br><h1>Currency in PKR</h1>");

var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("Total Currency in PKR: " + totalPKR);

// Q10: Arithmetic in a Single Expression

document.write("<br><br>");

var number = 10;
var result = ((number + 5) * 10) / 2;

document.write("Result: " + result);

// Q11: Age Calculator

document.write("<br><br><h1>Age Calculator</h1>");

var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old");

// Q12: The Geometrizer

document.write("<br><br><h1>The Geometrizer</h1>");

var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Q13: The Lifetime Supply Calculator

document.write("<br><br><h1>The Lifetime Supply Calculator</h1>");

var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maximumAge = 65;
var snacksPerDay = 3;

var totalSnacks = (maximumAge - currentAge) * 365 * snacksPerDay;

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of Snacks per Day: " + snacksPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);