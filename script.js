// selecting htlm elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')) {
		//all good
		alert('thank you for your message');
	} else {
		//not all good
		alert('What the heck!? That does not seem to be a valid email address. Please try again.');
	}

})

let number1 = 222;
let number2 = 3;
let sum = number1 + number2;

alert(sum);
 
// attaching 'click listener'
// getting user entered values
// javascript validations