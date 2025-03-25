    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message



let inputvalue = document.getElementById("inputField")


let button = document.getElementById("button")

button.addEventListener("click", function(){
  if (/^[a-zA-Z0-9]+$/.test(inputvalue.value)){
    alert("lurkers io ")
  } else{
    alert("Error you are wrong dumb ahh")
  }
})