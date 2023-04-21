"use strict";

window.addEventListener("load", start)

function start(event) {
    document.querySelector("#form_bmi").addEventListener("submit", submitBMI);
    document.querySelector("#reset_btn").addEventListener("click", resetForm)
}

function submitBMI(event) {
    event.preventDefault();

    const elements = document.querySelector("#form_bmi").elements;

    const højde = elements.højde.value;
    const vægt = elements.vægt.value;
    
    const bmi = vægt / Math.pow(højdeIMeter(højde), 2);
    
    displayResult(bmi.toFixed(2));
}

function resetForm(event) {
    event.preventDefault();

    document.querySelector("#vægt").value = null;
    document.querySelector("#højde").value = null;

    document.querySelector("#bmi_resultat").textContent = "";
    document.querySelector("#bmi_betydning").textContent = "";

}

function højdeIMeter(højde) {
    const h = højde.split("")
    if (h.length == 3) {
        h.splice(1, 0, ".");
        return h.join("")
    } else if (h.length == 2) {
        h.splice(0, 0, "0.");
        return h.join("");
    }
}

function displayResult(bmi) {
    document.querySelector("#bmi_resultat").textContent = bmi;

    const betydningText = document.querySelector("#bmi_betydning");
    const bmiNumber = Number(bmi);

    if (bmiNumber < 18.5) {
        betydningText.textContent = "Du er undervægtig.";
    } else if (bmiNumber < 25) {
        betydningText.textContent = "Du er normalvægtig.";
    } else if (bmiNumber < 30) {
        betydningText.textContent = "Du er overvægtig.";
    } else if (bmiNumber > 30) {
        betydningText.textContent = "Du er svær overvægtig.";
    }
}