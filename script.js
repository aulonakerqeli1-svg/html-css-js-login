// Get the button links and the wrapper
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

// Event listener for switching to the Sign Up form
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Event listener for switching to the Sign In form
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
