document.addEventListener('DOMContentLoaded', function() {
    // Get login form elements
    const loginForm = document.getElementById('admin-login-form');
    const loginError = document.getElementById('login-error');
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (authenticateUser(username, password)) {
            // Set session token
            const token = generateSessionToken(username);
            sessionStorage.setItem('adminAuth', token);
            
            // Redirect to admin page
            window.location.href = 'admin.html';
        } else {
            loginError.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
            loginError.style.display = 'block';
            
            // Clear error after 3 seconds
            setTimeout(() => {
                loginError.style.display = 'none';
                loginError.textContent = '';
            }, 3000);
        }
    });
    
    // Generate a session token
    function generateSessionToken(username) {
        const timestamp = new Date().getTime();
        const randomStr = Math.random().toString(36).substring(2, 15);
        return btoa(`${username}-${timestamp}-${randomStr}`);
    }
    
    // Authenticate user with hardcoded credentials - Fixed version
    function authenticateUser(username, password) {
        // Fix: Use direct string comparison instead of hashing
        const validUsername = 'switweno';
        const validPassword = '076564614';
        
        return (username === validUsername && password === validPassword);
    }
});

// Check if we're on the admin page, and if so, verify authentication
function checkAdminAuth() {
    if (document.location.pathname.includes('admin.html')) {
        const token = sessionStorage.getItem('adminAuth');
        
        if (!token) {
            // Redirect back to main page if not authenticated
            window.location.href = 'index.html';
            return false;
        }
        
        // Add logout functionality
        document.addEventListener('DOMContentLoaded', function() {
            const logoutLink = document.getElementById('admin-logout');
            if (logoutLink) {
                logoutLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Clear the session storage
                    sessionStorage.removeItem('adminAuth');
                    // Redirect to main page
                    window.location.href = 'index.html';
                });
            }
        });
        
        return true;
    }
    return false;
}

// Run auth check for admin page
checkAdminAuth();
