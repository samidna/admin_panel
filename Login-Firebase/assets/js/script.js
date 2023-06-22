let form = document.querySelector('form');
let link = document.querySelector('a');
let signtext = document.querySelector('.sign');
form.addEventListener('submit', register);
link.addEventListener('click', (e) => {
    e.preventDefault();
    form.removeEventListener('submit', register)
    form.addEventListener('submit', login);
    signtext.innerHTML = 'Sign In';
    let text = ` <a href="">Qeydiyyatdan keçin</a>`
    document.querySelector('.alreadyregister').innerHTML = text;

})

async function register(e) {
    e.preventDefault();

    let API_KEY = 'AIzaSyDkOCHRe0eS_k7gDHJXpuHBP98OikwJsQg';
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;

    let user = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    try {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {

            method: 'POST',
            body: JSON.stringify(user)
        });

        let result = await response.json();
        if (result.error && result.error.message === 'EMAIL_EXISTS') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This email already registered',
            })
        } else {
            Swal.fire(
                'Congratulations!',
                'You registered',
                'success'
            )
            email = '';
            password = '';
        }
    } catch (err) {

    }

}

async function login(e) {
    e.preventDefault();

    let API_KEY = 'AIzaSyDkOCHRe0eS_k7gDHJXpuHBP98OikwJsQg';
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;

    let user = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    try {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {

            method: 'POST',
            body: JSON.stringify(user)
        });

        let result = await response.json();
        if (result.idToken) {
            location.replace('file:///C:/Users/user/Desktop/Login-Firebase/products.html')
        }
    } catch (err) {
    }

}