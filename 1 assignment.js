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