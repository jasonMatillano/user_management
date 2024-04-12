document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search input and button
    const idLogin = document.getElementById("id-login");
    const buttonLogin = document.getElementById("button-login");

    // Get the form element
    const loginForm = document.querySelector("form");

    // Add event listener for form submission
    loginForm.addEventListener("submit", async function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the ID input value
        const id = idLogin.value;

        try {
            // Send a GET request to retrieve user data from the server
            const response = await fetch('http://localhost:3030/users');

            // Check if the response status is OK
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            // Parse the response body as JSON
            const data = await response.json();

            // Check if the provided ID matches any user ID
            const matchedUser = data.find(user => user.id == id);

            if (matchedUser) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Login failed. Invalid credentials");
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            alert("Login failed. An error occurred while processing your request.");
        }
    });
});
