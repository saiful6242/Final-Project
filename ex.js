
/// Function to validate form
function checkForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var street = document.getElementById('street').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var gender = document.getElementById('gender').value;
    var startMonth = document.getElementById('startMonth').value;
    var owner = document.getElementById('owner').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var cvv = document.getElementById('cvv').value;
    var expiryMonth = document.getElementById('expiryMonth').value;
    var expiryYear = document.getElementById('expiryYear').value;

    // Simple validation
    if (name.trim()=== '') {
        alert('Please enter your full name.');
        return;
    }
    if (age === '') {
        alert('Please enter your age.');
        return false;
    }
    if (email === '') {
        alert('Please enter your email.');
        return false;
    }
    if (phone === '') {
        alert('Please enter your phone number.');
        return false;
    }
    if (street === '') {
        alert('Please enter your street.');
        return false;
    }
    if (city === '') {
        alert('Please enter your city.');
        return false;
    }
    if (state === '') {
        alert('Please select your state.');
        return ;
    }
    if (zip === '') {
        alert('Please enter your zip code.');
        return false;
    }
    if (gender === '') {
        alert('Please select your gender.');
        return false;
    }
    if (startMonth === '') {
        alert('Please select when to start.');
        return false;
    }
    if (owner === '') {
        alert('Please enter the name on the card.');
        return false;
    }
    if (cardNumber === '') {
        alert('Please enter your card number.');
        return false;
    }
    if (cvv === '') {
        alert('Please enter your CVV.');
        return false;
    }
    if (expiryMonth === '') {
        alert('Please select the expiration month.');
        return false;
    }
    if (expiryYear === '') {
        alert('Please select the expiration year.');
        return false;
    }

    return true; // Form is valid
}
