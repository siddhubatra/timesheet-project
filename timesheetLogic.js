// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
  apiKey: 'AIzaSyCyVeCWkvNafYXcVl4lR-siH5ET4OIPY14',
  authDomain: 'timesheetlogicta.firebaseapp.com',
  databaseURL: 'https://timesheetlogicta.firebaseio.com',
  projectId: 'timesheetlogicta',
  storageBucket: '',
  messagingSenderId: '913276287419',
  appId: '1:913276287419:web:2270c82ed0803630'
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees

// Grabs user input

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
