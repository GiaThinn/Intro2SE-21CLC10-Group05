$(document).ready(function () {
    const loginBtn = $('#loginBtn');
    
    loginBtn.on('click', function (e) {
        e.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        // post data to server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(res => {
            if (res.redirected && res.status === 200) {
                window.location.href = res.url;
            }
        })
    });
});
