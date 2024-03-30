document.getElementById('fullName').addEventListener('input', function() {
    var name = this.value;
    if (!isValidName(name)) {
        // Show name error message
        document.getElementById('nameError').textContent = 'Name must only contain letters and spaces.';
        document.getElementById('nameError').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('nameError').style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    var email = this.value;
    if (!isValidEmail(email)) {
        // Show email error message
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('emailError').style.display = 'none';
    }
});
document.getElementById('phone').addEventListener('input', function() {
    var phone = this.value;
    if (!isValidPhoneNumber(phone)) {
        // Show email error message
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
        document.getElementById('phoneError').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('phoneError').style.display = 'none';
    }
});
document.getElementById('address').addEventListener('input', function() {
    var address = this.value;
    if (!isValidAddress(address)) {
        // Show email error message
        document.getElementById('addressError').textContent = 'Your input should contain atleat more than 10 letters';
        document.getElementById('addressError').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('addressError').style.display = 'none';
    }
});
document.getElementById('file').addEventListener('input', function() {
    var file = this.value;
    if (!isValidFile(file)) {
        // Show email error message
        document.getElementById('resumeError').textContent = 'Your input should contain atleat more than 10 letters';
        document.getElementById('resumeError').style.display = 'block';
    } else {
        // Hide error message
        document.getElementById('resumeError').style.display = 'none';
    }
});
// Helper functions for different validations
function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

function isValidAddress(address) {
    return address.length >= 10; // Assuming the minimum length for the address is 10
}

function isValidFile(file) {
    const allowedExtensions = ['pdf', 'docx'];
    const sizeLimit = 5 * 1024 * 1024; // 5 MB in bytes
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(extension) && file.size <= sizeLimit;
}

// Main validation function
function validateForm() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const resume = document.getElementById('resume').files[0];

    let isValid = true;
    // Validate Name
    if (!isValidName(name)) {
        // Show name error message
        isValid = false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        // Show email error message
        isValid = false;
    }

    // Validate Phone
    if (!isValidPhoneNumber(phone)) {
        // Show phone error message
        isValid = false;
    }

    // Validate Address
    if (!isValidAddress(address)) {
        // Show address error message
        isValid = false;
    }

    // Validate Resume
    if (resume && !isValidFile(resume)) {
        // Show resume error message
        isValid = false;
    }

    // Enable or disable the submit button
    document.getElementById('submitBtn').disabled = !isValid;

    // Return the validity status
    return isValid;
}

// Form submission event listener
document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform final validation check before submitting
    const isFormValid = validateForm();
    var termsChecked = document.getElementById('terms').checked;
    
    // Only proceed with form submission if all validations pass and terms are checked
    if (isFormValid && termsChecked) {
        // Here you would typically send the form data to a server
        // This is where you would implement AJAX request or similar
        console.log('Form is valid and ready to be submitted.');
        alert('Application sent!');
    } else {
        // If there are errors or terms are not checked, do not submit the form
        // Show appropriate message to the user
        if (!termsChecked) {
            alert('Please accept the terms and conditions.');
        } else {
            alert('Please correct the errors before submitting.');
        }
    }
});

// Call validateForm initially to set the correct state of the submit button
validateForm();
