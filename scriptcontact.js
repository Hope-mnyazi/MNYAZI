document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can perform additional validation if needed

    // Display a simple alert with the submitted data (in a real application, you would send this data to a server)
    alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);

    // Reset the form after submission
    document.getElementById('contactForm').reset();
});
