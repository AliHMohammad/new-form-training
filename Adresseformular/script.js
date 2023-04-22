"use strict";

window.addEventListener("load", start);

const endpoint = "https://api.dataforsyningen.dk/postnumre/";

function start(event) {
    document.querySelector("#adresse_form").addEventListener("submit", submitForm);
    document.querySelector("#postnummer").addEventListener("change", fetchBy);
}

async function fetchBy(event) {
    const postnr = document.querySelector("#postnummer").value;

    const byObjekt = await getData(postnr)

    if (byObjekt.navn) {
        autoInputBy(byObjekt.navn);
    } else {
        autoInputBy("Prøv igen")
    }
}

function submitForm(event) {
    event.preventDefault();

    const elements = document.querySelector("#adresse_form").elements;

    const dataObjekt = {
        navn: elements.navn.value,
        gade: elements.gade.value,
        husnummer: elements.husnummer.value,
        postnummer: elements.postnummer.value,
        by: elements.by.value,
        co: elements.evt.value,
        telefon: elements.tlf.value,
        email: elements.mail.value,
    }

    if (!dataObjekt.co) {
        dataObjekt.co = null;
    } else if (!dataObjekt.telefon) {
        dataObjekt.telefon = null;
    }

    console.log(dataObjekt);
    postForm(dataObjekt)
}

async function getData(postnr){
    const response = await fetch(`${endpoint}${postnr}`);
    const data = response.json();
    return data
}

function autoInputBy(By) {
    document.querySelector("#by").value = By;
}

async function postForm(obj) {
    const objAsJSON = JSON.stringify(obj)
    
    const res = await fetch("https://adress-fc06b-default-rtdb.europe-west1.firebasedatabase.app/Forms.json", {
        method: "POST",
        body: objAsJSON,
    });


    if (res.ok) {
        console.log("Posted");
    } else {
        console.error("Error. Could not POST");
    }
}