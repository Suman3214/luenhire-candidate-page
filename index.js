// Form submission handling
function submitForm(event) {
    event.preventDefault();
  
    const formStatus = document.getElementById("form-status");
    formStatus.textContent = "Thank you! Your message has been sent.";
    formStatus.style.color = "green";
  
    // Clear the form
    document.getElementById("contact-form").reset();
  }