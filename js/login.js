document.getElementById('login-submit').addEventListener('click',function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userpassword = passwordField.value;

    if (userEmail == 'meem@gmail.com' && userpassword == 'meem') {
        window.location.href = 'banking.html';
    }
});