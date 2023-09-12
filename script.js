// script.js

function handleURLParameters() {
    // Get the URL search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Access individual parameters by their key
    const code = urlParams.get('code');
    // Get the reference to the <h1> element
    const h1Element = document.getElementById('output');

    // Update the content of the <h1> element with the values
    h1Element.textContent = `code: ${'Got it' || 'Not provided'}`;

    fetch("https://ruby-zealous-bandicoot.cyclic.app/", {
        method: "POST",
        body: JSON.stringify({
            code: code
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => {return response.json()})
    .then((data) => {
        console.log(data)
        sessionStorage.setItem('accessToken', data.authed_user.access_token)
        window.close();
    })
    .catch(err => console.log(err))
}

// Call the function when the script is loaded
handleURLParameters();
