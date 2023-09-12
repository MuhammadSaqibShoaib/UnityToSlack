// script.js

function handleURLParameters() {
    // Get the URL search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Access individual parameters by their key
    const code = urlParams.get('code');

    // Get the reference to the <h1> element
    const h1Element = document.getElementById('output');

    // Update the content of the <h1> element with the values
    h1Element.textContent = `code: ${code || 'Not provided'}`;
}

// Call the function when the script is loaded
handleURLParameters();
