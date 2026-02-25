// Show build timestamp
document.getElementById('buildTime').textContent =
    'Deployed at: ' + new Date().toLocaleString();

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate registration (no backend needed for demo)
    const btn = document.querySelector('.btn');
    btn.textContent = 'Registering...';
    btn.disabled = true;

    setTimeout(function() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').innerHTML =
            '🎉 Welcome, <strong>' + username + '</strong>! Registration successful.';
    }, 1000);
});
