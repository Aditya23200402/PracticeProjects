

var nameError = document.getElementById('name-error')
var phoneerror = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var mssgError = document.getElementById('message-error')

function validateName(){
    var name = document.getElementById('contact-name').value;
    if( name.length == 0){
        nameError.innerHTML = "Name is required"
        return false
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = "Write full name";
        return false
    }
    nameError.innerHTML= "Correct";

    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if( phone.length == 0){
        phoneerror.innerHTML = "Phone no is required"
        return false;
    }
    if(phone.length != 10){
        phoneerror.innerHTML = "Phone no should ne 10 digits";
        return false;
    }
    if(!phone.match(/^[0–9]{10}$/)){
        phoneerror.innerHTML = "Write full phone no";
        return false;
    }
    phoneerror.innerHTML= "Correct";

    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if( email.length == 0){
        emailError.innerHTML = "Email required"
        return false;
    }
    
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML= "Correct";

    return true;
}