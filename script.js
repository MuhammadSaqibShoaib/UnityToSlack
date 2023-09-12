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
    console.log(code)
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
        if(data.status == 200){
            console.log(data.data.authed_user)
            sessionStorage.setItem('accessToken', data.data.authed_user.access_token)
            window.close();
        }else{
            console.log(data)
        }
    })
    .catch(err => console.log(err))
}


