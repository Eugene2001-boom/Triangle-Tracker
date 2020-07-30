//Function to validate only numbers. No special characters or letters

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

//Function to fetch entered triangle sides from the HRML form

function getValues() {
  var val1 = (document.getElementById('sideA').value);
  var val2 = (document.getElementById('sideB').value);
  var val3 = (document.getElementById('sideC').value);
    //Storing triangle lengths in an array

    var sidesEntered = [sideA, sideB, sideC];

    //Converting received input into integers
    var sideA = parseInt(val1);
    var sideB = parseInt(val2);
    var sideC = parseInt(val3);
  
    //Conditional loops to check type of triangle based on decision matrix