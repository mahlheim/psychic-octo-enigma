var formEl = document.querySelector('#form');
var firstNameEl = document.querySelector('#first-name');
var lastNameEl = document.querySelector('#last-name');
var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
var submissionResponseEl = document.querySelector('#response');
var button = document.querySelector('#button')

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();
  console.log(event);
  var firstName = firstNameEl.value;
  var lastName = lastNameEl.value;
  var email = emailEl.value;
  var password = passwordEl.value;
  var response = "Thank you for your submission " + firstName + " " + lastName + "! We will reach out to you at " + email + "." + " Remember, your password is: " + password + "!";
  submissionResponseEl.textContent = response;

}

// Submit event on the form
button.addEventListener('click', handleFormSubmit);

