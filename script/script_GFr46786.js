//------- On click event functions for the second page ----------- //
 
// cake button //
function myFunction() {
    document.getElementById("outputText").innerText = "Various flavors and models to choose from. Fluffy and very tasty dough, you can also add fillings and make your cake even more special.";
  }
  
 // Candy Bars button //
  function myFunction02() {
    document.getElementById("outputText").innerText = "Our bars are made with noble and high quality chocolate.  Several flavors for you to delight or give to someone who loves.";
  }

 // Brownies button //  
  function myFunction03() {
    document.getElementById("outputText").innerText = "It's wet inside and crunchy on the outside and will make you fall in love! You can choose the model and add toppings to build the taste you want.  Our pizza format is ideal for sharing with friends.";
  }

//------- Validation for the third page -------------//

 // Fuction to check all the inputs for third page
function runValidate(form){
    
    if(validateFullName(form) && validateEmail(form) && validateTextArea){
        return true;
    } 
    else {
        return false;
    }    
}

// fuction to validate the student name input
function validateFullName(form){
    var fullName = form.elements["fullName"];

    // checking if the value is missing
    if(fullName.validity.valueMissing){
        fullName.setCustomValidity("Please enter your full name");
        return false;
    }

    else {
        fullName.setCustomValidity("");
        return true;
    }    
 }

 // fuction to validate the email input
 function validateEmail(form){
    var email = form.elements["emailAdress"];

    // checking if the value of the email address is missing
    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email address");
        return false;
    }

    // checking if the type is correct
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Please enter the correct type format for Email");
        return false;
    }

    else {
        email.setCustomValidity("");
        return true;
    }    
 }

 // fuction to validate the text area
function validateTextArea(form){   
    
    var textArea = form.elements["collectedInformation"];

    // checking if the value is missing
    if(textArea.validity.valueMissing){
        textArea.setCustomValidity("Please enter your doubts or wishes for a E-book");
        return false;
    }

    else {
        fullName.setCustomValidity("");
        return true;
    }    
 }