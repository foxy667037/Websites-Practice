// For Input Value Text Color:
let input = document.getElementById('username');
input.style.color = "white";

// For Password Show & Hide:
let password = document.getElementById('password');
password.style.color = "white";
let showPassword = document.getElementById('showPassword');
showPassword.addEventListener('click', function() {
    // Toggle the password visibility
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
});

// For COnfirm Password Show & Hide:
let Confirmpassword = document.getElementById('Confirmpassword');
Confirmpassword.style.color = "white";
let showConfirmPassword = document.getElementById('showConfirmPassword');
showConfirmPassword.addEventListener('click', function() {
    // Toggle the password visibility
    const type = Confirmpassword.type === 'password' ? 'text' : 'password';
    Confirmpassword.type = type;
});