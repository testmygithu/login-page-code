// swipe in the sign up page

const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});



//  REMOVE THE SIGN UP PAGE
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});




























