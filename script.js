"use strict";

window.addEventListener("load", initApp);

//Vi tilføjer en submit eventlistener på vores selve <form>
function initApp() {
    document.querySelector("#signup_form").addEventListener("submit", submitClicked);
    document.querySelector("#accept").addEventListener("click", termsAccept);
}

function submitClicked(event) {
    event.preventDefault();
    
    const elements = document.querySelector("#signup_form").elements;

    const signup = {
        fullName: elements.full_name.value,
        email: elements.email.value,
        userName: elements.user_name.value,
        password: elements.password.value,
        payment: elements.payment.value,
        payEvery: elements.pay_every.value,
        recieveMails: elements.recieve_mails.checked,
        TOS: elements.accept.checked,
    }

    if (elements.password.value != elements.repeat_password.value) {
        console.error("Password is not the same")
    } else {
        console.log(`Your object:`);
        console.log(signup);
    }
}

function termsAccept(event) {
    

    //event.target er ligesom "this"
    console.log(event.target);

    if (!event.target.checked) {
        //disable signup-button
        document.querySelector("#submit-btn").disabled = true;
    } else {
        //enable signup-button
        document.querySelector("#submit-btn").disabled = false;
    }
}