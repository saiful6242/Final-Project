document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        var interpretation;

        if (bmi < 18.5) {
            interpretation = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            interpretation = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            interpretation = 'Overweight';
        } else {
            interpretation = 'Obese';
        }

        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<p>Your BMI: ' + bmi.toFixed(2) + '</p>' +
                              '<p>Interpretation: ' + interpretation + '</p>';
    } else {
        alert('Please enter valid height and weight values.');
    }
}

