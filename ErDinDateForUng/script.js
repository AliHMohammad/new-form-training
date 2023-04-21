"use strict";

window.addEventListener("load", start);

function start(event) {
    document.querySelector("#form").addEventListener("submit", submitform);
    document.querySelector("#form2").addEventListener("submit", submitform2);
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

    console.log(`Min age: ${minimumAge}`);
    
    if (personB > minimumAge) {
        document.querySelector("#resultat").textContent = "Den går nok b👍";
        document.querySelector("#resultat").style.color = "green";
    } else if (personB == minimumAge) {
        document.querySelector("#resultat").textContent = "Du på kanten😬";
        document.querySelector("#resultat").style.color = "yellow";
    } else {
        document.querySelector("#resultat").textContent = "Run🤸";
        document.querySelector("#resultat").style.color = "red";
    }
}

function submitform2(event) {
    event.preventDefault();

    const elements = document.querySelector("#form2").elements;

    console.log(elements);

    const personAAge = elements.person1_alder.value;
    const personBAge = elements.person2_alder.value;

    displayResult2(personAAge, personBAge);
}

function displayResult2(personA, personB) {
    const maximumAge = (personA - 7) * 2;
    console.log(`Max age: ${maximumAge}`);

    if (personB < maximumAge) {
        document.querySelector("#resultat2").textContent = "Den går nok b👍";
        document.querySelector("#resultat2").style.color = "green";
    } else if (personB == maximumAge) {
        document.querySelector("#resultat2").textContent = "Den er tæt på👩‍🦳";
        document.querySelector("#resultat2").style.color = "yellow";
    } else {
        document.querySelector("#resultat2").textContent = "Run🤸";
        document.querySelector("#resultat2").style.color = "red";
    }
}

//   (Din alder - 7) * 2 = Max alder
