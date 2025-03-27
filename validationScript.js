let inputvalue = document.getElementById("inputField")
let button = document.getElementById("button")
button.addEventListener("click", function(){
  if (/^[a-zA-Z0-9]+$/.test(inputvalue.value)){ // checks if the input is alphanumeric
    inputvalue.setCustomValidity("Confirmed! Your form has been submitted. Thank you")
  } else{
    inputvalue.required
    inputvalue.setCustomValidity("Error! Your input is not alphanumeric! Form not submitted try again.")
  }
})