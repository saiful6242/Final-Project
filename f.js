document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    // Store data in session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('age', age);

    // Redirect to display page
    window.location.href = 'display.html';
});
