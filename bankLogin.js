// document.getElementById('submit-button').addEventListener('click', function () {
//     const emailField = document.addEventListener('email-field');
//     const passwordField = document.addEventListener('password-field');
//     const userEmail = emailField.value;
//     const userPassword = passwordField.value;

//     if (userEmail == 'sontan@bapp.com' && userPassword == 'secret') {
//         console.log('hello');
//     }
// })

document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const userEmail = emailField.value;
    const userPassword = passwordField.value;
    if (userEmail == 'pola@abba.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';

    }

})