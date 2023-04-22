"use strict";

window.addEventListener("load", start);

function start(event) {
    document.querySelector("#red").addEventListener("input", updateColor)
    document.querySelector("#green").addEventListener("input", updateColor);
    document.querySelector("#blue").addEventListener("input", updateColor);

    document.querySelector("#red_output").addEventListener("input", updateColorNumber);
    document.querySelector("#green_output").addEventListener("input", updateColorNumber);
    document.querySelector("#blue_output").addEventListener("input", updateColorNumber);
}

function updateColor(event) {
    
    const elements = document.querySelector("#form_RGB").elements;

    const redValue = elements.red.value;
    const greenValue = elements.green.value;
    const blueValue = elements.blue.value;

    updateDOM(redValue, greenValue, blueValue)

    
}

function updateColorNumber(event) {
    
    const elements = document.querySelector("#form_RGB").elements;

    const redValue = elements.red_output.value;
    const greenValue = elements.green_output.value;
    const blueValue = elements.blue_output.value;

    updateDOMNumber(redValue, greenValue, blueValue);
}

function updateDOM(red, green, blue) {
    
    document.querySelector("#red_output").value = red;
    document.querySelector("#green_output").value = green;
    document.querySelector("#blue_output").value = blue;


    document.querySelector("#display").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector("#result").textContent = `(${red}, ${green}, ${blue})`;
}

function updateDOMNumber(red, green, blue) {
    
    document.querySelector("#red").value = red;
    document.querySelector("#green").value = green;
    document.querySelector("#blue").value = blue;
    
    document.querySelector("#display").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector("#result").textContent = `(${red}, ${green}, ${blue})`;

}