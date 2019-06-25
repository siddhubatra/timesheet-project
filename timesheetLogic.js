// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyByHpczBtL7eLRwRzbk9gDo8Q-0XJfl3Zc",
  authDomain: "timesheet-jts.firebaseapp.com",
  databaseURL: "https://timesheet-jts.firebaseio.com",
  projectId: "timesheet-jts",
  storageBucket: "",
  messagingSenderId: "795615912590",
  appId: "1:795615912590:web:6675a44c437f5ddb"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees

// Grabs user input
var userInput = $("#add-user").val();
console.log(userInput);

// Creates local "temporary" object for holding employee data

// Uploads employee data to the database

// Logs everything to console

// Clears all of the text-boxes

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on('child_added', function (childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.

  // Calculate the months worked using hardcore math
  // To calculate the months worked

  // Calculate the total billed rate

  // Create the new row

  // Append the new row to the table
});

  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016

  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
