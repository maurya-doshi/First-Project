document.getElementById('initial-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const aadhar = document.getElementById('aadhar').value;
    const userType = document.querySelector('input[name="user-type"]:checked');
    
    if (userType) {
        if (userType.value === 'healthcare') {
            window.location.href = 'healthcare-provider.html';
        } else if (userType.value === 'user') {
            window.location.href = 'user-otp.html';
        }
    }
});
