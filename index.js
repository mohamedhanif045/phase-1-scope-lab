// Declare customerName in global scope and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Assigning without var will implicitly create a global variable
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Assigning without var will implicitly create a global variable
}

// Constant in global scope for least favorite customer
const leastFavoriteCustomer = 'Alice';

// Function to attempt to change the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // Attempting to change a constant will result in an error
}





