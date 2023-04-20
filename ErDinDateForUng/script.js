"use strict";

window.addEventListener("load", start);

function start(event) {
    document.querySelector("#form").addEventListener("submit", submitform);
}

function submitform(event) {
    event.preventDefault();

    const elements = document.querySelector("#form").elements;

    console.log(elements);

    const personAAge = elements.person1_alder.value;
    const personBAge = elements.person2_alder.value;

    displayResult(personAAge, personBAge);
}

function displayResult(personA, personB) {
    const minimumAge = personA / 2 + 7;
    
    if (personB >= minimumAge) {
        document.querySelector("#resultat").textContent = "Den går nok b👍";
        document.querySelector("#resultat").style.color = "green";
    } else {
        document.querySelector("#resultat").textContent = "Run🤸";
        document.querySelector("#resultat").style.color = "red";
    }
}

//   Din alder / 2 + 7 = minimum alder
