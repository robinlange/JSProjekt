var operator;
var zahl1;
var zahl2;
var schonGedrueckt = false;

function holeValue(objButton) {
    let ausgabe = document.getElementById("ausgabe");
    let text = ausgabe.textContent + objButton.value;
    ausgabe.textContent = text;
}

function resetRechner() {
    let ausgabe = document.getElementById("ausgabe");
    ausgabe.textContent = "";
    schonGedrueckt = false;
}

function plus() {
    if (schonGedrueckt !== true) {
        let ausgabeDIV = document.getElementById("ausgabe");
        operator = "+";
        zahl1 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = "";
        schonGedrueckt = true;
    }
}

function minus() {
    if (schonGedrueckt !== true) {
        operator = "-";
        let ausgabeDIV = document.getElementById("ausgabe");
        zahl1 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = "";
        schonGedrueckt = true;
    }
}

function mal() {
    if (schonGedrueckt !== true) {
        operator = "*";
        let ausgabeDIV = document.getElementById("ausgabe");
        zahl1 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = "";
        schonGedrueckt = true;
    }
}

function ergebnis() {
    let ausgabeDIV = document.getElementById("ausgabe");
    if (operator === "+") {
        zahl2 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = Math.round((zahl1 + zahl2)*100000000000) / 100000000000;
    } else if (operator === "-") {
        zahl2 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = Math.round((zahl1 - zahl2)*100000000000) / 100000000000;
    } else if (operator === "*") {
        zahl2 = parseFloat(ausgabeDIV.textContent);
        ausgabeDIV.textContent = Math.round((zahl1 * zahl2)*100000000000) / 100000000000;
    }

    schonGedrueckt = false;
}