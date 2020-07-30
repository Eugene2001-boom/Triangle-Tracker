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