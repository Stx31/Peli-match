document.addEventListener('DOMContentLoaded', function() {
    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('register-email').value;
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            
            const user = {
                email: email,
                username: username,
                password: password
            };
            
            localStorage.setItem(email, JSON.stringify(user));
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html';
        });
    }


    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            const storedUser = JSON.parse(localStorage.getItem(email));
            
            if (storedUser && storedUser.password === password) {
                alert('Login successful!');
            
                window.location.href = 'main.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});
