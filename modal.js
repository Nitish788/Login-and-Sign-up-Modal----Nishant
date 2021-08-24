"use strict";
const signUp = document.getElementById("signup");
const signIn = document.getElementById("sign");
const signInPage = document.querySelector(".signinpage");
const signInForm = document.querySelector(".signinform");
const signUpPage = document.querySelector(".signuppage");
const signUpForm = document.querySelector(".signupform");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
console.log(
    signUp,
    signIn,
    signUpPage,
    signUpForm,
    signInPage,
    signInForm,
    container1,
    container2
);
signUp.addEventListener("click", function() {
    signInPage.classList.remove("none");
    signInForm.classList.add("none");
    signUpPage.classList.add("none");
    signUpForm.classList.remove("none");
    container1.classList.add("bcolor1");
    container2.classList.remove("bcolor1");
});
signIn.addEventListener("click", function() {
    signInPage.classList.add("none");
    signInForm.classList.remove("none");
    signUpForm.classList.add("none");
    signUpPage.classList.remove("none");
    container2.classList.add("bcolor1");
    container1.classList.remove("bcolor1");
});