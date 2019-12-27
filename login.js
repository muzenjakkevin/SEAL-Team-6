function login() {
    // !! all objects in this container is set to flex-reverse !!
    // Create new Container for login objects
    let myLogin = document.createElement('div');
    mainDiv.appendChild(myLogin);
    myLogin.id = 'myLogin';
    myLogin.style.display = 'flex';

    // Login-button
    var loginBtn = document.createElement('button');
    myLogin.appendChild(loginBtn);
    loginBtn.innerHTML = 'Login';
    loginBtn.style.borderRadius = '3px';
    loginBtn.style.marginTop = '25px';
    loginBtn.style.width = '100%';
    loginBtn.style.background = '#007bff';
    loginBtn.style.color = 'white'
    loginBtn.style.height = '30px';
    loginBtn.addEventListener('click', function () {
        myLogin.style.display = 'none';
    })

    // New password-input
    var passwordInput = document.createElement('input');
    myLogin.appendChild(passwordInput);
    passwordInput.type = 'password';
    passwordInput.value = 'Password';
    passwordInput.name = 'password:';
    passwordInput.style.width = '166px';
    passwordInput.className = 'input';
    passwordInput.addEventListener('click', function () {
        passwordInput.value = '';
    })
    var passwordText = document.createElement('p');
    passwordText.innerHTML = 'Password:';
    myLogin.appendChild(passwordText);
    passwordText.style.margin = '0';
    passwordText.style.marginTop = '7px';

    // New e-mail input
    var userInput = document.createElement('input');
    myLogin.appendChild(userInput);
    userInput.type = 'e-mail';
    userInput.value = 'enter e-mail'
    userInput.name = 'e-mail';
    userInput.style.width = '166px';
    userInput.className = 'input';
    userInput.addEventListener('click', function () {
        userInput.value = '';
    })
    var userText = document.createElement('p');
    userText.innerHTML = 'E-mail:';
    userText.style.margin = '0';
    myLogin.appendChild(userText);
}