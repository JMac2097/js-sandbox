// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
   
    //Hide Results
    document.getElementById('results').style.display = 'none';
    
    // Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


//Calculate Results
function calculateResults() {

    // UI Variables
    const amount = document.getElementById('amount'),
          interest = document.getElementById('interest'),
          years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment'),
          totalPayment = document.getElementById('total-payment'),
          totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value),
          calculatedInterest = parseFloat(interest.value) / 100 / 12,
          calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments),
          monthly = (principal * x * calculatedInterest) / ( x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        // SHow results
        document.getElementById('results').style.display = 'block';
        // Hide Loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showError("Please check your numbers");
    }
    
};

function showError(error) {
    // Hide Results
    document.getElementById('results').style.display = 'none';
    // Hide Loader
    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card'),
          heading = document.querySelector('.heading');

    // Add Class
    errorDiv.className = 'alert alert-danger';

    // Create Text Node and Append to errorDiv
    errorDiv.appendChild(document.createTextNode(error));

    // Insert Error Above Header
    card.insertBefore(errorDiv, heading);

    // Clear Error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}